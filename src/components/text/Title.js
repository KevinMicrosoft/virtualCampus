import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";

const manualSt = makeStyles(() => ({
  heading: {
    lineHeight: 'min(3.1rem, 5vw)',
    fontSize: 'min(5.5vw, 48px)',
    textAlign:'center'
  },
  orange:{
    color: '#FB750D !important',
  },
  blue: {
    color: '#0072CE !important'
  },
  black: {
    color:'#000000 !important'
  }
}));

export default function Title({children, color, className, ...rest}) {
  const manual = manualSt();
  const headingClasses = classNames({
    [className]: className,
    [manual.heading]: true,
    [manual[color]]: color
  });
  return(
    <h1 className={headingClasses} {...rest}> {children} </h1>
  )
}

Title.propTypes = {
  color: PropTypes.oneOf(["orange", "blue", "black"]),
  className: PropTypes.string
};

Title.defaultProps = {
  color: "blue",
};
