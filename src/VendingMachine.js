import { Link } from "react-router-dom";
import './VendingMachine.css';

const VendingMachine = () => {
    return (
        <div>
            <h1>Click your option!</h1>
            <div className="vending-machine-container">
                <Link to='/chips' className="chips-option"></Link>
                <Link to='/candy' className="candy-option"></Link>
                <Link to='/soda' className="soda-option"></Link>
            </div>
        </div>
    )
}

export default VendingMachine;