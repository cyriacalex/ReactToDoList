
const IndividualTask = ({currentTask, deleteFunction, reminder}) => {

    // document.addEventListener("DOMContentLoaded", function() { 
    // document.addEventListener('click', deleteFunction);
    // });

return (   
    <div className={`${currentTask.reminder === true ? 'reminder': ''}`} onDoubleClick={() => reminder(currentTask.id)}>
        <h3 style={{width:'100%', display:'inline-block'}}>{currentTask.text}
        <button onClick={() => deleteFunction(currentTask.id)} style={{border:'solid green', marginLeft:'30%'}}>Delete</button></h3>
        <p>{currentTask.day}</p>
        <p>{currentTask.reminder.toString()}</p>
        
    </div>
)

}

export default IndividualTask