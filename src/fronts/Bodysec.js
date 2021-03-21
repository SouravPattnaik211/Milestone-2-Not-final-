import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { pxToVh } from '../utils/theme';


const useStyles = makeStyles(theme =>({
    first:{
        backgroundColor: '#39495E',
        color:'rgba(255, 255, 255, 1)',
        justifyContent: 'left',
        borderRadius: pxToVh(1)
    },
    typo:
    {
      textalign: 'left',
      font: 'normal normal normal 28px/32px Ubuntu',
      letterspacing: '0px',
      color: '#FFFFFF',
      opacity: 1
    }    
}));
    function Bodysec()
    {
        const classes=useStyles();
        return(
          <React.Fragment>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.first} style={{paddingTop:pxToVh(18),paddingLeft:pxToVh(20),paddingBottom:pxToVh(30)}}>
                  <Typography 
                    className={classes.typo}
                    align='left'>
                      Invoice list
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </React.Fragment>
        );
    }
    
export default Bodysec;
