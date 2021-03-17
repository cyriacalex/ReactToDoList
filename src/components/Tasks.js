import {useState} from 'react';

const Tasks = () =>{
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Task 1 text',
            day: 'Wednesday at 4',
            reminder: true,
        },
        {
            id: 2,
            text: 'Task 2 text',
            day: 'Thursday at 5',
            reminder: false,
        },
        {
            id: 3,
            text: 'Task 3 text',
            day: 'Friday at 6',
            reminder: true,
        }
    ])
    
    return (
        <>
            {tasks.map(task => <h3 key={task.id}>{task.text}</h3>
            )}
        </>
    );
}

export default Tasks;