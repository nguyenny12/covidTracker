import React, {useState} from 'react'
import {NumberFormat} from '../../utils/DataFormatter'


const VaccineCity = props => {
  const dataCity = props.city
   

  const [Count, setCount] = useState(10)
  const FnCount= ()=>{
    if(Count ===10){
        setCount(63)
       
    }else{
        setCount(10)
      
    }
}
  return (
   <>
   {
     dataCity.data && (
       
    <div>
    <div className=' w-full bg-white dark:bg-[#13283f]  mt-8 rounded-2xl shadow-md p-2'>
  <div className="bg-sky-100 p-2 sm:p-3 rounded-lg">
      <p className='text-cyan-800 text-[20px] text-center sm:text-[15px]  font-semibold'>
        Phân bổ vaccine
      </p>
     
  </div>
  <div className=" w-full  sm:p-[10px]  md:p-6 " >
      <table className=' w-full text-gray-600' >
          <thead>
              <tr className=' font-semibold'>
                  <th  className=' text-center sm:text-left text-[13px]  sm:text-[15px]'>STT</th>
                  <th className=' text-center sm:text-left  text-[13px]  sm:text-[15px]'>Tỉnh</th>
                  <th className=' text-center sm:text-right text-[13px] sm:text-[15px]'>Phân bổ
thực tế</th>
                  <th className='text-right text-[13px] sm:text-[15px]'>Số liều
đã tiêm</th>
              </tr>
          </thead>
          <tbody>
              {
                  dataCity.data
                  .slice(0, Count)
                  .map((item, index)=>(
                      <tr key={index} className=' '>
                          <th className='py-1 font-[500] text-center text-[13px] sm:text-[15px] sm:text-left text-gray-800  dark:text-slate-400'>{index+1}</th>
                          <th className='py-1 font-[500] text-center text-[13px] sm:text-[15px] sm:text-left text-gray-800 dark:text-slate-400'>{item.provinceName}</th>
                          <th className='py-1 font-[500] text-center text-[13px] sm:text-[15px] sm:text-right text-sky-500'>{ NumberFormat(item.totalVaccineAllocatedReality)}</th>
                          <th className='py-1 font-[500] text-right text-[13px] sm:text-[15px] dark:text-gray-300'>{NumberFormat(item.totalInjected)}</th>
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
</div>
     )
   }
   
   </>
  )
}

export default VaccineCity