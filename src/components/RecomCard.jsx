import React from 'react'

const RecomCard = ({ item }) => {
  return (
    <div className="card">
        <figure><img src={item.image} alt={item.title} /></figure>
        <div className="recom-text">
            <h3>{item.title}</h3>
            <div className="info">
                <span className="calorie">{item.calorie}kcal</span>
                <span className="tag">
                    {item.tags.join("·")} 
                </span>
            </div>
            <p className="text">{item.desc}</p>            
        </div>
    </div>
  )
}

export default RecomCard