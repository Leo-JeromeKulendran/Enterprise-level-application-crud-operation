import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useNavigate } from 'react-router-dom';


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


const Home = () => {
  const navigate  = useNavigate();
  const classes = useStyles();
  return (
    <div>
    <Container component="main" maxWidth="xs" className="review-container">
    <CssBaseline />
    <div className={classes.paper}>
    
      <Typography component="h1" variant="h2">
        <h2>Hotel Management System</h2>
      </Typography>
      <form className={classes.form} >
        <Grid container spacing={5}>
        
          
          <Grid marginBottom={43} item xs={12} sx={{margin: 20}}>
          <Button onClick={()=>navigate('/customer')} variant="contained" sx={{fontSize:16, height:100,width:120, fontWeight: 'bold' , backgroundColor: 'black'}}>Customer</Button>
          <Button onClick={()=>navigate('/emp')} variant="contained" sx={{fontSize:16,height:100,width:120,margin:2, fontWeight: 'bold' , backgroundColor: 'black'}}>Employee</Button>
          <Button onClick={()=>navigate('/rooms')} variant="contained" sx={{fontSize:16,height:100,width:120, fontWeight: 'bold' , backgroundColor: 'black'}}>Rooms</Button>

          </Grid>
        </Grid>
       

        
      </form>
    </div>
  
    </Container>
</div>
  )
}

export default Home