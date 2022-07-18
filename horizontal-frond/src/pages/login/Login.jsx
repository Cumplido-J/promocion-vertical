import {  Container, Grid, Paper } from '@material-ui/core';
import React from 'react'
import { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from './LoginForm';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  }));

const Login = ( { userLoading }) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Container fixed >
                


                <Grid container direction="column" alignItems="center" justifyContent="flex-start"  spacing={3} >
                    <Grid item xs={6} >
                  
                        <Paper className={classes.paper} variant="outlined" >
                        
                        <LoginForm userLoading = {  userLoading }/>


                        </Paper>
                       
                    </Grid>
 
                </Grid>
     
            </Container>
        </Fragment>
    )
}

export default Login