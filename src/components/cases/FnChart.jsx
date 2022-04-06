

import React, {useReducer} from 'react'
import ButtonCase from './ButtonCase';
import Graph from './Graph'

const reducer = (range, action) => {
  switch (action) {
    case "all":
      return undefined;
    case "month":
      return 31;
    case "week":
      return 7;
    default:
      return undefined;
  }

};
const FnChart = props => {
  const [state, dispatch] = useReducer(reducer, undefined)

  return(
     <div className=" bg-white dark:bg-[#13283f] rounded-2xl w-full shadow-md">
       <div className="text-lg md:text-xl text-black dark:text-white font-semibold p-5 text-center">
         {props.name}
       </div>
       <Graph range={state} type={props.type} />
       <div className="p-3 sm:p-4 grid grid-cols-3 gap-3 ">
        <ButtonCase name='Tuần' 
        onClick={()=> dispatch('week')}
        />
        <ButtonCase name='Tháng' onClick={()=> dispatch('month')}/>
        <ButtonCase name ='Tất cả'  onClick={()=> dispatch('all')}/>
       </div>
     </div>
  )
  }

export default FnChart
