
import React, {useState} from 'react'

import {NumberFormat} from '../../utils/DataFormatter'
const CaseCity = props => {
    const   DataCity   = props.Data
   
    const [Count, setCount] = useState(10)

    const FnCount= ()=>{
        if(Count ===10){
            setCount(64)
           
        }else{
            setCount(10)
          
        }
    }

  return (
    <div className=' w-full bg-white dark:bg-[#13283f]  mt-8 rounded-2xl shadow-md p-2'>
        <div className="bg-sky-100 p-2 sm:p-3 rounded-lg">
            <p className='text-cyan-800 text-[13px] sm:text-[15px]  font-semibold'>Tình hình COVID-19 tại các tỉnh thành Việt Nam</p>
           
        </div>
        <div className=" w-full  sm:p-[10px]  md:p-6 " >
            <table className=' w-full text-gray-600' >
                <thead>
                    <tr className=' font-semibold'>
                        <th  className=' text-center sm:text-left text-[13px]  sm:text-[15px]'>STT</th>
                        <th className=' text-center sm:text-left  text-[13px]  sm:text-[15px]'>Tỉnh</th>
                        <th className='text-right text-[13px] sm:text-[15px]'>Hôm nay</th>
                        <th className='text-right text-[13px] sm:text-[15px]'>Tổng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        DataCity
                        .slice(0, Count)
                        .map((item, index)=>(
                            <tr key={index} className=' '>
                                <th className='py-1 font-[500] text-center text-[13px] sm:text-[15px] sm:text-left text-gray-800  dark:text-slate-400'>{index+1}</th>
                                <th className='py-1 font-[500] text-center text-[13px] sm:text-[15px] sm:text-left text-gray-800 dark:text-slate-400'>{item.x}</th>
                                <th className='py-1 font-[500] text-center text-[13px] sm:text-[15px] sm:text-right text-sky-500'>+{ (item.y.toFixed(1))}</th>
                                <th className='py-1 font-[500] text-right text-[13px] sm:text-[15px] dark:text-gray-300'>{NumberFormat(item.z)}</th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
       
            <button onClick={FnCount} className='w-full mt-2 sm:p-3 p-2 bg-sky-100 rounded-lg text-cyan-800 font-semibold'>
                {Count=== 10 ? 'Xen thêm' : 'Thu gọn'}
            </button>
       
    </div>
  )
}

export default CaseCity