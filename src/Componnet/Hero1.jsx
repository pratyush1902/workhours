import React from 'react'
import logo from '../Images/logo.png'
 

function Hero1() {
    return (
        <>
            <div className="backimg">

            {/* <img src={green} alt="" /> */}
            </div>
        <div className='Hero'>
            <div className="Heroright">
                <img src={logo} alt="" height='60px' width='60px'/>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam officia illo, quis hic illum sed!</p>
                <button>Apply Now</button>
            </div>
            <div className="heroleft">
                <iframe width="500" height="310" src="https://www.youtube.com/embed/5tf4tK196yM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="heroleftdiv">
                    <span>Instructed by</span>
                    <h2>Veerander Chowdary</h2>
                    <h3>Founder - Workhours.in</h3>
                </div>

            </div>

            

        </div>
        <div className="herobottom">
            <div className="bottomleft">
                <h4>Application deadline</h4>
                <h1>7 Aug, 2023</h1>

            </div>
            <div className="bottomright">
                <h4>Cohort Starts On</h4>
                <h1>Sept 10th, 2023</h1>
            </div>
        </div>
        <div className="heroborder">
            <hr />
        </div>
        </>
    )
}


export default Hero1
