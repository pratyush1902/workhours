import React from 'react'
import pic from '../Images/instructure.webp'
import pic1 from '../Images/mentor.png'

export default function Instructure() {
  return (
    <div>
        <div className="Inshead">
            <h1>Instructed by</h1>

        </div>
        <div className="insCard">
            <img src={pic} alt="" height='500px' width='200px'/>
            <div className="cardcon">
                <h2>Veerander Chowdary </h2>
                <h3>Founder & Ceo - Workhours.in</h3>
                 <p>My name is Veerander Chowdary. <br /> I am an Entrepreneur, Digital Marketer & Facebook Ads Expert. <br /> I have 7+ years of experience working in the digital marketing field <br /> and I know all ins and outs of the industry.</p>
                 <p> have conducted 25+ free seminars and sessions to educate digital marketing. <br /> So far, I have trained more than 100,000+ students who are <br /> now achieving success in the field.</p>
                 <p>I am giving free courses on digital marketing because my mission is to reach <br /> out to people specially students and guide them that it can <br /> be a business and it has a huge potential in coming years in India.</p>
            </div>
        </div>
        <hr />

        <div className="mentorhead">
            <h1>Co-Mentors</h1>
            <div className="mentorcard">
                <img src={pic1} alt="" height='250px' width='250px' />
                <div className="mentorcon">
                    <h2>Ishan Singh</h2>
                    <p>Growth Marketing Manager <br /> - Scripbox ; Growth Assistance <br /> - UpGrad & Fynd</p>
                </div>
            </div>
            
        </div>

        <hr />
        
      
    </div>
  )
}
