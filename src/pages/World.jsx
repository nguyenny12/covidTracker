import axios from 'axios'
import moment from 'moment'
import React, {useState, useEffect} from 'react'
import { COVID_WORLD } from '../api/data'
import { CovidLine } from '../components/cases/TotalCase'
import { NumberFormat } from '../utils/DataFormatter'
import SkeletonCard from '../components/Skeleton'
const World = () => {
    const [CoivdWorld, setCoivdWorld] = useState([])
    const [Loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const DataWorld = setTimeout(
            async () =>{
                await axios
                .get(COVID_WORLD)
                .then((c)=>{setCoivdWorld(c.data)})
              setLoading(false)
              
              
        }, 1000);
       return ()=> clearTimeout(DataWorld)
    }, [])
    
    return (
      <>
      {Loading && <SkeletonCard />}
      {!Loading && (
          <div className='text-center mx-auto mt-4'>
          <div className="dark:text-white text-center">
          <h3 className='text-[15px] sm:text-[30px] font-bold'>Số liệu COVID-19 Thế Giới
  
          </h3>
          <span className='text-[15px]'>(Cập nhật ngày: {moment().format("DD/MM/YYYY") } )</span>
      </div>
  
      <div className="mt-6 grid xl:grid-cols-4 sm:grid-cols-2  grid-cols-1 gap-5">
      <CovidLine 
                          title='Dân số thế giới'
                          color='text-[#FA6400]'
                          casetotal={NumberFormat(Number(CoivdWorld.population))}
                           casedaily=''
                           />
      <CovidLine
                          title='Ca nhiễm'
                          color='text-[#F9345E]'
                          casetotal={NumberFormat(Number(CoivdWorld.cases))}
                          casedaily={NumberFormat(Number(CoivdWorld.todayCases))} />
            <CovidLine 
                          title='Hồi phục'
                          color='text-[#1CB142]'
                          casetotal={NumberFormat(NumberFormat(Number(CoivdWorld.recovered)))}
                          casedaily={NumberFormat(Number(CoivdWorld.todayRecovered))} />
                           <CovidLine 
                              title='Tử vong'
                              color='text-[#817C98]'
                              casetotal={NumberFormat(Number(CoivdWorld.deaths))}
                              casedaily={NumberFormat(Number(CoivdWorld.todayDeaths))} />
        </div>
         </div>
      )}
      </>
    )
}

export default World
