import React, { Suspense, Fragment, useState, useEffect } from 'react';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import LoginService from '../service/LoginService';
import { JWT_TOKEN } from '../shared/constans';

const DidMount = (props) => {

    const [userProfile, setUserProfile] = useState({ userProfile: null });
    const [jwtProfile, setJwtProfile] = useState(false);

    const Login = lazy( () => import( '../pages/login/Login') );
    const Home = lazy( () => import( '../pages/home/Home') );
    

    useEffect(() => {
        userLoading();
       
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const userLoading = async () => {
        const userInfo = await LoginService.getUserProfile();
        setUserProfile(userInfo);

        const JWT= localStorage.getItem(JWT_TOKEN);
        
        if (JSON.stringify(JWT).length <= 4){
            setJwtProfile(false);
        }else{
            setJwtProfile(true);
        }
    }


    return (
        <Fragment>
            <Suspense fallback={<span>Loading</span>} >
                <BrowserRouter>
                    <Routes>
                        <Route
                            exact
                            path="/Login"
                            element = { jwtProfile
                                ?
                                    <Navigate replace to={{ pathname: "/" }} />
                                :
                                    <Login userLoading={userLoading}/> 
                            }
                        />
                        <Route
                            exact
                            path="/"
                            element = { !jwtProfile
                                        ?
                                            <Navigate replace to={{ pathname: "/Login" }} />
                                        :
                                            <Home  userProfile={userProfile}/>
                            }
                        />

                    </Routes>
                </BrowserRouter>

            </Suspense>

        </Fragment>
    )
}



export default DidMount