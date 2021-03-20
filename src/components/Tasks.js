import IndividualTask from './IndividualTask.js'

// Curly braces here destructure props so that props.tasks is not necessary
const Tasks = ({tasksList, deleteFunction, reminder}) =>{
    
    
    return (
        <div style={{width:'60%', marginLeft:'20%'}}>
            {tasksList.map(currentTask => <IndividualTask reminder={reminder} deleteFunction={deleteFunction} currentTask={currentTask} 
            key={currentTask.id}></IndividualTask>
            )}
        </div>
    );
}

export default Tasks;