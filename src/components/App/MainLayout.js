import React, { Component } from 'react';




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
