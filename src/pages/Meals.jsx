import { useEffect, useState } from 'react'
import MealCard from '../components/MealCard.jsx'

function Meals() {
  const [meals, setMeals] = useState([])
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setMeals(data.meals || []))
      .catch((error) => console.log('식단 데이터 로드 실패:', error))
  }, [])

  const filteredMeals = meals.filter((meal) => meal.title.includes(keyword))

  return (
    <div className="contents">
      <section>
        <h2>식단관리</h2>
        <p className="page-desc">메뉴 이름을 검색하고 건강한 한 끼 아이디어를 찾아보세요.</p>
        <input className="search-input" type="text" placeholder="예: 연어, 샐러드" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <p className="result-count">검색 결과 {filteredMeals.length}개</p>
        <div className="card-grid">
          {filteredMeals.map((item) => <MealCard key={item.id} item={item} />)}
        </div>
      </section>
    </div>
  )
}
export default Meals
