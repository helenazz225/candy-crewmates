import React from "react";
import { useState } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";
import Sidebar from "./sidebar";

const EditCrewmate = () => {
    let params = useParams()
    const [crewmate, setCrewmate] = useState({name: "", power: 0, color: "red"})

    const handleChange = (event) => {
        const {name, value} = event.target
        // console.log("Name: ", name, "value: ", value)
        setCrewmate((prev) => {
            return {
                ...prev,
                [name]:value
            }
        })
    }
    
    const updateCrew = async () => {
        // console.log(crewmate)
        event.preventDefault();
        await supabase.from('Posts').update({ name: crewmate.name, power: crewmate.power, color: crewmate.color }).eq('id', params.id)
        // console.log('tesr')
        window.location = "/crewmate-gallery";
    }

    const deleteCrew = async () => {
        event.preventDefault();
        await supabase.from('Posts').delete().eq('id', params.id)
        // console.log('tesr')
        window.location = "/crewmate-gallery";
    }
    return (
        <div className="App">
            <Sidebar />
            <div className="main">
                <h1>Edit Crewmate: {params.name}</h1>
                <form>
                    <div className="form">
                        <label>Name</label>
                        <input type="text" name="name" value={crewmate.name} onChange={handleChange}></input>
                        <label>Power</label>
                        <input type="number" name="power" value={crewmate.power} onChange={handleChange}></input>
                        <label>Candy Type</label>
                        <select type="text" name="color" onChange={handleChange}>
                            <option selected value="red">Red</option>
                            <option value="orange">Orange</option>
                            <option value="yellow">Yellow</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="purple">Purple</option>
                        </select>
                    </div>
                    <button type="submit" value="Submit" onClick={updateCrew}> Update Crewmate</button>
                    <button onClick={deleteCrew}>Delete Crewmate</button>
                </form>   
            </div>
        </div>
    )
}

export default EditCrewmate