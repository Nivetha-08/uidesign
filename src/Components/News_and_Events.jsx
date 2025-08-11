import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const News_and_Events = () => {
  const news = [
    {
      id: 1,
      src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2025/06/0X9A1876-768x512.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi harum fugiat vel laboriosam incidunt.",
      sub: "June 10, 2025",
      read: "Read More ",
    },
    {
      id: 1,
      src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2025/03/medical-camp-6-768x576.jpeg",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi harum fugiat vel laboriosam incidunt.",
      sub: "March 3, 2025",
      read: "Read More ",
    },
    {
      id: 1,
      src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2025/03/medical-camp-4-768x576.jpeg",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi harum fugiat vel laboriosam incidunt.",
      sub: "March 3, 2025",
      read: "Read More ",
    },
  ];
  return (
    <>
      <div className="h3 text-center mt-3 mb-1">News And Events</div>
        <hr
          className="mx-auto"
          style={{
            width: "100px",
            color: "red",
            border: "3px solid blue",
            margin: "0px",
            borderRadius: "10px",
            marginBottom: '20px'
          }}
        />

      {/* <div className="container-fluid container-md ">
        <div className="card-body row">
          {news.map((n, ind) => (
            <div className="col-lg-4 p-2 card-group" key={ind}>
              <div className="card">
                <div className="card-img">
                  <img
                    src={n.src}
                    className="card-img-top"
                    alt={`news` + (ind + 1)}
                  />
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <a href="#">
                      {n.title >= 50 ? n.title.slice(0, 50) + "..." : n.title}
                    </a>
                  </div>
                </div>
                <div className="card-body d-flex justify-content-between">
                  <div className="card-footer d-flex justify-content-around">
                    <small className="text-muted">{n.sub}</small>
                    <small className=""><a href="#">{n.read}</a></small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="container-fluid container-md card-group">
        <div className="row">
          {news.map((n, ind) => (
            <div className="col-lg-4 p-2 card-group" key={ind}>
              <div className="card">
                <div className="card-img">
                  <img
                    src={n.src}
                    className="card-img-top"
                    alt={`news` + (ind + 1)}
                  />
                </div>
                <div className="card-body p-3">
                  <div className="card-title">
                    <a href="#">
                      {n.title >= 50 ? n.title.slice(0, 50) + "..." : n.title}
                    </a>
                  </div>
                </div>
                <div>
                  <div className="card-footer d-flex justify-content-around">
                    <small className="text-muted">{n.sub}</small>
                    <small><a href="#" style={{textDecoration:"none"}}>{n.read}<FaAngleDoubleRight /></a></small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default News_and_Events;
