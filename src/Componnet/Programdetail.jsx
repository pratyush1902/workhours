import React from 'react'
import tick from '../Images/tick.png'
import tick2 from '../Images/squaretick.png'

export default function Programdetail() {
  return (
    <div>
        <div className="programhead">
            <h1>Program Details</h1>

        </div>
        <div className="programbody">
            <div className="programleft">
                <h1>Ready to join <br /> Growth hacking Program?</h1>
                 <p>Learn from industry experts to develop a growth mindset</p>
                 <div className="tickcon">
                    <img src={tick} alt="" height='49px' width='49px'/>
                    <h3>60+ Hours of Content</h3>


                 </div>
                 <div className="tickcon">
                    <img src={tick} alt="" height='49px' width='49px'/>
                    <h3>15+ Guest Sessions</h3>


                 </div>
                 <div className="tickcon">
                    <img src={tick} alt="" height='49px' width='49px'/>
                    <h3>8 Live QnA</h3>


                 </div>
                 <div className="tickcon">
                    <img src={tick} alt="" height='49px' width='49px'/>
                    <h3>Premium Growth Hacking <br /> community of marketers</h3>
                 </div>
                 <button id='progbuttom'>Apply Now</button>
            </div>
            <div className="programright">
                <div className="rightproghead">
                    <h1>What you get:</h1>
                    
                </div>
                <div className="righttickcon">
                    <img src={tick2} alt="" height='40px' width='40px' />
                    <p>Access to a powerful community of Growth Hacking <br /> enthusiasts and mentors from top brands.</p>
                </div>
                <div className="righttickcon">
                    <img src={tick2} alt="" height='40px' width='40px' />
                    <p> One year access to the pre-reads, curriculum, and on- <br /> demand content.</p>
                </div>
                <div className="righttickcon">
                    <img src={tick2} alt="" height='40px' width='40px' />
                    <p>Exclusive access to physical events and meetups <br /> in the community.</p>
                </div>
                <div className="righttickcon">
                    <img src={tick2} alt="" height='40px' width='40px' />
                    <p>Opportunity to connect with Guest Mentors who have fueled <br /> growth in multiple million-dollar startups.</p>
                </div>
            </div>
        </div>
        <hr />
      
    </div>
  )
}
