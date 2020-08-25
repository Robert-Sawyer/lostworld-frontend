import React from 'react';
import classes from "./ProfileSidebar.module.css";
import ProfilePhoto from '../../../assets/images/gruzja.jpg'

const profileSidebar = props => (
    <nav className={classes.Sidebar}>
        <div className={classes.ProfilePhoto}>
            <img src={ProfilePhoto}/>
        </div>
        <div className={classes.Motto}><span>"Bez ryzyka nie ma zabawy"</span></div>
        <div className={classes.UserInfo}>
            <p>Na <span>Lost World</span> od: 25.08.2020</p>
            <p>Odwiedzonych krajów: xx</p>
            <p>Odwiedzonych miejsc: xxx</p>
            <p>Dodanych miejsc:xx</p>
            <p>Liczba planów podróży: xx</p>
        </div>
        <div className={classes.Friends}>
            <p>Moi znajomi: </p>
        </div>
    </nav>
);

export default profileSidebar;
