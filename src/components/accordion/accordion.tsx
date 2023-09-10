"use client";

import React, { useCallback, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Button, Flex, Grid } from "@components";

import { accordionData } from "./data";

import style from "./index.module.css";

const Accordion: React.ComponentType = () => {
    const [activeIndex, setActiveIndex] = useState<number | undefined>(0);

    const handleAccordionOnClick = useCallback(
        (index: number) => () => {
            setActiveIndex((previous) =>
                previous === index ? undefined : index,
            );
        },
        [],
    );

    return (
        <Grid className={style.container} gap={4}>
            <h2>
                {"Connecting the industry through digital closing solutions"}
            </h2>
            <p>
                {
                    "Select your organization type to learn how Snapdocs can help you save time and money on every transaction."
                }
            </p>
            <Flex fullWidth alignItems="center">
                <div className={style.accordions}>
                    {accordionData.map((item, index) => (
                        <div
                            className={style.accordion}
                            key={item.title}
                            onClick={handleAccordionOnClick(index)}
                            aria-expanded={index === activeIndex}
                        >
                            <Flex
                                fullWidth
                                justifyContent="space-between"
                                className={style["accordion-title"]}
                            >
                                <h3>{item.title}</h3>
                                <FaAngleDown />
                            </Flex>
                            <div className={style["accordion-content"]}>
                                <Grid gap={4}>
                                    <p>{item.description}</p>
                                    <Flex>
                                        <Button size="small">
                                            {"Learn More"}
                                        </Button>
                                        <Button size="small" variant="outline">
                                            {"Get in touch"}
                                        </Button>
                                    </Flex>
                                </Grid>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={style["accordion-images"]}>
                    {accordionData.map((item, index) => (
                        <div
                            key={item.title}
                            className={style["accordion-image"]}
                            aria-hidden={index !== activeIndex}
                        >
                            <div>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={item.image} alt={item.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </Flex>
        </Grid>
    );
};

export default Accordion;
