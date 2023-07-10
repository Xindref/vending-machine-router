import { Link } from "react-router-dom";
import chips from './images/chips.gif'

const Chips = () => {
    return (
        <div>
            <h1>You Chose Chips! MUNCH MUNCH MUNCH</h1>
            <div className="gif-container">
                <img src={chips}></img>
            </div>
            <Link to='/' ><button>Choose Again!</button></Link>
        </div>
    )
}

export default Chips;