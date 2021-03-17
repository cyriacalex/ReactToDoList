//import React from 'react'; /* ONLY NEEDED WHEN USING CLASS. NOT NEEDED WITH FUNCTION */
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {

  return (
    <div className='container'>
      <Header userName='Alex'></Header>
      <Tasks></Tasks>
    </div>
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
