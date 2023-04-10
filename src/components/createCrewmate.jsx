import React, { useState } from "react";
import Sidebar from "./sidebar";
import { supabase } from "../client";

const CreateCrewmate = () => {
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
    
    const createCrew = async () => {
        // console.log(crewmate)
        event.preventDefault();
        await supabase.from('Posts').insert({ name: crewmate.name, power: crewmate.power, color: crewmate.color }).select()
        // console.log('tesr')
        window.location = "/crewmate-gallery";
    }

    return (
        <div className="App">
            <Sidebar/>
            <div className="main">
                <h1>Create a New Crewmate</h1>
                {/* <div className="cards">
                    <div className="card">
                        <input value={name} onChange={e => setName(e.target.value)}></input>
                    </div>
                </div> */}
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
                    <button type="submit" value="Submit" onClick={createCrew}>Create</button>
                </form>                                                                                                                                             
            </div>
        </div>
    )
}

export default CreateCrewmate