import {React, useState, useEffect} from 'react'
import ChartLine from '../../Components/Charts/ChartLine'
import RecordTable from '../../Components/DataTable/RecordTable';
import './home.css'
import axios from 'axios'
import {policyEps} from '../../Context/API'
export default function Home() {

    const [policyData, setPolicyData] = useState([])
    const [monthlyData, setMonthlyData] = useState([])
    const [regionalData, setRegionalData] = useState([])
    const [dataUpdated, setDataUpdated] = useState(false)


    useEffect(() => {
        async function fetchPolicyData() {
            const request = await axios.get(policyEps.fetchPolicyData);
            setPolicyData(request.data)
            return request
        } fetchPolicyData();
    }, [dataUpdated])


    useEffect(() => {
        async function fetchMonthlyData() {
            const request = await axios.get(policyEps.fetchMonthlyData);
            setMonthlyData(request.data)
            return request
        } fetchMonthlyData();
    }, [])

    useEffect(() => {
        async function fetchRegionalData() {
            const request = await axios.get(policyEps.fetchRegionalData);
            setRegionalData(request.data)
            return request
        } fetchRegionalData();
    }, [])



  return (
    <div className="home">
        <div className="chart-section">
            <ChartLine data={monthlyData} label="Policy by Month" datakey="month" dataval="policies"/>
            <ChartLine data={regionalData} label="Policy by Region" datakey="region" dataval="policies"/>
        </div>
        <div className="data-table-secton">
            <RecordTable data={policyData} setDataUpdated={setDataUpdated}/>
        </div>
    </div>
  )
}
