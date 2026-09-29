import { useEffect, useState } from 'react'
import HeroSlider from '../components/HeroSlider.jsx'
import MealCard from '../components/MealCard.jsx'

function Home() {
  const [recs, setRecs] = useState([])

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => {
        const meals = data.meals || []
        const recommendedMeals = meals.filter((meal) => meal.recommended === true)
        const firstFour = recommendedMeals.slice(0, 4)
        setRecs(firstFour)
      })
      .catch((error) => console.log('db.json 로드 실패:', error))
  }, [])

  return (
    <div className="contents">
      <HeroSlider />
      <section>
        <div className="intro-text">
          <h1><span>MealLight 미라이트</span><span>“건강한 식사의 빛을 비추다”</span></h1>
          <div className="text-area">
            <p className="text">매일 무엇을 먹느냐는, 결국 어떤 삶을 선택하느냐와 같습니다.</p>
            <p className="text">미라이트는 가볍지만 균형 있는 식사와 일상에서 실천할 수 있는 건강 습관을 소개합니다.</p>
            <p className="text">지금, 당신의 건강한 한 끼를 미라이트에서 만나보세요.</p>
          </div>
        </div>
        <div className="recommendArea">
          <h2>오늘의 PICK</h2>
          <div className="card-grid">
            {recs.map((item) => <MealCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home
