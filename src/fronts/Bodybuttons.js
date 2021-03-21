import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import edit from '../assets/Path 18191.svg';
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Bodytable from '../fronts/Bodytable.js';
import search from '../assets/search-24px (3).svg'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { pxToRem, pxToVw, pxToVh } from '../utils/theme.js'
import { FormatAlignJustify } from '@material-ui/icons';


const useStyles = makeStyles(theme =>({
    paper:{
      backgroundColor: '#273D49CC',
      display:'flex',
      width:'97vw',
      marginLeft:'2vh',
    },
    paper1:{
      backgroundColor: '#273D49CC',
      display:'flex',
      width:'97vw',
      marginLeft:'2vh',
      align:'right'
    },
    grid:{
      backgroundColor:'#39495E',
      height: '100%',
      margin: '0'
    },
    root: {
      display: "flex",
      width: pxToVw(500),
      height:pxToVh(31),
      border:1,
      borderStyle:"solid",
      borderRadius: "3px",
      borderColor:'#14AFF1',
      margin: pxToVh(15)
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 2,
      color:'#FFFFFF'
    },
    button1:{
      backgroundColor:'#14AFF1',
      textTransform: 'none',
      marginTop: pxToRem(20),
      marginLeft: pxToRem(30),
      height: pxToRem(45),
      width: pxToRem(141),
      textAlign: "left",
      font: "normal normal normal 28px/32px Ubuntu",
      letterSpacing: pxToRem(0),
      color: "#FFFFFF",
      opacity: 1,
      fontFamily: "'Ubuntu', sans-serif",
      fontSize: "calc(0.75vh + 0.75vw)",
    },
    button2:{
        textTransform: 'none',
        color:'#FFFFFF',
        borderColor:'#14AFF1',
        marginTop: pxToRem(20),
        marginLeft: pxToRem(30),
        height: pxToRem(45),
        width: pxToRem(400),
        textAlign: "left",
        letterSpacing: pxToRem(0),
        opacity: 1,
        fontFamily: "'Ubuntu', sans-serif",
        fontSize: "calc(0.75vh + 0.75vw)",
    },
    button3:{
      textTransform: 'none',
      color:'#FFFFFF',
      borderColor:'#14AFF1',
      marginTop: pxToRem(20),
      marginLeft: pxToRem(585),
      height: pxToRem(45),
      width: pxToRem(99),
      textAlign: "left",
      font: "normal normal normal 28px/32px Ubuntu",
      letterSpacing: pxToRem(0),
      opacity: 1,
      fontFamily: "'Ubuntu', sans-serif",
      fontSize: "calc(0.75vh + 0.75vw)",
    },
    button4:{
      textTransform: 'none',
      borderColor:'#14AFF1',
      marginTop: pxToRem(20),
      marginLeft: pxToRem(18),
      height: pxToRem(45),
      width: pxToRem(45),
      textAlign: "left",
      letterSpacing: pxToRem(0),
      color: "#FFFFFF",
      opacity: 1,
      fontFamily: "'Ubuntu', sans-serif",
      fontSize: "calc(0.75vh + 0.75vw)",

    },
    button5: {
      textTransform: 'none',
      borderColor:'#14AFF1',
      marginTop: pxToRem(20),
      marginLeft: pxToRem(18),
      height: pxToRem(45),
      width: pxToRem(150),
      textAlign: "left",
      font: "normal normal normal 28px/32px Ubuntu",
      letterSpacing: pxToRem(0),
      color: "#FFFFFF",
      opacity: 1,
      fontFamily: "'Ubuntu', sans-serif",
      fontSize: "calc(0.65vh + 0.65vw)",
    }, 
}));
function Bodybuttons(props)
{
    const classes=useStyles();
    return(
        <Grid container spacing={0} className={classes.grid}>
            <Grid item item xs={12} sm={12}>
             <Paper elevation={0} 
                    className={classes.paper}>
               <Button 
                 elevation={0} 
                 className={classes.button1}>
                   Predict
                </Button>

               <Button 
                  variant="outlined" 
                  elevation={0} 
                  color="primary" 
                  className={classes.button2}>
                   View Correspondence
               </Button>

               <Button 
                  variant="outlined" 
                  elevation={0} 
                  color="primary" 
                  className={classes.button3} 
                  onClick={props.propsFunc} 
                  startIcon={<AddIcon/>}>
                   Add
                </Button>

               <Button variant="outlined" elevation={0} color="primary" className={classes.button4}>
                  <img src={edit} style={{marginRight:'0.4vh'}}></img>
                   Edit
               </Button>

               <Button 
                  variant="outlined" 
                  elevation={0} 
                  color="primary" 
                  className={classes.button5}
                  startIcon={<RemoveIcon/>}>
                   Delete
               </Button>

               <paper className={classes.root}>
                 <InputBase
                    className={classes.input}
                    placeholder="Search By Invoice Number"
                    inputProps={{ 'aria-label': 'search by invoice number' }}/>
                    <IconButton 
                      type="submit" 
                      className={classes.paper3} 
                      aria-label="search">
                      <img src={search}></img>
                    </IconButton>
               </paper>


             </Paper>
              <Grid container spacing={0} className={classes.grid}>
                 <Grid item xs={12}>
                   <Paper elevation={0} className={classes.paper1}>
                     <Bodytable />
                   </Paper> 
                 </Grid>
               </Grid>
          </Grid>
        </Grid>
    );
}

export default Bodybuttons;
