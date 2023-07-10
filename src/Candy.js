import { Link } from "react-router-dom";
import candy from './images/candy.gif';

const Candy = () => {
    return (
        <div>
            <h1>You Chose Candy! OM NOM NOM</h1>
            <div className="gif-container">
                <img src={candy}></img>
            </div>
            <Link to='/' ><button>Choose Again!</button></Link>
        </div>
    )
}

export default Candy;