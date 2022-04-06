import React from 'react'
import { NumberFormat } from '../../utils/DataFormatter'


const VaccineTable = props => {
    const VaccineData = props.VaccineData
    
    return (
       <>
       {
           VaccineData && (
            <div className="mt-[20px] w-full bg-white dark:bg-[#13283f] rounded-2xl shadow-md ">
            <div className="grid sm:grid-cols-3 grid-cols-1 text-center border-b ">
                <div className=" py-5">
                    <span className=" text-[15px] md:text-[17px] font-semibold text-[#1b1053] dark:text-white">
                        Tổng số người đã tiêm
                    </span>
                   
                       <div className=" font-semibold text-[25px] dark:text-[#0e9dd9]">
                            {NumberFormat(VaccineData.data[VaccineData.data.length - 1]['1Dose'])}
                        </div>
               
                </div>
                <div className=" py-5 sm:border-l sm:border-r">
                    <span className=" text-[15px] md:text-[17px]  font-semibold text-[#1b1053] dark:text-white">
                        Đã tiêm 2 mũi
                    </span>
                    <div className=" font-semibold text-[25px] text-[#1cb14b]">
                            {NumberFormat(VaccineData.data[VaccineData.data.length - 1]['totalFull'])}
                        </div>
                    
                </div>
                <div className=" py-5">
                    <span className=" text-[15px] md:text-[17px] font-semibold text-[#1b1053] dark:text-white">
                         Đã tiêm tăng cường
                    </span>
                    <div className=" font-semibold text-[25px] text-[#817c98]">
                            {NumberFormat(VaccineData.data[VaccineData.data.length - 1]['3Dose'])}
                        </div>
                  
                </div>
            </div>
            <div className="px-3 sm:px-9 py-3">
                <div className="mb-3 ">
                   <div className="px-3 inline-block bg-cyan-100 rounded-full">
                   <span className='text-left text-[13px] font-bold text-cyan-400' >% dân số đã tiêm mũi 2</span>
                   </div>
                   
                       
                        
                  
                </div>
              <div className="w-full h-5 bg-emerald-50 rounded-full" >
                 <div className="bg-cyan-200 h-full rounded-full flex  justify-center text-[13px] font-bold text-cyan-400" style={{ width: Number(VaccineData.secondRatio).toFixed(2) + '%' }}>
                 {Number(VaccineData.secondRatio).toFixed(2)}%
                 </div>
              </div>
              <div className="mt-2 text-[12px] dark:text-white">
                  Mục tiêu: 70% dân số (tương đương khoảng 150 triệu liều vaccine)
              </div>
            </div>
        </div>
           )
       }
       </>
    )
}
export const ItemVaccine = props => {

}

export default VaccineTable