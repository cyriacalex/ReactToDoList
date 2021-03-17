import PropTypes from 'prop-types';
import Btn from './Button';
import { useState } from 'react';

const Header = (/*props*/ { userName }) => {

    // count is a new state variable, and setstate updates that variable
    const [count, setCount] = useState(0);

    return (

        <header>
            {/* The inline style requires double curly braces, Property Names are in camelCase without Hyphens*/}
            <h1 style={{ color: 'green', backgroundColor: 'orange' }}>{/*props.userName*/ userName}'s To Do List</h1>
            <Btn textName='ClicksTracker' BGColor='cyan' onClick={() => setCount(count + 1)}></Btn>
            <p id='btnText'>Click Count: {count}</p>
        </header>
    );
}

//Sets default props if none passed in
Header.defaultProps = {
    //userName: 'No UserName Passed'
}

//Gives a warning if wrong type is passed in. 
Header.propTypes = {
    userName: PropTypes.string.isRequired,
}

export default Header;