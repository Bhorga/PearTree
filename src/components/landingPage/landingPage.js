import React from "react";
import Carousel from '../carousel/carousel';
import Navbar from '../navbar/navbar';
import SummerTrip from '../summerTrip/summerTrip';
import Card from '../card/card';
import Footer from '../footer/footer';
import "./landingPage.css"

const LandingPage = () => {

    const cardData = [
        {   key:"123",
            imageUrl: "https://source.unsplash.com/random/300×300/?Surfing",
            title: "Surfing",
            text: "Best Hawaiian islands for surfing."
        },
        {   key:"1234",
            imageUrl: "https://source.unsplash.com/random/300×300/?Hula",
            title: "Hula.",
            text: "Try is yourself."
        },
        {key:"12345",
            imageUrl: "https://source.unsplash.com/random/300×300/?volcano",
            title: "Vulcanoes",
            text: "Volcanic conditions can change at any time."
        },
    ]



    return (<>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <SummerTrip></SummerTrip>
            <div className="upperCardSection">
            <div className="d-flex lowerCardSection mb-5">
            {cardData.map((data) => {
                return (<div key={data.key} className="m-2"><Card imageUrl={data.imageUrl} title={data.title} text={data.text} footer={false} arrow={true}></Card></div>)
            })}
        </div>  
            </div>        

        <Footer></Footer></>)
}
export default LandingPage