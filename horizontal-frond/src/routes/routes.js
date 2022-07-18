import { lazy} from 'react';


const HomeTeacher = lazy( () => import( '../pages/inscriptionTeacher/HomeTeacher') );
//const User = lazy( () => import( '../pages/usuario/User') );


export const routes = [ 
    {
        path : '/home/*',
        to : '/home/',
        Component: HomeTeacher,
        name: 'Home'
    },

]