import axios from 'axios';
import React, { useEffect, useState }from 'react';
import { Link } from 'react-router-dom';
function StarshipsDetails (props) {
    // console.log(props.location.state)
    const [pilots, setPilots] = useState([])

    const pilotsFunction = () => {
        if (props.location.state.pilots < 1) {
            return
        } else {
            let pilotCalls = []
            props.location.state.pilots.forEach(pilot => {
                const call = axios.get(pilot)
                pilotCalls.push(call)
            });
            Promise.all(pilotCalls).then((response) => {
                let names = response.map((res) => {
                    return res.data.name
                })
                setPilots(names)
            })
            .catch((err)=>console.log(err))
            // props.location.state.pilots.forEach(pilot => {
            //     let url = pilot
            //     // console.log(pilot)
            //     axios.get(url)
            //     .then(response => {
            //         setPilots([...pilots, response.data.name])
            //       }).catch((err) => console.log(err))
            //   })
            }
    }

    useEffect(() => {
      pilotsFunction()  
    },[])

    const renderPilots = () => {
        if (pilots.length < 1) 
            { return <li> No Pilots</li>}
         else
        {
            return pilots.map((pilot, index) => {
                // console.log(pilot)
                return <li key={index}> {pilot}</li>
            })
        }
    }

    return(
        <ul>
            <li>
            Name: {props.location.state.name}
            </li>
            <li>
            Model: {props.location.state.model}
            </li>
            <li>
            Model: {props.location.state.manufacturer}
            </li>
            <li>
            Cost (c): {props.location.state.cost_in_credits}
            </li>
            <li>
            Length: {props.location.state.length}
            </li>
            <li>
            Passenger Capacity: {props.location.state.passengers}
            </li>
            <li>
            Class: {props.location.state.starship_class}
            </li>
            Pilots: {renderPilots()}
            <br></br>
            

            <Link to="/">Home</Link>
        </ul>
    );
}

export default StarshipsDetails;