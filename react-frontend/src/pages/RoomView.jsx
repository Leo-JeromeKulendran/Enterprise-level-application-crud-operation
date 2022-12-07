import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useNavigate } from 'react-router-dom';
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



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const RoomView = () => {

  const navigate  = useNavigate();
  const classes = useStyles();
  const [data,setData] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8080/rooms/list")
  .then(function (response) {
    console.log(response);
    setData(response.data)
  });
  },[]);
  return (
<div>
    <Container component="main" maxWidth="s" className="review-container">
    <CssBaseline />
    <div className={classes.paper}>
    
      <Typography component="h1" variant="h2">
        <h2>Rooms List</h2>
      </Typography>
      <div>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Room Number</StyledTableCell>
            <StyledTableCell align="center">Number of person</StyledTableCell>
            <StyledTableCell align="center">Room type</StyledTableCell>
            <StyledTableCell align="center">Carbs&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.roomNo}
              </StyledTableCell>
              <StyledTableCell align="center">{row.no_ofPerson}</StyledTableCell>
              <StyledTableCell align="center">{row.roomType}</StyledTableCell>
              <StyledTableCell align="center">
              <Button onClick={()=>navigate('/addcustomer')} variant="contained" sx={{fontSize:16, height:40,width:90, margin:2, fontWeight: 'bold' , backgroundColor: 'black'}}>Edit</Button>
              <Button onClick={()=>navigate('/addcustomer')} variant="contained" sx={{fontSize:16, height:40,width:90, fontWeight: 'bold' , backgroundColor: 'black'}}>Delete</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    </div>
  
    </Container>
</div>






    
  )
}

export default RoomView