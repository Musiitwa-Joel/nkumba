import React, { Fragment, useEffect } from 'react';
import Switcher from './Components/Layouts/Switcher/Switcher';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Components/CommonFileComponents/redux/store';

function CustomAuthenticationPages() {

    useEffect(() => {
        document.querySelector("body")?.classList.add("ltr", "bg-primary-transparent", "error-page1", "main-body", "error-2");
    }, [])


    return (
        <Fragment>
            <Provider store={store}>
            <Switcher />
            <div className="page justify-content-center">
                <Outlet />
            </div>
            </Provider>
        </Fragment>
    )
}
// 
export default CustomAuthenticationPages;
