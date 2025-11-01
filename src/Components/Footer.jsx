import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { SiInstagram } from "react-icons/si";
import { FaDribbble } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { TbBrandLinkedin } from "react-icons/tb";
import "./footer.css"
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <>
        <div className="row pt-4 px-3" id="footer" style={{background:"#f6faff"}}>
            <div className="col-lg-3">
                <h5>About Us</h5>
                <p>The one and only Medical College situated in forest based natural environment in Tamilnadu which is supported by Ayush hospital.</p>
                <div className='icon-container mb-3'>
                    <span className='icon' style={{background:"#1877F2"}}><CiFacebook /></span>
                    <span className='icon' style={{background:"#E1306C"}}><SiInstagram /></span>
                    <span className='icon' style={{background:"#EA4C89"}}><FaDribbble /></span>
                    <span className='icon' style={{background:"#FF0000"}}><CiYoutube /></span>
                    <span className='icon' style={{background:"#0077B5"}}><TbBrandLinkedin /></span>
                </div>
            </div>
            <div className="col-lg-2">
                <h5>BYNS Course</h5>
                <ul style={{textDecoration:"none"}}>
                    <li><a href="#" >Curriculum & Syllabus</a></li>
                    <li><a href="#" >Scope of career</a></li>
                </ul>
            </div>
            <div className="col-lg-2">
                <h5>Other Links</h5>
                <ul style={{textDecoration:"none"}} >
                    <li><a href="#" >Calendar</a></li>
                    <li><a href="#" >City Clinic</a></li>
                    <li><a href="#" >Doctors</a></li>
                    <li><a href="#" >FAQ</a></li>
                    <li><a href="#" >Press Release</a></li>
                    <li><a href="#" >Sona Institutions</a></li>
                </ul>
            </div>
            <div className="col-lg-2">
                <h5>Address</h5>
                <h5>COLLEGE & HOSPITAL :</h5>
                <p>
                    KAIRA Campus<br />
                    PO BOX 19720<br />
                    Durham<br />
                    North Carolina
                </p>
            </div>

            <div className="col-lg-3">
                <h5></h5>
                <p>
                    KAIRA Campus<br />
                    North Carolina
                </p>
            </div>
        </div>

        <div className='text-center py-3' style={{background:"whiteSmoke"}}>
            <span><MdOutlineCopyright /></span><span>2025 XXX Medical College of Naturopathy and Yoga. All rights reserved.</span>
        </div>
    </>
  )
}

export default Footer