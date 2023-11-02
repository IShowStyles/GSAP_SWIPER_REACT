import React, {useEffect, useMemo, useRef, useState} from 'react';
import gsap from 'gsap';
import './Slider.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {images} from "./assets";

export const Slider = () => {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const wrapperRef = useRef(null);
    const slideRef = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const data = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            src: images["1.png"]
        },
        {
            id: 2,
            title: "Тут может быть ваша реклама",
            src: images["2.png"]
        },
        {
            id: 3,
            title: "Тут может быть ваша реклама",
            src: images["3.png"]
        },
        {
            id: 4,
            title: "Тут может быть ваша реклама",
            src: images["4.png"]
        },
        {
            id: 5,
            title: "Тут может быть ...",
            src : images["5.png"]
        },
        {
            id: 6,
            title: "Тут может быть ...",
            src : images["6.png"]
        },
        {
            id: 7,
            title: "Тут может быть ...",
            src : images["7.png"]
        },
        {
            id: 8,
            title: "Тут может быть ...",
            src : images["8.png"]
        },
        {
            id: 9,
            title: "Тут может быть ...",
            src : images["9.png"]
        },
        {
            id: 10,
            title: "Тут может быть ...",
            src : images["10.png"]
        }
    ]

    const handlePrevClick = (e) => {
        if (swiperRef.current !== null) {
            swiperRef.current.swiper.slidePrev();
            console.log(e)
        }
    };

    const tl = gsap.timeline({paused: true})
    const handleNextClick = () => {
        if (swiperRef.current !== null) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const animationHandler = () => {
        setActiveIndex(swiperRef.current.swiper.activeIndex);
        tl.restart();
    }

    useEffect(() => {
        const activeNextSlideRef = slideRef.current[activeIndex + 1];
        const activeSlideRef = slideRef.current[activeIndex];
        const prevSlideRef = slideRef.current[activeIndex - 1];
        gsap.to(activeNextSlideRef, {
            clipPath: "circle(15% at 50% 50%)",
        })
        tl.to(activeSlideRef, {
            clipPath: "circle(15% at 50% 50%)",
        }).to(activeNextSlideRef, {
            clipPath: "circle(72% at 80% 50%)",
        }).to(prevSlideRef, {
            clipPath: "circle(72% at 80% 50%)",
        })
        gsap.set(prevSlideRef,{
            clipPath: "circle(15% at 50% 50%)",
            delay: 1
        })
    }, [activeIndex]);

    return (
        <>
            <div className="slider">
                <div className="container--lg">
                    <div className="wrapper">
                        <div className="button-wrap">
                            <button className="button" onClick={handlePrevClick} ref={prevRef}>
                                prev
                            </button>
                            <button className="button ml-10" onClick={handleNextClick} ref={nextRef}>
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
                                data.map(({src}, index) => (
                                    <SwiperSlide
                                        key={index.toString()}
                                    >
                                        {({isActive}) => (
                                            <div className="slider__item">
                                                <div className="text-wrap">
                                                    <div className={"text-inner"}>
                                                        <p className={isActive ? "text active" : "text"}>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
