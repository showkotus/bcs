import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const layout = ({children}) => {
    return (
        <div>
            <Navbar/>
           {children} 
           <Footer/>
        </div>
    );
};

export default layout;