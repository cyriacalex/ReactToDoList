//import React from 'react'; /* ONLY NEEDED WHEN USING CLASS. NOT NEEDED WITH FUNCTION */
import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask.js';
import Footer from './components/Footer.js';
import About from './components/About.js';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTasks] = useState(false);

  useEffect(() => {
    //async because it calls fetch task which returns a promise
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

  const fetchSingleTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  const addTaskClicked = () => setShowAddTasks(!showAddTask);



  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();
    //adding data and not task because JSONServer creates an id for us
    setTasks([...tasks, data]);
  }

  const toggleReminder = async id => {
    const taskToToggle = await fetchSingleTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });

    const data = await res.json();

    setTasks(tasks.map(item => {
      if (item.id === id) {
        item.reminder = data.reminder;
      }
      return item;
    }));
  }


  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    })

    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <BrowserRouter>
      <div className='container'>
        <Header userName='Alex' toggleAddTask={addTaskClicked}>
        </Header>
        <Route path='/' exact render={(props) =>
          <>
            {showAddTask ? <AddTask funcAddTask={addTask}></AddTask> : null}

            {tasks.length > 0 ?
              <Tasks reminder={toggleReminder} deleteFunction={deleteTask} tasksList={tasks}></Tasks> :
              'No tasks atm'}
          </>
        } />
        <Route path='/about' component={About}></Route>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}


/* USING CLASS. NOT AS COMMON ANYMORE. STIL COULD BE BEING USED
class App extends React.Component{
  render() {
    return <Header></Header>
  }
}
*/
export default App;
