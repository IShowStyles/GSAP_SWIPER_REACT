import React, {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import './Slider.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {images} from "./assets";
import useMediaQuery from "../../hooks/useMediaQuery";

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet.",
    src: images["1.png"]
  },
  {
    id: 2,
    title: "Тут може бути ваша реклама...",
    src: images["2.png"]
  },
  {
    id: 3,
    title: "Тут може бути ваша реклама...",
    src: images["3.png"]
  },
  {
    id: 4,
    title: "Тут може бути ваша реклама...",
    src: images["4.png"]
  },
  {
    id: 5,
    title: "Тут може бути ваша реклама...",
    src: images["5.png"]
  },
  {
    id: 6,
    title: "Тут може бути ваша реклама...",
    src: images["6.png"]
  },
  {
    id: 7,
    title: "Тут може бути ваша реклама...",
    src: images["7.png"]
  },
  {
    id: 8,
    title: "Тут може бути ваша реклама...",
    src: images["8.png"]
  },
  {
    id: 9,
    title: "Тут може бути ваша реклама...",
    src: images["9.png"]
  },
  {
    id: 10,
    title: "Тут може бути ваша реклама...",
    src: images["10.png"]
  }
]

export const Slider = () => {
  const [windowSize, setWindowSize] = useState(0)
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const slideRef = useRef([]);
  const [updatedCount, setUpdatedCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [clipPath, setClipPath] = useState({
    "half": "15% at 50% 50%",
    "full": "72% at 80% 50%",
  });

  const [blocked, setBlocked] = useState(false)
  const handlePrevClick = (e) => {
    if (swiperRef.current !== null) {
      setBlocked(true)
      swiperRef.current.swiper.slidePrev();
    }
  };

  const tl = gsap.timeline({paused: true})
  const handleNextClick = () => {
    if (swiperRef.current !== null) {
      setBlocked(true)
      swiperRef.current.swiper.slideNext();
    }
  };

  const animationHandler = () => {
    setActiveIndex(swiperRef.current.swiper.activeIndex);
    tl.restart();
  }

  useEffect(() => {
    setWindowSize(window.innerWidth)
  }, [])

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  const is2XL = useMediaQuery('(min-width: 1920px)');
  const isXL = useMediaQuery('(max-width: 1920px)');
  const isLG = useMediaQuery('(max-width: 1680px)');
  const isMD = useMediaQuery('(max-width: 1440px)');
  const isSM = useMediaQuery('(max-width: 1280px)');
  const isXS = useMediaQuery('(max-width: 1024px)');
  const isTablet = useMediaQuery('(max-width: 768px)');
  const isMobile = useMediaQuery('(max-width: 576px)');
  const isMobileXS = useMediaQuery('(max-width: 375px)');
  const isMobile2XS = useMediaQuery('(max-width: 321px)');


  useEffect(() => {
    console.log(123)
    console.log(windowSize)
    if (is2XL) {
      setClipPath(clipPathVal["2xl"])
    }
    if (isXL) {
      setClipPath({
        half: "15% at 50% 50%",
        full: "56% at 80% 50%"
      })
    }
    if (isLG) {
      setClipPath({
        half: "15% at 45% 45%",
        full: "60% at 75% 50%"
      })
    }
    if (isMD) {
      setClipPath({
        half: "15% at 45% 45%",
        full: "60% at 85% 46%"
      })
    }
    if (isSM) {
      setClipPath({
        half: "15% at 50% 50%",
        full: "54% at 88% 40%"
      })
    }
    if (isXS) {
      setClipPath({
        half: "15% at 50% 50%",
        full: "54% at 87% 41%"
      })
    }
    if (isTablet) {
      setClipPath({
        half: "9% at 50% 50%",
        full: "70% at 50% 16%"
      })
    }
    if (isMobile) {
      setClipPath({
        half: "8% at 50% 50%",
        full: "70% at 50% 16%"
      })
    }
    if (isMobileXS) {
      setClipPath({
        half: "8% at 50% 50%",
        full: "70% at 50% 35%"
      })
    }
    if (isMobile2XS) {
      setClipPath({
        half: "8% at 50% 50%",
        full: "70% at 50% 38%"
      })
    }

    console.log(clipPath)

    console.log("isTablet", isTablet)
    console.log("isMobile", isMobile)
    console.log("isMobileXS", isMobileXS)
    console.log("isMobile2XS", isMobile2XS)
    console.log("isSM", isSM)
    console.log("isMD", isMD)
    console.log("isXS", isXS)
    console.log("isLG", isLG)
    console.log("isXL", isXL)
    console.log("is2XL", is2XL)




  }, [windowSize, isTablet, isMobile, isMobileXS, isMobile2XS, isSM, isMD, isXS, isMD, isLG, isXL, is2XL])


  useEffect(()=>{

    if (slideRef.current[activeIndex] !== null) {
      slideRef.current[activeIndex].style.clipPath = ` circle(${clipPath.full})`;
    }
  },[clipPath])

  const clipPathVal = {
    "2xl": {
      half: "15% at 50% 50%",
      full: "72% at 80% 50%"
    },
    xl: {
      half: "",
      full: ""
    },
    lg: {
      half: "",
      full: ""
    },
    md: {
      half: "",
      full: ""
    },
    sm: {
      half: "",
      full: ""
    },
    xs: {
      half: "",
      full: ""
    },
    xss: {
      half: "",
      full: ""
    },
  }

  useEffect(() => {
    const activeNextSlideRef = slideRef.current[activeIndex + 1];
    const activeSlideRef = slideRef.current[activeIndex];
    const prevSlideRef = slideRef.current[activeIndex - 1];
    gsap.to(activeNextSlideRef, {
      clipPath: `circle(${clipPath.half})`,
    })
    tl.to(activeSlideRef, {
      clipPath: `circle(${clipPath.half})`,
    }).to(activeNextSlideRef, {
      clipPath: `circle(${clipPath.full})`,
    }).to(prevSlideRef, {
      clipPath: `circle(${clipPath.full})`,
    })
    gsap.set(prevSlideRef, {
      clipPath: `circle(${clipPath.half})`,
      delay: 1,
      onComplete: () => {
        setBlocked(false)
      }
    })
  }, [activeIndex, clipPathVal]);


  return (
      <>
        <div className="slider">
          <div className="container--lg">
            <div className="wrapper">
              <div className="button-wrap">
                <button className="button" disabled={blocked} onClick={handlePrevClick} ref={prevRef}>
                  prev
                </button>
                <button className="button ml-10" disabled={blocked} onClick={handleNextClick} ref={nextRef}>
                  next
                </button>
              </div>
              <Swiper
                  ref={swiperRef}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  onSlideChange={() => animationHandler()}
                  speed={700}
                  direction={"vertical"}
                  centeredSlides={true}
              >
                {
                  data.map(({src, title}, index) => (
                      <SwiperSlide
                          key={index.toString()}
                      >
                        {({isActive}) => (
                            <div className="slider__item">
                              <div className="text-wrap">
                                <div className={"text-inner"}>
                                  <p className={isActive ? "text active" : "text"}>
                                    {title}
                                  </p>
                                </div>
                              </div>
                              <div ref={ref => slideRef.current[index] = ref}
                                   className="slider__item-img">
                                <img src={src} alt=""/>
                              </div>
                            </div>
                        )}
                      </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
      </>
  );
};
