import React, { useState } from 'react'

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';

import { Link, useNavigate, useParams} from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const AddRoom = () => {
  const [roomNo,setRoomNo]=useState("");
  const [number,setNumber]=useState("");
  const [type,setType]=useState("");
  


  const handleChange = (event) => {
    setType(event.target.value);
  };



const handledChange = (event) => {
  setNumber(event.target.value);
  };



  const handleSubmit = ()=>{
    axios.post("http://localhost:8080/rooms/create", {
      "no_ofPerson": number,
      "roomType": type,
      "roomNo": roomNo
    })
    .then((response) => {
      console.log(response);
    });
  };

  const classes = useStyles();
  return (
    <div><Container component="main" maxWidth="xs" className="review-container">
    <CssBaseline />
    <div className={classes.paper}>
    
      <Typography component="h1" variant="h5">
        <h2>Add Room</h2>
      </Typography>
      <form className={classes.form} >
        <Grid container spacing={2}>
          
  
          <Grid item xs={12} >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Room Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //value={1}
              label="Room Type"
              onChange={handleChange}
              placeholder="Room Type"
            >
              
              <MenuItem value={'Luxury'}>Luxury</MenuItem>
              <MenuItem value={'Semi'}>Semi Luxury</MenuItem>
              <MenuItem value={'Normal'}>Normal</MenuItem>
            </Select>
          </FormControl>
         
          </Grid>


          <Grid item xs={12} >
            <TextField
              autoComplete="fname"
              name="Tittle"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="Room Number"
              //value={1}
              autoFocus
              onChange={(e) => setRoomNo(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} >
            <TextField
              autoComplete="fname"
              name="Tittle"
              variant="outlined"
              required
              type={"number"}
              fullWidth
              id="firstName"
              label="No of people"
              //value={1}
              autoFocus
              onChange={(e) => setNumber(e.target.value)}
            />
          </Grid>

         



          <Grid marginBottom={43} item xs={12} sx={{margin: 30}}>
          <Button onClick={()=>{handleSubmit()}} variant="contained" sx={{fontSize:16, fontWeight: 'bold' , backgroundColor: 'black'}}>Save Booking</Button>

          </Grid>
        </Grid>
       

        
      </form>
    </div>
  
    </Container></div>
  )
}

export default AddRoom