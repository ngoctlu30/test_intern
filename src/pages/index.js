
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import Nation from '../components/Nation/Nation';

import Search from '../assets/search.png'

import "../styles/index.css"
import { transform } from '../helpers/transformNumber';
import { quickSort } from '../helpers/quickShort';
import Spin from '../components/spin';

 const MainMemo =  function Main() {
  const [loading, setLoading] = useState(true);
  const [totalCase, setTotalCase] = useState(null);
  const [totalDeaths, setTotalDeath] = useState(null);
  const [totalRecover, setTotalRecover] = useState(null);
  const [listNation, setListNation] = useState([]);
  const [searchText, setSearchText] = useState('');


  const fetchData = () => {
   
     axios.get('https://disease.sh/v3/covid-19/countries').then(res => {
      const temp = [...res.data];
      const result = quickSort(temp, 0, temp.length - 1).reverse();     
      setListNation(result) 
      let total = res.data.reduce((total, item) => {
        return total + item.cases
      }, 0)
      let totalD = res.data.reduce((total, item) => {
        return total + item.deaths
      }, 0)
      let totalRCV = res.data.reduce((total, item) => {
        return total + item.recovered
      }, 0)
      setTotalRecover(totalRCV);
      setTotalDeath(totalD)
      setTotalCase(total)
      
    }, 0).then(
      () => {
        setLoading(false)
      }
    )
  }


   useEffect(() => {
   
    fetchData()
    setInterval(() => {
      fetchData()
    }, 180000)
  }, [])

  
  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);   
  }

  const list = useMemo(() => {
    return <>
      {listNation.length > 0 && listNation.filter((el) => {
          return el.country.toLowerCase().includes(searchText.toLowerCase()) 
        }).slice(0, 10).map((el, index) => {
          return <Nation country={el} index={index+1} key={el.country}/>
        })}
    </>
  }, [listNation, searchText])
  if(loading) return <Spin />
  return <div className="main">
      <div className="infor">
        <div className="totalCase">
          {totalCase && transform(totalCase)}
        </div>
        <div className="deathsAndRecover">
          <div className="deaths">{totalDeaths && transform(totalDeaths)}
            <label className="label">DEATHS</label>
          </div>
          <div className="recovered"> {totalRecover && transform(totalRecover)} <label className="label">RECOVERIES</label></div>
        </div>
      </div>
      <div className="inputContainer">
        <img className="image" width="20" height="20" src={Search} alt="search" />
        <input onChange={onChangeSearchText}  className="input" placeholder="Search 667 regions..." />
      </div>
      <div className="listNation">
          <Nation country={listNation.find((el ) => el.country === "VietNam" || el.countryInfo.iso2 === "VN")}  onTop={true} />
          {list}
      </div>
  </div>
}

export default React.memo(MainMemo)