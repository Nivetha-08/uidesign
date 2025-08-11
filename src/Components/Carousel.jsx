import React from 'react'
import './Carousel.css' 

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
                            <img src="https://th.bing.com/th/id/OIP.BQ8o_SI4N_4-7YXjlvOpkwHaEK?w=340&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="d-block w-100" alt="img-1"  />
                            </div>
                            <div className="carousel-item">
                            <img src="https://th.bing.com/th/id/OIP.BQ8o_SI4N_4-7YXjlvOpkwHaEK?w=340&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="d-block w-100" alt="img-2" />
                            </div>
                            <div className="carousel-item">
                            <img src="https://th.bing.com/th/id/OIP.BQ8o_SI4N_4-7YXjlvOpkwHaEK?w=340&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="d-block w-100" alt="img-3"  />
                            </div>
                            <div className="carousel-item">
                            <img src="https://th.bing.com/th/id/OIP.BQ8o_SI4N_4-7YXjlvOpkwHaEK?w=340&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="d-block w-100" alt="img-4"  />
                            </div>
                            <div className="carousel-item">
                            <img src="https://th.bing.com/th/id/OIP.BQ8o_SI4N_4-7YXjlvOpkwHaEK?w=340&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="d-block w-100" alt="img-5"  />
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



// import React from 'react'
// import './Carousel.css' // Import your styles

// const Carousel = () => {
//   return (
//     <div className="container-fluid container-md" style={{ marginTop: '70px' }}>
//       <div className="card" style={{ borderRadius: '15px', overflow: 'hidden' }}>
//         <div
//           id="carouselExampleIndicators"
//           className="carousel slide"
//           data-bs-ride="carousel"
//           data-bs-interval="2000"
//         >
//           <div className="carousel-indicators">
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"></button>
//           </div>

//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/2025/05/patents-sona-medical-college.webp" className="d-block w-100" alt="img-1" />
//             </div>
//             <div className="carousel-item">
//               <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/slider2/medical-college-sona-hospital-bed.webp" className="d-block w-100" alt="img-2" />
//             </div>
//             <div className="carousel-item">
//               <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/2023/01/medical-college-sona.jpg" className="d-block w-100" alt="img-3" />
//             </div>
//             <div className="carousel-item">
//               <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/2022/09/Abj-Abdul-kalam-in-Sona-Gro.jpg" className="d-block w-100" alt="img-4" />
//             </div>
//             <div className="carousel-item">
//               <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/2025/05/Chandra-Namaskara-banner.jpg" className="d-block w-100" alt="img-5" />
//             </div>
//             <div className="carousel-item">
//               <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/2024/04/mgr-university-vice-chancelooe-thyagu.webp" className="d-block w-100" alt="img-6" />
//             </div>

//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//               <span className="carousel-control-prev-icon"></span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//               <span className="carousel-control-next-icon"></span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Carousel
