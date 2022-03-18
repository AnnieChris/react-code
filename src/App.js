import logo from './logo.svg';
import './App.css';
import Demo  from './component/Demo';
/* import StyledDemo from './component/StyledDemo'; */
import Component1 from './component/Component1';

function App() {
  return (
    <div className="App">
      <h1>This is my First React App</h1>
      <div className='demo'>
        <Demo />     {/* This is the child of the app */}

        {/* <StyledDemo /> */}
        {/* <Component1/> */}
      </div>
      
      
    </div>
  );
}

export default App;
