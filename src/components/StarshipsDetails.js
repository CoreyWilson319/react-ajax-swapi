import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
function StarshipsDetails (props) {
    console.log(props.location.state)

    const pilotsFunction = () => {
        if (props.location.state.pilots < 1) {
            return <li>Pilots: No Pilots</li>
        } else {
            props.location.state.pilots.forEach(pilot => {
                let url = pilot
                console.log(pilot)
                axios.get(url)
                .then(response => {
                    console.log(response.data.name)
                    return <li>{response.data.name}</li>
                  }).catch((err) => console.log(err))
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
            {pilotsFunction()}
            <Link to="/">Home</Link>
        </ul>
    );
}

export default StarshipsDetails;