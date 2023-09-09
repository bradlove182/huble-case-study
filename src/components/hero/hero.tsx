import React from "react";
import { Grid, Button, Flex } from "@components";

const Hero: React.ComponentType = () => {
    return (
        <Grid>
            <span>{"Monolith"}</span>
            <h1>{"Use AI software to test less and learn more."}</h1>
            <p>
                {
                    "Spend less time running expensive, repetitive tests and more time learning from your engineering data to predict the exact tests to run."
                }
            </p>
            <Flex>
                <Button>{"Request Demo"}</Button>
                <Button variant="outline">{"Speak to our team"}</Button>
            </Flex>
            {"Slider"}
        </Grid>
    );
};

export default Hero;
