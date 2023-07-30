import React from "react";
import "./carousel.css"
const Carousel = () => {
    return (<>
        <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade position-relative z-0"
            data-bs-ride="carousel"

        >
            <div className="carousel-inner upperBox " >
                <div className="carousel-item active">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/eb8d/55a4/4df95aa492f32fed48cde5ee1190b244?Expires=1691366400&Signature=Il9dPbZ65kmmUMZAUw1~uQM9AZpwORIEDeAdZRIr7cJGsIYGuJDZSZE6YphLWDA9Kow0mYUyNGy6eeGZInM9O2WQE2cr3tzq1GUV3ezl00qPiPkGvA501svdjIKeMcb0Shidp1EkfINo2pNaow3kMQ1RvO9oFV73-19R6b6gAtNp8AkPTOIp7pVemZbWE5lyCGHyQlXonxTd0queUJf1Vrb0OvFpyY7T0nZqlIcHj8IdTwIOOA6Tr4hNDRW4~-Oru0oTN8jyYGsAKoMsgOgYXP9zr8ShzE5lW3ajgG7GGIuMi4XWD-AJzRLtBNex-B7mLIlxzJZGEyv7Li3GNSv9qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        className="d-block w-100"
                        style={{ filter: "brightness(80%)", objectFit: "cover", height: "80vw" }}
                        alt="..."
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://source.unsplash.com/random/300×300/?beach"
                        style={{ filter: "brightness(80%)" }}
                        className="d-block w-100"
                        alt="..."
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://source.unsplash.com/random/300×300/?goa"
                        style={{ filter: "brightness(80%)" }}
                        className="d-block w-100"
                        alt="..."
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className=" d-flex  textWritten position-absolute z-2 flex-column" style={{ width: "100vw", top: "12vw" }}>
                <div className="d-flex justify-content-center">Welcome </div>
                <div className="d-flex justify-content-center">to Hawaii</div>



            </div>
        </div>

    </>)
}

export default Carousel