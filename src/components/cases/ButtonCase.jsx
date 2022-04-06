import React from 'react'
import propTypes from 'prop-types'
const ButtonCase = props => {

  return (
    <button 
    className= {`bg-white dark:bg-[#263142] w-full px-3 sm:py-1 border-2 border-inherit dark:border-[#0f172a] rounded-full text-sm dark:text-[#bbb5b5] hover:scale-105 transition-transform`}
    onClick={props.onClick ? ()=> props.onClick() : null}>
        {props.name}
    </button>
  )
}
ButtonCase.prototype={
    onclick: propTypes.func
}
export default ButtonCase