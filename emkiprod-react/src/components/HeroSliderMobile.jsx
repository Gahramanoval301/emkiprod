import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const img = [
    { col: 1, src: '/assets/img/hero-1-1.png' },
    { col: 1, src: '/assets/img/hero-1-2.png' },
    { col: 1, src: '/assets/img/hero-1-3.png' },
    { col: 2, src: '/assets/img/hero-2-1.png' },
    { col: 2, src: '/assets/img/hero-2-2.png' },
    { col: 2, src: '/assets/img/hero-2-3.png' },
    { col: 3, src: '/assets/img/hero-3-1.png' },
    { col: 3, src: '/assets/img/hero-3-2.png' },
    { col: 3, src: '/assets/img/hero-3-3.png' }
];

function HeroSliderMobile() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 2000,
        arrows: false,
        cssEase: 'linear',
        draggable: false,
        swipe: false,
        touchMove: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <div className="slider-container lg:hidden my-8 pb-12">
            <Slider key={windowWidth} {...settings}>
                {img.map((img, i) => (
                    <img key={i} className="rounded-3xl" src={img.src} alt={`hero-${i}`} />
                ))}
            </Slider>
        </div>
    );
}

export default HeroSliderMobile;
