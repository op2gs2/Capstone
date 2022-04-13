import React from 'react';
import Header from './Header';
import Main from './Main';
const Layout = ({children})=>{
    return(
        <>
        <Header />
        <Main />
        {children}
        </>
    )
}
export default Layout;