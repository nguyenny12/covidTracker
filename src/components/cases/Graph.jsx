import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {  Tooltip, Area, CartesianGrid, XAxis, YAxis, ComposedChart, ResponsiveContainer, Bar } from 'recharts';
import { COVID_CASES_VIETNAM } from '../../api/data'
import { NumberFormat } from '../../utils/DataFormatter';


const Graph = props => {
    const [data, setData] = useState([])
    useEffect(() => {
      const FetchData = async () => {
        try {
          await axios
            .get(COVID_CASES_VIETNAM)
            .then((c) => {
              setData(c.data.data.vnSeason4CommunityDaily.data)
            })
        } catch (error) {
  
        }
      }
      FetchData();
    }, []);
    
    const nFormatter = (num, digits) =>{
      const nb = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
      ];
      const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
      let i;
      for (i = nb.length - 1; i > 0; i--) {
        if (num >= nb[i].value) {
          break;
        }
  
      }
      return nb[i] ? (num / nb[i].value).toFixed(digits).replace(rx, "$1") + nb[i].symbol : "0";
    }

    const numberOfDate = data.length;
    const datas = data.slice((numberOfDate - props.range), numberOfDate)
     .map((cases) => ({
      date:
         cases.date.toString().slice(8, 10) + "/" + cases.date.toString().slice(5, 7),
       Ca: cases.total,
       daily: cases.daily,
     }));
  
    
    return (
      <div className="w-full">
        <ResponsiveContainer width={"99%"} aspect={1.3} >
          <ComposedChart data={datas}
            margin={{ top: 10, right: 30, left: 0, bottom: 25 }}>
            <CartesianGrid vertical={false} />
            <defs>
              <linearGradient id="colorUv" x1="0.2" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#45c3f8" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#9de2fe" stopOpacity={0} />
              </linearGradient>
  
            </defs>
            <XAxis dataKey='date' minTickGap={25}/>
            <YAxis
              tickFormatter={(tick) => {
                return nFormatter(tick, 1)
              }}
              domain={[0, "auto"]}
              allowDataOverflow={true}
              
               />
  
            <Tooltip 
            labelFormatter={(e)=>'Ngày: '+ e}
             wrapperStyle={
               {
                 fontSize:'0.8rem',
                 textAlign:'center'
               }
             }
             formatter={(e)=>{
               return NumberFormat(e)
             }}
            />
           {
             props.type=== 'area' ?(
              <Area 
              type="monotone"
               dataKey="Ca" 
               name='Ca nhiễm'
                stroke="  #52e3bc" 
                fill="url(#colorUv)" />
             ) :(
              <Bar 
              type="monotone"
               dataKey="daily" 
               name='Ca nhiễm'
                stroke=" #45c3f8" 
                fill="#9adefb" />
             )
           }
  
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    )
  
}

export default Graph