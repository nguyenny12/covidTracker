import axios from 'axios'
import React, {useState, useEffect} from 'react'
import TotalCase from '../components/cases/TotalCase'
import FnChart from '../components/cases/FnChart'
import CaseCity from '../components/CaseCity/CaseCity'
import { COVID_CASES_PROVINCE, COVID_VACCINE_VIETNAM, COVID_VACCINE_VIETNAM_2 } from '../api/data'
import VaccineTable from '../components/Vaccine/VaccineTable'
import VaccineCity from '../components/Vaccine/VaccineCity'

const Home = () => {
  const [DataCity, setDataCity] = useState([])
  const [VaccineData, setVaccineData] = useState([])
  const [VaccineDataCity, setVaccineDataCity] = useState([])
  useEffect(() => {
    const DataCovid = async ()=>{
        try {
            await axios
            .get(COVID_CASES_PROVINCE)
            .then((c)=>{setDataCity(c.data.data.cases)})


        } catch (error) {
            
        }
    }
    const VaccinecCoivd = async ()=>{
      try {
          await axios
          .get(COVID_VACCINE_VIETNAM)
          .then((c)=>{setVaccineData(c.data)})

          
      } catch (error) {
          
      }
  }
  const VaccineCity = async ()=>{
    try {
        await axios
        .get(COVID_VACCINE_VIETNAM_2)
        .then((c)=>{setVaccineDataCity(c.data)})

        
    } catch (error) {
        
    }
}
    DataCovid();
    VaccinecCoivd();
    VaccineCity()
 }, [])

    return (
        <div className='sm:mx-auto px-3 md:px-8 pt-8 '>
         
          <TotalCase/>
          <div className="mt-10 w-full grid grid-cols-1 xl:grid-cols-2 gap-5 ">
          <FnChart name='Tổng số ca tại Việt Nam ' type='area'/>
          <FnChart name='Số ca theo ngày tại Việt Nam' type='bar'/>
          </div>
          <CaseCity Data={DataCity}/>
          <VaccineTable VaccineData={VaccineData.data} />
          <VaccineCity city= {VaccineDataCity} />
        </div>
    )
}



export default Home
