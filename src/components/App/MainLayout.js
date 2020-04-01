import React, { Component } from 'react';

import Header from '../headernavbarfooter/header' ;
import Navbar from '../headernavbarfooter/navbar';
import Home from '../pages/home';
import AboutUs from '../pages/about-us';
import BreakfastMenu from '../pages/breakfast-menu';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';


export default class MainLayout extends Component {
    render() {
        return (
            <div>
                    {/* home page  */}
                <div>
                    <Header/>
                    <Navbar/>
                    <Home/>
                    <SocialMediaFooter/>
                </div>
                    {/* About Us page */}
                <div>
                    <Header/>
                    <Navbar/>
                    <AboutUs/>
                    <SocialMediaFooter/>
                </div>
                    {/*  Soups Menu   */}
                {/* <div>
                    <Header/>
                    <Navbar/>
                    <SoupMenu/>
                    <SocialMediaFooter/>
                </div> */}
                    {/* Breakfast Menu  */}
                <div>
                    <Header/>
                    <Navbar/>
                    <BreakfastMenu/>
                    <SocialMediaFooter/>
                </div>
                    {/* Lunch Menu */}
                {/* <div>
                    <Header/>
                    <Navbar/>
                    <LunchMenu/>
                    <SocialMediaFooter/>
                </div> */}
            </div>
        );
    }
}
