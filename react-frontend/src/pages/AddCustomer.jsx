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

const AddCustomer = () => {
  const classes = useStyles();
  const [fname,setFname]=useState(" ");
  const [lname , setLname] = useState(" ");
  const [email,setEmail] = useState(" ");
  return (
    <div><Container component="main" maxWidth="xs" className="review-container">
    <CssBaseline />
    <div className={classes.paper}>
    
      <Typography component="h1" variant="h5">
        <h2>Add Customer</h2>
      </Typography>
      <form className={classes.form} >
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              autoComplete="fname"
              name="Tittle"
              variant="outlined"
              required
              fullWidth
              value={fname}
              id="firstName"
              label="First Name"
              autoFocus
              onChange={(e) => setFname(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              autoComplete="fname"
              name="Tittle"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="last Name"
              autoFocus
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              autoComplete="fname"
              name="Tittle"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="Email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

         



          <Grid marginBottom={43} item xs={12} sx={{margin: 30}}>
          <Button  variant="contained" sx={{fontSize:16, fontWeight: 'bold' , backgroundColor: 'black'}}>Save</Button>

          </Grid>
        </Grid>
       

        
      </form>
    </div>
  
    </Container></div>
  )
}

export default AddCustomer