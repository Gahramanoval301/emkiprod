import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const img1 = [
    { col: 1, src: '/assets/img/hero-1-1.png' },
    { col: 1, src: '/assets/img/hero-1-2.png' },
    { col: 1, src: '/assets/img/hero-1-3.png' }
];
const img2 = [
    { col: 2, src: '/assets/img/hero-2-1.png' },
    { col: 2, src: '/assets/img/hero-2-2.png' },
    { col: 2, src: '/assets/img/hero-2-3.png' }
];
const img3 = [
    { col: 3, src: '/assets/img/hero-3-1.png' },
    { col: 3, src: '/assets/img/hero-3-2.png' },
    { col: 3, src: '/assets/img/hero-3-3.png' }
];

function HeroSliderDesktop() {
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

    const baseSettings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        pauseOnHover: false,
        speed: 2000,
        arrows: false,
        cssEase: 'linear',
        draggable: false,
        vertical: true,
        infinite: true,
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

    const settings1 = { ...baseSettings, rtl: false };
    const settings2 = { ...baseSettings, rtl: true };
    const settings3 = { ...baseSettings, rtl: false };

    return (
        <div className="flex gap-5">
            <div className="slider-container hidden lg:block">
                <Slider key={windowWidth} {...settings1}>
                    {img1.map((img, i) => (
                        <img key={i} className="rounded-3xl" src={img.src} alt={`hero-${i}`} />
                    ))}
                    {img1.map((img, i) => (
                        <img key={i + img1.length} className="rounded-3xl" src={img.src} alt={`hero-${i}`} />
                    ))}
                </Slider>
            </div>
            <div className="slider-container hidden lg:block">
                <Slider key={windowWidth + 1} {...settings2}>
                    {img2.map((img, i) => (
                        <img key={i} className="rounded-3xl" src={img.src} alt={`hero-${i}`} />
                    ))}
                    {img2.map((img, i) => (
                        <img key={i + img2.length} className="rounded-3xl" src={img.src} alt={`hero-${i}`} />
                    ))}
                </Slider>
            </div>
            <div className="slider-container hidden lg:block">
                <Slider key={windowWidth + 2} {...settings3}>
                    {img3.map((img, i) => (
                        <img key={i} className="rounded-3xl" src={img.src} alt={`hero-${i}`} />
                    ))}
                    {img3.map((img, i) => (
                        <img key={i + img3.length} className="rounded-3xl" src={img.src} alt={`hero-${i}`} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default HeroSliderDesktop;

