import { Link } from 'react-router-dom';

function Starships (props) {
    const starships = props.starships
    const starshipLinks = starships.map((starship, index) =>{
        return  <li><Link to={{pathname: `/starship`,state:starship}}>
                    {starship.name}
                </Link></li>
    })
    return(
        <ul>
            {starshipLinks}
        </ul>
    );
}

export default Starships;