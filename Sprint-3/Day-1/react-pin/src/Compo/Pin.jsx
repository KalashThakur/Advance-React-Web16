import React from 'react'
import { useState } from 'react';
import PropTypes from "prop-types";

export const Pin = ({length, onChange}) => {
    const [inputBoxLen] = useState(new Array(length).fill(1))
  return (
    <div>
        {/* Create 4 input boxes */}
        {/* {new Array(length).fill(1).map((item, index) => {
            return <input key={index} />
        })} */}

        {inputBoxLen.map((item, index) => {
            return <input key={index} />
        })}
    </div>
  )
}

//Proptypes -> way to limit the types of props that you get in a react component

Pin.propTypes = {
    length: PropTypes.number,
    onChange: PropTypes.func
}

