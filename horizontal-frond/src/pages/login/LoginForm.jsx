import React from 'react'
import { Fragment } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LoginService from '../../service/LoginService';

import {  useFormik } from 'formik'
import * as Yup from 'yup';


const LoginForm = ({userLoading}) => {

    const sendData = async (value,resetForm) => {
        const userData = await LoginService.authLogin(value);
        if(userData.success){
            LoginService.successfullLogin(userData.jwt);
            await userLoading();
        }
        console.log("JKT: ",userData)
    }

    const formik = useFormik({
        initialValues:{
            userName:'',
            password:'',
        },
        onSubmit:( values, {resetForm}) => {
            sendData(values, resetForm);
            console.log("aqui");
            
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .max(15, 'Debe de tener 25 caracteres o menos')
                .required('requerido')
                ,
            password: Yup.string()
                .max(15, 'Debe de tener 25 caracteres o menos')
                .required('requerido')
                ,
        })
    });

  return (
    <Fragment>
            <h1>Iniciar sesión </h1>
            <form noValidate onSubmit={ formik.handleSubmit }> 

                    <TextField
                        //error={formik.touched.name &&  formik.errors.name}
                        id="filled-error-helper-text"
                        label="Usuario"
                       // defaultValue=""
                        helperText={formik.errors.userName}
                        variant="filled"  
                        {...formik.getFieldProps('userName')}
                    />


                    <TextField
                        //error={formik.touched.email &&  formik.errors.email}
                        id="filled-error-helper-text"
                        label="Contraseña"
                        //defaultValue=""
                        helperText={formik.errors.password}
                        variant="filled"  
                        {...formik.getFieldProps('password')}
                    />  
                    <Button type='submit' variant="contained">Iniciar sesión</Button>
                
            </form>
    </Fragment>
  )
}



export default LoginForm