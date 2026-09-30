import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    alt: "연어 스테이크"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1625467150224-673f708dd8e8?auto=format&fit=crop&w=1200&q=80",
    alt: "토마토 파스타"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=1200&q=80",
    alt: "아보카도 요리"
  }
];

function HeroSlider() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((currentIndex) => {
        console.log("currentIndex:", currentIndex);
        return (currentIndex+ 1) % slides.length;
      });
    }, 3000);
    /* 
      현재 인덱스      3초 후 인덱스
           0           (0 + 1) / 3 =  1
           1           (1 + 1) / 3 = 2
           2           (2 + 1) / 3 = 0
    
    */

    return () => clearInterval(timer); //화면을 다른 페이지로 이동
  }, []);

  const prevSlide = () => setSlideIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length);
  /* 
      현재 인덱스   => currentIndex -1 + 3 / 3  = 
          0                0  - 1 + 3 / 3  = 2
          2                2  - 1 + 3 / 3  = 1
          1                1  - 1 + 3 / 3  = 0
  */
  const nextSlide = () => setSlideIndex((currentIndex) => (currentIndex + 1) % slides.length);
  /* 
      현재 인덱스   => currentIndex + 1  / 3  
          0                0  + 1 / 3  = 1
          1                1  + 1 / 3  = 2
          2                2  + 1  / 3  = 0
  */

  return (
    <div className="hero-slide">
      <img src={slides[slideIndex].image} alt={slides[slideIndex].alt} />
      <button className="slide-btn prev" onClick={prevSlide} aria-label="이전 이미지">
        ‹
      </button>
      <button className="slide-btn next" onClick={nextSlide} aria-label="다음 이미지">
        ›
      </button>
      <div className="slide-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={index === slideIndex ? "on" : ""}
            onClick={() => setSlideIndex(index)}
            aria-label={`${index + 1}번 이미지`}
          />
        ))}
      </div>
    </div>
  );
}
export default HeroSlider;
