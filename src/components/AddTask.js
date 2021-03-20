import {useState} from 'react';

const AddTask = ({funcAddTask}) => {
    //Argument of useState is the default
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        funcAddTask({text, day,  reminder});
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Task Name</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} ></input>
            <br></br>
            <label>Date and Time</label>
            <input type="text" placeholder="Enter Date and Time" value={day} onChange={(e) => setDay(e.target.value)}></input>
            <br></br>
            <label>Reminder</label>
            <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder}></input>
            <br></br>
            <input type="submit" value="Submit"></input>
        </form >

    );

}

export default AddTask;