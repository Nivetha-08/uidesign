import React from "react";

const Vip = () => {
  const vipText = `"I practice Yoga. I woke up at 3:30 this morning to do . Additionally, I have been following a vegan diet for the last 5 months. I am trying to focus on a holistic pattern of life, which begins with what you eat, of course, and what you put into your system," Chief Justice Chandrachud told ANI while sharing insights into his wellness practices."`;

  
  return (
    <>
      <div className="container-fluid container-md">

        <div className="h3 text-center mt-3 mb-1">VIP Message</div>
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

        <div className="row">
          <div className="col-lg-4 col-xl-4 mx-auto card-group">
            <div className="card mt-3 mt-lg-0">
            <div className="">
              <div>
                <img
                src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/2024/02/ayush-vaidhya.jpg"
                style={{ height: "200px", width: "250px" }}
                className="card-img-lg-top d-block w-lg-100 w-75 m-auto"
                alt="vip"
              />
              </div>
            </div>
            <div className="card-body">
                <div className="card-title h6">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nobis. Dolorum, provident ullam inventore voluptatibus nesciunt facere quam voluptatem repellat.
                </div>
                <div className="card-subtitle">
                    {vipText.length >= 100
                    ? vipText.slice(0, 100) + "..."
                    : vipText}
                </div>
            </div>
            <div className="card-footer text-end"><button className="btn btn-primary">Read More</button></div>
          </div>
          </div>

          <div className="col-lg-4 px-4  col-xl-4 mx-auto">
              <div className="card mt-3 mt-lg-0">
                <div className="card-img">
                  <div className="ratio ratio-16x9">
                    <iframe
                      width="400"
                      height="200"
                      src="https://www.youtube.com/embed/_Q6cMdVMby0"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-title h6">Power on Me</div>
                  <div className="subtitle">Lorem, ipsum dolor sit amet consectetur. Distinctio eaque iure repudiandae unde voluptatibus voluptatum ut! Magnam magni nemo, quia quasi autem excepturi in vitae. Voluptatibus, ut?</div>
                </div>
                <div className="card-footer text-muted text-end">
                  Updated on 2020
                </div>
              </div>
          </div>

          <div className="col-lg-4 px-4  col-xl-4 mx-auto">
              <div className="card mt-3 mt-lg-0">
                <div className="card-img">
                  <div className="ratio ratio-16x9">
                    <iframe
                      width="400"
                      height="200"
                      src="https://www.youtube.com/embed/_Q6cMdVMby0"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-title h6">Student's Yoga Dance</div>
                  <div className="subtitle">Lorem, ipsum dolor sit amet consectetur. Distinctio eaque iure repudiandae unde voluptatibus voluptatum ut! Magnam magni nemo, quia quasi autem excepturi in vitae. Voluptatibus, ut?</div>
                </div>
                <div className="card-footer text-muted text-end">
                  Updated on 2020
                </div>
              </div>
          </div>

          
            
        </div>

        
      </div>
    </>
  );
};

export default Vip;
