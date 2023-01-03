import React, {useState,useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import MasterLayout from './app/layouts/admin/MasterLayout';
// import FrontendLayout from './app/layouts/frontend/FrontendLayout';
import swal from 'sweetalert';

function AdminPrivateRoute({...rest}) {

    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setloading] = useState(true);

    // console.log(localStorage.getItem('auth'));

    // let auth = JSON.parse(localStorage.getItem('auth'));
    //     console.log(auth);
    //     alert('check' + Authenticated);
    //     console.log('Auth');
    //     console.log(auth);

    //     if(auth.statusCode === 200)
    //     {
    //         setAuthenticated(true);
    //     }
    //     // setloading(false);

    //     return () => {
    //         setAuthenticated(false);
    //     };

    useEffect(() => {
        
        let auth = JSON.parse(localStorage.getItem('auth'));

        if(auth.statusCode === 200)
        {
            setAuthenticated(true);
        }
        setloading(false);

        return () => {
            setAuthenticated(false);
        };
    }, []);

    
    /*axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
        if(err.response.status === 401)
        {
            swal("Unauthorized",err.response.data.message,"warning");
            history.push('/');
        }
        return Promise.reject(err);
    });

    axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if(error.response.status === 403) // Access Denied
            {
                swal("Forbidden",error.response.data.message,"warning");
                history.push('/403');
            }
            else if(error.response.status === 404) //Page Not Found
            {
                swal("404 Error","Url/Page Not Found","warning");
                history.push('/404');
            }
            return Promise.reject(error);
        }
    );
    */
    

    if(loading)
    {
        return <h1>Loading...</h1>
    }

    

    return (
        
        // <Route {...rest}
        //     render={ ({props, location}) => 
        //         Authenticated ?
        //         ( <MasterLayout {...props} /> ) :
        //         ( <Redirect to={{pathname: "/", state: {from: location} }} /> ) 
        //     }
        // />
        <>
        <p>Hello</p>

        <Route {...rest}
            render={ ({props,location}) =>  
                <MasterLayout {...props} />
            }
        />
        </>

    );
}

export default AdminPrivateRoute;
