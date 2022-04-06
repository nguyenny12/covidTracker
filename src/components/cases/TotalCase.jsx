
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { COVID_CASES_VIETNAM } from '../../api/data';
import {  NumberFormat } from '../../utils/DataFormatter';
import moment from 'moment';
const TotalCase = () => {

    const [Datacovid, setDatacovid] = useState([]);

    const fetchCovid = async () => {
        try {
            await axios
            .get(COVID_CASES_VIETNAM)
            .then((c)=>{
                setDatacovid(c.data.data.vnSeason4CommunityDaily)
            })

        } catch (error) {
            console.log('data is error: ', error)
        }
    }
    useEffect(() => {
  
        fetchCovid();

    }, []);
    

    return <>
        {
            Datacovid.data && <>
                <div className="dark:text-white text-center">
                    <h3 className='text-[15px] sm:text-[30px] font-bold'>Số liệu COVID-19 tại Việt Nam

                    </h3>
                    <span className='text-[15px]'>(Cập nhật ngày: {moment((Datacovid.data[Datacovid.data.length - 1].date)).format('DD/MM/YYYY')})</span>
                </div>

                <div className="mt-6 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                    <CovidLine
                        title='Ca nhiễm'
                        color='text-[#F9345E]'
                        casetotal={NumberFormat(Datacovid.data[Datacovid.data.length - 1].total)}
                        casedaily={NumberFormat(Datacovid.data[Datacovid.data.length - 1].daily)} />
                    <CovidLine item={Datacovid.data[Datacovid.data.length - 1]}
                        title='Hồi phục'
                        color='text-[#1CB142]'
                        casetotal={NumberFormat(Datacovid.data[Datacovid.data.length - 1]['total-recover'])}
                        casedaily={NumberFormat(Datacovid.data[Datacovid.data.length - 1].recover)} />
                        <CovidLine item={Datacovid.data[Datacovid.data.length - 1]}
                            title='Tử vong'
                            color='text-[#817C98]'
                            casetotal={NumberFormat(Datacovid.data[Datacovid.data.length - 1]['total-dead'])}
                            casedaily={NumberFormat(Datacovid.data[Datacovid.data.length - 1].dead)} />
                    <CovidLine item={Datacovid.data[Datacovid.data.length - 1]}
                        title='Ca cộng đồng'
                        color='text-[#FA6400]'
                        casetotal={NumberFormat(Datacovid.data[Datacovid.data.length - 1].community)}
                         casedaily=''
                         />

                </div>
            </>
        }
    </>;

};

export const CovidLine = props => {
    return <div className={`w-full sm:w-[270px]  bg-white px-4 py-4 rounded-[30px] flex flex-col shadow-md dark:bg-[#13283f] `}>


        <div className=" flex flex-col justify-center items-center text-[#1b1053] dark:text-white">
            <span className='  text-[20px] font-bold'>{props.title}</span>
            <span className={` ${props.color} text-[30px] font-bold my-4`}> {(props.casetotal)}</span>
            {props.casedaily ?  (<span className='text-[20px]  inline-block   '> +{(props.casedaily)}</span>): null}
        </div>
    </div>
}



TotalCase.prototype={
    title: PropTypes.string,
    casedaily : PropTypes.number
}

export default TotalCase;

