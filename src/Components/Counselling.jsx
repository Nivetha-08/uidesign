import React from "react";

const Counselling = () => {
  return (
    <>
     

      <div className="container-fluid container-md mt-3">
        <div className="h3 text-center mb-1">Quick Links</div>
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

          {/* quick links and counselling code */}
          <div className="container-fluid container-md">
            <div className="row">
              <div className="col-md-6 px-1">
                <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-action text-primary">Online Fees Payments</a>
                  <a href="#" className="list-group-item list-group-item-action text-primary">Online Enquiry</a>
                  <a href="#" className="list-group-item list-group-item-action text-primary">Online Application</a>
                </div>
              </div>
              <div className="col-md-6 mt-1 mt-md-0 rounded bg-white d-flex justify-content-center align-items-center">
                <span className="text-danger h1">
                  Counselling Code:
                  <span className="text-primary"> 001</span>
                </span>
              </div>
            </div>
          </div>
          
        {/* marquee */}
        <div
          className="card p-3 mt-3"
          style={{ borderRadius: "15px", background: "white" }}
        >
          <marquee className="" direction="left">
            <span className="badge badge-pill bg-primary me-1 ms-3">new</span>
            <span className="text-success">
              {" "}
              4th Annual Day Celebration 2025{" "}
            </span>
            <span className="badge badge-pill bg-primary me-1 ms-3">new</span>
            <span className="text-success"> International Day 2025 </span>
            <span className="badge badge-pill bg-primary me-1 ms-3">new</span>
            <span className="text-success">
              {" "}
              The textile to xxx Industrialist yyy{" "}
            </span>
            <span className="badge badge-pill bg-primary me-1 ms-3">new</span>
            <span className="text-success">
              {" "}
              Xxx Accademy: Building the Future of Cricket{" "}
            </span>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Counselling;
