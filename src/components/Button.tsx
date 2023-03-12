import { MouseEventHandler, useEffect, useState } from "react";

export const Button = (props: {
  color?: "primary" | "white" | "black" | "transparent" | "error";
  icon?: any;
  title?: string;
  size?: "default" | "small" | "large";
  variant?: "plain" | "outline" | "primary";
  fullWidth?: boolean;
  disabled?: boolean;
  dark?: boolean;
  className?: string;
  titleClass?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  const {
    color,
    className,
    icon,
    title,
    onClick,
    size,
    variant,
    disabled,
    dark,
    fullWidth,
    titleClass,
  } = props;
  const [buttonClass, setButtonClass] = useState("");
  const [spanClass, setSpanClass] = useState("");
  useEffect(() => {
    let btnClass = "";
    let textClass = "";
    let bgColor = "";
    switch (color) {
      case "primary":
        bgColor = "bg-primary";
        break;
      case "white":
        bgColor = "bg-white";
        break;
      case "error":
        bgColor = "border-apollo-error bg-apollo-error";
        break;
      case "black":
        bgColor = "border-apollo-black bg-apollo-black";
        break;
      case "transparent":
        break;
      default:
        bgColor = "bg-primary";
        break;
    }
    switch (variant) {
      case "plain":
        setButtonClass("border-transparent bg-transparent");
        btnClass = "border-transparent bg-transparent";
        setSpanClass("text-primary");
        textClass = "text-primary";
        break;
      case "outline":
        setButtonClass(bgColor + " border-primary bg-transparent");
        btnClass = bgColor + " border-primary bg-transparent";
        setSpanClass("text-primary");
        textClass = "text-primary";
        break;
      default:
        setButtonClass(
          bgColor + " border-primary hover:border-secondary hover:bg-secondary"
        );
        btnClass =
          bgColor + " border-primary hover:border-secondary hover:bg-secondary";
        setSpanClass("text-white");
        textClass = "text-white";
        break;
    }
    switch (size) {
      case "small":
        setButtonClass(btnClass + " py-1.5 px-2.5");
        setSpanClass(textClass + " text-caption-1");
        break;
      case "large":
        setButtonClass(btnClass + " py-3.5 px-8 ");
        setSpanClass(textClass + " text-body");
        break;
      default:
        setButtonClass(btnClass + " py-2 px-4");
        setSpanClass(textClass + " text-callout");
        break;
    }
    // eslint-disable-next-line
  }, [variant, size]);
  return (
    <button
      disabled={disabled}
      className={`inline-flex border-2 items-center apollo-button rounded-lg disabled:opacity-40 disabled:pointer-events-none justify-center ${buttonClass} ${
        fullWidth ? "w-full" : ""
      } ${className ? className : ""}`}
      onClick={onClick}
    >
      {icon ? icon : <></>}
      {title ? (
        <span className={`ml-[4px] font-primary ${spanClass} ${titleClass}`}>
          {title}
        </span>
      ) : (
        <></>
      )}
    </button>
  );
};
