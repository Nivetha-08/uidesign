import React from 'react'
import './Carousel.css' 
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"

const Carousel = () => {
  return (
    <>
        <div className="container-fluid container-md" style={{marginTop : '70px'}}>
            <div className="card" style={{borderRadius : '15px', overflow: 'hidden'}}>
                {/* <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel"> */}
                     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="2000">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="img-1"/>
                            </div>
                            <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="img-2" />
                            </div>
                            <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="img-3"  />
                            </div>
                            <div className="carousel-item">
                            <img src={img4} className="d-block w-100" alt="img-4"  />
                            </div>
                            <div className="carousel-item">
                            <img src={img5} className="d-block w-100" alt="img-5"  />
                            </div>
                            <div className="carousel-item">
                            <img src="https://th.bing.com/th/id/OIP.BQ8o_SI4N_4-7YXjlvOpkwHaEK?w=340&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="d-block w-100" alt="img-6"  />
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    </>
  )
}

export default Carousel