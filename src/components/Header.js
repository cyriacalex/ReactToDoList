import PropTypes from 'prop-types';
import Btn from './Button';
import {useLocation} from 'react-router-dom';

const Header = (/*props*/ { userName, toggleAddTask }) => {

    // count is a new state variable, and setstate updates that variable
    //const [count, setCount] = useState(0);
    const location = useLocation();

    return (

        <header>
            {/* The inline style requires double curly braces, Property Names are in camelCase without Hyphens*/}
            <h1 style={{textAlign:'center', justifyContent:'center', color: 'green', backgroundColor: 'orange' }}>{/*props.userName*/ userName}'s To Do List</h1>
            {location.pathname === '/' && <Btn  textName='Add Task' onClick={toggleAddTask}></Btn>}
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