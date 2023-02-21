// import React from "react";
import PropTypes from "prop-types";

export default function DetailAbout(props) {
  //   const [data, _] = React.useState({
  //     name: "",
  //     email: "",
  //     number: 0,
  //     isAdmin: false,
  //   });

  return (
    <>
      <h1>title: {props.title}</h1>
      <p>summary: {props.summary}</p>
      <span>total: {props.total}</span>
    </>
  );
}

DetailAbout.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  total: PropTypes.number,
};
