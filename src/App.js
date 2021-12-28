import logo from './logo.svg';
import './App.css';
import Button  from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button 
        // onClick={()=>alert('hello')}
        startIcon={<SaveIcon/>}
        size="large" 
        variant="contained" 
        color="Secondary"> 
          Hello World
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
       
       
         
      </header>
    </div>
  );
}

export default App;
