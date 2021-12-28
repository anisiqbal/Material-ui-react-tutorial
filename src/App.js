import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup>
          <Button
            // onClick={()=>alert('hello')}        
            // endIcon={<SaveIcon/>}
            startIcon={<SaveIcon />}
            size="large"
            variant="contained"
            color="Primary">
            Save 
          </Button>

          <Button
            // onClick={()=>alert('hello')}        
            // endIcon={<SaveIcon/>}
            startIcon={<DeleteIcon />}
            size="large"
            variant="contained"
            color="Secondary">
            Discard
          </Button>
        </ButtonGroup>


        <img src={logo} className="App-logo" alt="logo" />



      </header>
    </div>
  );
}

export default App;
