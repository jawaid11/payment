import React from "react";

const Logo = () => {
  const textStyles = {
    position: "absolute",
    left: "0.5px",
    top: "0.1px",
    width: "158px",
    height: "40px",
    fontFamily: "Raleway",
    fontStyle: "black",
    fontSize: "25px",
    lineHeight: "45px",
    textAlign: "center",
    verticalAlign: "middle",
    letterSpacing: "3%",
    background: "linear-gradient(42.14deg, #0096FF, #0048FF 96.7%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return <div style={textStyles}>EDYODA</div>;
};

export default Logo;