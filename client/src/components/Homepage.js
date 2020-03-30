import React from 'react';
import {Link} from 'react-router-dom';

const Homepage = (props) => {
    return(
        <div className='homel-hero container-fluid text-center'>
            <h1>Welcome</h1>
            <Link type='button' className='btn btn-primary' to='/signin'>Sign in</Link>
        </div>
    );
}

export default Homepage;
