import React from "react";
import {useEffect,useState} from 'react'
import "./WithdrawReport.css";
// import withDrawTest from './TestWithDraw.json' -- for testing purpose

const WithdrawReport = () => {

  // const [data, setData] = useState(withDrawTest) -- for testing purpose

  const [data, setData] = useState([])

  const [loading, setloading] = useState(false) 


  useEffect(() => {
    setloading(true)
    let fetchData = async ()=>{
      try{
        let res = await fetch('http://FreeCoinApi.com/user/incomeReport/618d2d5bb58f7202eaf4c569')
        let data = await res.json()
        setData(data)
        setloading(false)
      }
      catch(e){
        console.log(e)
        setloading(false)
      }
    }
   fetchData()
  },[])

  return (
    <div className="card-container">
    {loading&&<p>Loading...</p>}
    <h4 className="page-title">Topup Details and Registrations</h4>
    <table>
      <tr>
        <th>Type</th>
        <th>transactionAt</th>
        <th>Amount</th>
        <th>message</th>
      </tr>
      {data.map((d,i)=><tr key={i}>
        <td>{d.type}</td>
        <td>{d.transactionAt}</td>
        <td>{d.amount}</td>
        <td>{d.message}</td>
      </tr>)}
    </table>
  </div>
  );
};

export default WithdrawReport;
