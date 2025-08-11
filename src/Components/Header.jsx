import React from 'react'

const Header = () => {
  return (
    <div className='my-3'>
      <div className='row align-items-center'>

        <div className='col-sm-12 col-lg-4 py-2 text-center'>
          <img src="https://th.bing.com/th?q=College+Word+Art&w=120&h=120&c=1&rs=1&qlt=90&r=0&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="Brand Name" className='img-fluid ' />
        </div>

       
          
            <div className='col-sm-12 col-lg-4 py-2 text-center'>
              <a href="#" className='h6' style={{ textDecoration: "underline" }}>College</a> <br />
              <span>XXXXXXXXXX Campus</span> <br />
              <span>YYYYYYYYYYYYY (YYY)</span> <br />
              <span>ZZZZZZZZZZZZZZZZZZZZZZZZZ Road</span> <br />
              <span>XXXX (TK), Salem - 636 001. TN. INDIA</span> <br />
              <span className='text-primary'>Affiliated to the TN. Dr.M.G.R. Medical University</span>
            </div>

            <div className='col-sm-12 col-lg-4 py-2 text-center'>
              <a href="#" className='h6'>Admission</a> <br />
              <span>XXX College of Technology</span> <br />
              <span>XXX YYY ZZZ (XYZ)</span> <br />
              <span>Salem 636001. TN. INDIA</span> <br />
              <p></p>
              <a href="#" className='text-primary' style={{ textDecoration: "none" }}>
                12345 67890 | 12345 67890 | 12345 67890
              </a>
            </div>
          
      </div>
    </div>
  )
}

export default Header
