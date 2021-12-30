import logo from './logo.svg';
import './App.css';
import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField  from '@material-ui/core/TextField'

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
      control={<Checkbox
        checked={checked}

        // hover and change color
        icon={<SaveIcon />}
        checkedIcon={<SaveIcon />}

        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          'aria-label': 'secondary Checkbox'

        }}
      />}
      label="Testing Checkbox"
    />


  )
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          variant="filled"
          color="secondary"
          type="email"
          label="The Time"
          placeholder="test@test.com"


        />
        <CheckboxExample />
        
        <ButtonGroup variant="contained" color="Primary">
          <Button
            // onClick={()=>alert('hello')}        
            // endIcon={<SaveIcon/>}
            // size="large"
            startIcon={<SaveIcon />}
          >
            Save
          </Button>

          <Button
            // onClick={()=>alert('hello')}        
            // endIcon={<SaveIcon/>}
            startIcon={<DeleteIcon />}
          // size="large"
          // variant="contained"
          // color="Secondary"
          >
            Discard
          </Button>
        </ButtonGroup>


        <img src={logo} className="App-logo" alt="logo" />



      </header>
    </div>
  );
}

export default App;
