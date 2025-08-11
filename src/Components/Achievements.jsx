import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./Achievements.css";
import { FaAngleDoubleRight } from "react-icons/fa";

const Achievements = () => {

  const sliderRef = useRef(null);

   const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    {
      id: 1,
      src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-08-at-10.15.56-150x150.jpeg",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi harum fugiat vel laboriosam incidunt.",
      sub: "February 27, 2023",
      read: "Read More ",
    },
    {
      id: 2,
      src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-05-at-12.52.37-150x150.jpeg",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi harum fugiat vel laboriosam incidunt.",
      sub: "July 5, 2024",
      read: "Read More ",
    },
    {
      id: 3,
      src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2023/07/sona-bnys-hockey-2023-150x150.webp",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi harum fugiat vel laboriosam incidunt.",
      sub: "July 20, 2023",
      read: "Read More ",
    },
    {
      id: 4,
      src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2023/07/silambam-medical-students-150x150.webp",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi harum fugiat vel laboriosam incidunt.",
      sub: "July 8, 2023",
      read: "Read More ",
    },
  ];

  return (
    <section id="Clients-Section">
      <div className="clients-container">
        <div className="h3 text-center mt-3 mb-1">Students Achievements</div>
        <hr
          className="mx-auto"
          style={{
            width: "150px",
            color: "red",
            border: "3px solid blue",
            margin: "0px",
            borderRadius: "10px",
            marginBottom: '20px'
          }}
        />


        <div className="slider-wrapper container-fluid container-md">
          {/* Slider Component */}
          <Slider ref={sliderRef} {...settings}>
            {arr.map((client) => (
              <div className="card" key={client.id}>
                <div className="card-img">
                  <div><img
                    src={client.src}
                    alt={client.id}
                    className="img-fluid d-block w-100 m-auto"
                  /></div>
                </div>
                <div className="card-body"><p className="feedback">{client.title}</p></div>
                <div className="card-footer d-flex justify-content-between ">
                  <small>{client.sub}</small>
                  <small><a href="#" style={{textDecoration:"none"}}>{client.read}<FaAngleDoubleRight /></a></small>
                </div>
              </div>
              
            ))}
          </Slider>

          {/* Navigation Buttons */}
          <div className="btn-group">
            <button
              aria-label="Previous Slide"
              style={{
                border: "2px solid #1c3556",
                color: "#1c3556",
                background: "white",
                borderRadius: "50%",
                fontSize: "15px",
                padding: "7px 13px 10px 11px",
              }}
              className="nav-btn"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <FaChevronLeft />
            </button>
            <button
              aria-label="Next Slide"
              style={{
                border: "2px solid #1c3556",
                color: "#1c3556",
                background: "white",
                borderRadius: "50%",
                fontSize: "15px",
                padding: "7px 11px 10px 13px",
                marginLeft: "20px",
              }}
              className="nav-btn"
              onClick={() => sliderRef.current.slickNext()}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );

};

export default Achievements;