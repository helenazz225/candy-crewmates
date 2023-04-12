import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { supabase } from "../client";
import { Link } from "react-router-dom";

const CrewmateGallery = () => {
    const [crew, setCrew] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await supabase.from('Posts').select().order('created_at', {ascending: false})
            // console.log(data)
            setCrew(data)
            // console.log
        }
        fetchData()
        // console.log(crew)
    })
    let sum = 0
    crew && crew.map(entry => {
        sum += entry.power
    })
    return (
        <div className="App">
            <Sidebar/>
            <div className="main">
                <h1 id="gallery-header">Crew Gallery</h1>
                <h5>Total power: {sum}</h5>
                <div id='gallery-main'>{crew && crew.map(entry => {
                    return (
                        <div className={`card ` + entry.color}>
                            <div>Name: {entry.name}</div>
                            <div>Power: {entry.power}</div>
                            <div>Color: {entry.color}</div>
                            <button><Link to={`/crewmate-detailview/${entry.id}/${entry.name}`}>View Member</Link></button>
                        </div>
                    )
                })}</div>
            </div>
        </div>
    )
}

export default CrewmateGallery