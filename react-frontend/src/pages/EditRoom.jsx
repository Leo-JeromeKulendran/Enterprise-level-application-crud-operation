import React, { useEffect, useState } from 'react'

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

const EditRoom = () => {
  const [data,setData] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8080/rooms/view/2")
  .then(function (response) {
    console.log(response);
    setData(response.data)
    console.log(data.roomType)
  });
  },[]);
  const classes = useStyles();
  return (
    <div><Container component="main" maxWidth="xs" className="review-container">
    <CssBaseline />
    <div className={classes.paper}>
    
      <Typography component="h1" variant="h5">
        <h2>Edit Room</h2>
      </Typography>
      <form className={classes.form} >
        <Grid container spacing={2}>
          
  
          <Grid item xs={12} >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Room Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.roomType}
              label="Room Type"
              //onChange={handleChange}
              placeholder="Room Type"
            >
              
              <MenuItem value={"Luxury"}>Luxury</MenuItem>
              <MenuItem value={"Semi"}>Semi Luxury</MenuItem>
              <MenuItem value={"Normal"}>Normal</MenuItem>
            </Select>
          </FormControl>
         
          </Grid>


          <Grid item xs={12} >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Room Number</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //value={data.roomNo}
              label="Room Type"
              //onChange={handleChange}
            >
              
              {(() => {
            const arr = [];
            for (let i = 0; i < 20; i++) {
                arr.push(
                  <MenuItem value={"fff"}>R00{i+1}</MenuItem>
               

                );
            }
            return arr;
        })()}
              
            </Select>
          </FormControl>
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
              value={data.no_ofPerson}
              autoFocus
              //onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>

         



          <Grid marginBottom={43} item xs={12} sx={{margin: 30}}>
          <Button  variant="contained" sx={{fontSize:16, fontWeight: 'bold' , backgroundColor: 'black'}}>Save Booking</Button>

          </Grid>
        </Grid>
       

        
      </form>
    </div>
  
    </Container></div>
  )
}

export default EditRoom