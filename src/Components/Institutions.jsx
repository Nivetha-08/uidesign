import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Institutions = () => {

  const sliderRef = useRef(null);
  
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 6000,
      cssEase: "linear",
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };

  const arr = [
    { id: 1, src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2020/08/tpt-1.jpg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi harum fugiat vel laboriosam incidunt." },
    { id: 2, src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2020/08/sona-tech.jpg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi harum fugiat vel laboriosam incidunt." },
    { id: 3, src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2020/08/mba.jpg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi harum fugiat vel laboriosam incidunt." },
    { id: 4, src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2020/08/arts.jpg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi harum fugiat vel laboriosam incidunt." },
    ]

  return (
    <section id="Clients-Section container-fluid container-md">
      <div className="clients-container">
        <div className="h2 text-center mt-3 mb-1">XXX Institutions</div>
        <hr
          className="mx-auto"
          style={{
            width: "15dvw",
            color: "red",
            border: "3px solid blue",
            margin: "0px",
            borderRadius: "10px",
            marginBottom: '20px'
          }}
        />

        <div className="slider-wrapper pt-2">
          {/* Slider Component */}
          <Slider ref={sliderRef} {...settings}>
            {arr.map((v, i) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4" key={i}>
            <div className="img-container"><img src={v.src} alt="institution" className="img-fluid rounded mb-2 m-auto" /></div>
            <p className="container text-center p-0 px-md-5 small">{v.content}</p>
          </div>
        ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Institutions
