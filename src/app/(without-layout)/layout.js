import React from 'react';
import OtherNav from '../components/navbar/OtherNav';

const layout = ({children}) => {
    return (
        <div>
            <OtherNav/>
           {children} 
        </div>
    );
};

export default layout;