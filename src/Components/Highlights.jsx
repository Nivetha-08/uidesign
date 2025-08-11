import React from 'react'

const Highlights = () => {
  return (
    <>
        <div className="h3 text-center mt-3 mb-1">HighLights</div>
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

        <div className="container-fluid container-lg mt-2">
            <div className="card border-0" style={{ overflow: 'hidden', borderRadius: '15px' }}>
                <div className="row">
                    <div className="col-lg-6">
                        <img src="https://images.pexels.com/photos/4861299/pexels-photo-4861299.jpeg" className='img-fluid rounded'  alt="" />
                    </div>
                    <div className="col-lg-6 mt-3 mt-xl-5">
                        <h3 className='text-dark text-center pb-lg-3'>Press Release</h3>
                        <ul className='mt-lg-3'>
                            <li className='h6' style={{color: 'dark' }}><a href="#" className='text-primary' style={{textDecoration:"underline"}}>Harit Yoga Celebration at Yercaud</a> 11th June 2025 : Dinakaran</li>
                            <li className='h6' style={{color: 'dark' }}><a href="#" className='text-primary' style={{textDecoration:"underline"}}>Harit Yoga Celebration at Yercaud</a> 11th June 2025 : Dinathanth</li>
                            <li className='h6' style={{color: 'dark' }}><a href="#" className='text-primary' style={{textDecoration:"underline"}}>i5 Water day Celebration 2025</a> 15th April 2025 : Dinakaran</li>
                            <li className='h6' style={{color: 'dark' }}><a href="#" className='text-primary' style={{textDecoration:"underline"}}>10th International Yoga Day Celebrations</a> 20th June 2024 : The Hindu Tamil</li>
                            <li className='h6' style={{color: 'dark' }}><a href="#" className='text-primary' style={{textDecoration:"underline"}}>Our Students secured third place in State level hockey tournament </a>– 6th August 2023 :  Dinamalar</li>
                            <li className='h6' style={{color: 'dark' }}><a href="#" className='text-primary' style={{textDecoration:"underline"}}>International Yoga Day  Awareness Rally</a>  22th June 2023 : Daily Thanthi</li>
                        </ul>

                        <div className="pt-xl-5">
                            <h3 className='text-center pb-3'>SMPNY Highlights</h3>
                            <div class="ratio ratio-16x9 mt-3">
                                <iframe 
                                    width="400" 
                                    height="300" 
                                    src="https://www.youtube.com/embed/_Q6cMdVMby0" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Highlights

// https://youtu.be/_Q6cMdVMby0?si=FnU06V2y4l8dNk2W