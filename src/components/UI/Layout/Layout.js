import React from 'react';
import {connect} from "react-redux";
import classes from './Layout.module.css';
import Aux from '../../../hoc/AuxComponent/AuxComponent';
import Toolbar from '../../Header/Toolbar/Toolbar'
import Footer from '../../Footer/Footer';

const Layout = props => {
    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated}/>
            <main className={classes.Content}>
                {props.children}
            </main>
            <Footer/>
        </Aux>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);