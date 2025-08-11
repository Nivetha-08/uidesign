import React from "react";

const Cards = () => {
  const arr = [
    {
      id: 1,
      src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2022/09/blended-learning-1.jpg",
      title: "Why BNYS at XXX?",
      content:
        "XXX is one of the premiere institutes excelling in education since many decades. XXX Medical College of Naturopathy and Yoga is an emerging Top college in Salem. The teaching faculties in our college are experienced in both clinical and academic aspects.",
      read: "Read BNYS",
    },
    {
      id: 2,
      src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2022/09/naturopathy-sona-1.jpg",
      title: "Why Naturopathy?",
      content:
        "Naturopathy is the science of healthy living. This is a drugless system of medicine and healing which has a well-founded philosophy.  Naturopathy is a system of man building in harmony with constructive principal of nature of physical, mental, moral and spiritual planes of living.",
      read: "Read Naturopathy",
    },
    {
      id: 3,
      src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2022/09/why-sona.jpg",
      title: "Why XXX?",
      content:
        "Having achieved excellence in technology, technical education and research, XXX brings to you XXX medical college – a venture to promote Indian heritage medicines and health practices and create an environment for the growth of Ayush.",
      read: "Read Excellence",
      num: "67 Years of Service to Industry and Education",
    },
  ];

  return (
    <>
      <div className="h3 text-center mt-3 mb-1">Benefits</div>
      <hr
        className="mx-auto"
        style={{
          width: "6dvw",
          color: "red",
          border: "3px solid blue",
          margin: "0px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      <div className="container-fluid container-md card-group">
        <div className="row mt-3 mt-lg-0">
          {arr.map((v, i) => (
            <div className="col-lg-4 mb-4" key={i}>
              <div className="card h-100">
                <div><img src={v.src} alt="card-img-top" className="card-img-top" /></div>

                <div className="card-body py-2">
                  <h4 className="card-title text-success fw-bolder h5 text-center pt-2">
                    {v.title}
                  </h4>
                  {v.num && <h5 className="text-muted">{v.num}</h5>}
                  <p className="card-text">{v.content}</p>
                </div>

                <div className="card-footer text-center">
                  <button className="btn btn-primary px-4">{v.read}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
