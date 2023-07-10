import { Link } from "react-router-dom";
import soda from './images/soda.gif';

const Soda = () => {
    return (
        <div>
            <h1>You Chose Soda! GLUG GLUG GLUG</h1>
            <div className="gif-container">
                <img src={soda}></img>
            </div>
            <Link to='/' ><button>Choose Again!</button></Link>
        </div>
    )
}

export default Soda;