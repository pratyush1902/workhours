import React from 'react'
import pic from '../Images/numberpic.png'

export default function Peoplesnum() {
  return (
    
    <div>
        <div className="Numberhead">
            <h1>But, why Become a <br /> <span className='Numberheadspan'>Growth Hacker?</span></h1>
        </div>

        <div className="numberdiv">
            <div className="numberdivcon1">
                <h1>₹18L</h1>
                <p>Experienced Growth <br /> Hackers earn an average of <br /> ₹18 Lakhs per annum</p>
            </div>
            <div className="numberdivcon2">
                <h1>25000+</h1>
                <p>There are more than 25000 <br /> openings for the role of <br /> Growth Hackers</p>
            </div>
            <div className="numberdivcon3">
                <h1>4000+</h1>
                <p> There are more than 4000 <br /> remote opportunities for <br /> Growth Hacking</p>
            </div>
        </div>

        <div className="numberquote">
            <img src={pic} alt="" height='70px' width='70px' />
            <div className="quote">
                <h3>“Growth Hacker is the new VP of Marketing”</h3>
                <h3 id='auther'>-Andrew Chen</h3>
            </div>
        </div>

        <hr />
      
    </div>
  )
}
