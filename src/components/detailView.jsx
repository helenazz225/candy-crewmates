import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

const DetailView = () => {
    let params = useParams()
    // console.log(params)
    const [data, setData] = useState([])
    useEffect(() => {
        const getDetailData = async () => {
            const { data, error } = await supabase
                .from('Posts')
                .select()
                .eq('id', params.id)
            setData(data)
        }
        getDetailData()
    })
    // console.log(data)
    return (
        <div className="App">
            <Sidebar />
            <div className="main">
                <h1>Name: {data[0] && data[0].name}</h1>
                <h1 id="detail-view-header">Stats:</h1>
                <h2>Power: {data[0] && data[0].power}</h2>
                <h2>Color: {data[0] && data[0].color}</h2>
                <div>{data[0] && data[0].power >= 5 ? `You selected a powerful crewmate!` : `Your crewmate has low power, you may want to find another`}</div>
                <button><Link to={`/edit-crewmate/${params.id}/${params.name}`}>Edit crewmate</Link></button>
            </div>
        </div>
    )
}

export default DetailView
