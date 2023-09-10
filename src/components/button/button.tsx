import React from "react";
import { buildClassNames } from "@utils";

import style from "./index.module.css";

export type IntrinsicButtonElements = Extract<
    keyof JSX.IntrinsicElements,
    "button" | "span"
>;

export interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    as?: IntrinsicButtonElements;
    variant?: "brand" | "outline";
    size?: "default" | "small";
}

const Button: React.ComponentType<ButtonProps> = ({
    children,
    variant = "brand",
    disabled = false,
    onClick,
    as = "button",
    size = "default",
}) => {
    return (
        <>
            {React.createElement(
                as,
                {
                    className: buildClassNames([
                        style.button,
                        style[variant],
                        style[size],
                    ]),
                    disabled: disabled,
                    type: "button",
                    role: "button",
                    onClick: onClick,
                },
                children,
            )}
        </>
    );
};

Button.displayName = "Button";

export default Button;
