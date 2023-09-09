"use client";

import React from "react";
import { Grid, Button, Flex } from "@components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import style from "./index.module.css";

const sliderLogos = [
    "bmw.webp",
    "bae.svg",
    "mercedes.webp",
    "honda.svg",
    "siemens.svg",
    "honeywell.webp",
    "kautex.webp",
    "michelin.webp",
    "aptar.svg",
    "jota.webp",
];

const Hero: React.ComponentType = () => {
    return (
        <Grid className={style.hero} gap={6}>
            <div className={style.image} />
            <Grid className={style.text} gap={2}>
                <span>{"Monolith"}</span>
                <h1>{"Use AI software to test less and learn more."}</h1>
                <p>
                    {
                        "Spend less time running expensive, repetitive tests and more time learning from your engineering data to predict the exact tests to run."
                    }
                </p>
            </Grid>
            <Flex>
                <Button>{"Request Demo"}</Button>
                <Button variant="outline">{"Speak to our team"}</Button>
            </Flex>
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    pauseOnMouseEnter: true,
                }}
                className={style.slider}
                loop
                speed={3000}
                breakpoints={{
                    480: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
            >
                {sliderLogos.map((logo) => (
                    <SwiperSlide key={logo} className={style.slide}>
                        <span className={style.link}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                alt={logo}
                                src={`/brand-logos/${logo}`}
                                loading="lazy"
                            />
                        </span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Grid>
    );
};

export default Hero;
