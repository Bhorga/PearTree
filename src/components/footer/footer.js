import React from "react";
import Card from "../card/card";
import "./footer.css"
import profile from "../animations/profilepic.svg"
import footerAloha from "../animations/footerAloha.svg"

const Footer = () => {

    const footerCardData = [
        { text: "Adventure" , key :"qwe"},
        { text: "Culinary" ,key :"qwer" },
        { text: "Eco-tourism" ,key :"qwert" },
        { text: "Family" , key :"qwerty"},
        { text: "Sport" ,key :"qwertyu" },
    ]


    return (<>

        <div className="mt-4 footerContact" style={{ background: "#E6F2F2" }}>
            <div className="contactSection">

                <div className="row d-flex justify-content-center">
                    <div className="bottom-card-div col-md-5" >
                        <div className="p-2 footerTitle">
                            Catergories
                        </div>
                        <div>

                            {footerCardData.map((data) => {
                                return (<div key={data.key} className="m-1" style={{ maxWidth: "588px" }}><Card text={data.text} footer={true} arrow={true}></Card></div>)
                            })}
                        </div>
                    </div>
                    <div className="contact-detail col-md-5">
                        <div className="p-2 footerTitle">Travel Guide</div>
                        <div className="card border-0 m-1" style={{ minWidth: "268px", maxWidth: "588px", maxHeight: "340px" }}>
                            <div className="card-body d-flex justify-content-between">
                                <div className="d-flex flex-column justify-content-between">
                                    <div>
                                    <h5 className="card-title footerCardTitle">Hadwin Malone</h5>
                                    <div className="card-text">Guide since 2012</div>

                                    </div>
                             
                                    <div className="mt-3">
                                        <div className="cardButton">Contact</div>
                                    </div>
                                </div>
                                <div>
                                    <img className ="profilePic"style={{borderRadius: "50%"}} width={"128px"} height={"128px"} src={`${profile}`} alt="profile-img" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>



            </div>
        </div>


        <div className="footer">
            <div className="container">
                <img src={`${footerAloha}`} alt="logo" />
            </div>
        </div>
    </>)
}
export default Footer