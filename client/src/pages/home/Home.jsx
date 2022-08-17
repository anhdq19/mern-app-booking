import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import "./home.css";
import PropertyList from "../../components/propertyList/PropertyList";
import FeatureProperties from "../../components/featureProperties/FeatureProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

function Home() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Khám phá Việt Nam </h1>
                <PropertyList/>
                <h1 className="homeTitle">Nhà ở mà khách yêu thích</h1>
                <FeatureProperties/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;