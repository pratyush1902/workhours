import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline1() {
  return (
    <div>
        <div className="timelineHead">
            <h1>Program Overview</h1>
        </div>
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{    }}
    contentArrowStyle={{ borderRight: '7px solid  #bcd330' }}
    date="1st week"
    iconStyle={{ background: '#bcd330', color: '#bcd330' }}
   
  >
    <h3 className="vertical-timeline-element-title">Week 1</h3>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2nd Week"
    // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    iconStyle={{ background: '#bcd330', color: '#bcd330' }}
     
  >
    <h3 className="vertical-timeline-element-title">Week 2nd</h3>
     
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="3rd Week"
    iconStyle={{ background: '#bcd330', color: '#bcd330' }}
     
  >
    <h3 className="vertical-timeline-element-title">Week3</h3>
     
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="4th Week"
    iconStyle={{ background: '#bcd330', color: '#bcd330' }}
    
  >
    <h3 className="vertical-timeline-element-title">Week 4</h3>
     
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date=" 5th Week "
    iconStyle={{ background: '#bcd330', color: '#bcd330' }}
    
  >
    <h3 className="vertical-timeline-element-title"> Week 5</h3>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date=" 6th Week"
    iconStyle={{ background: '#bcd330', color: '#bcd330' }}
     
  >
    <h3 className="vertical-timeline-element-title">Week 6</h3>
     
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="7th Week"
    iconStyle={{ background: '#bcd330', color: '#bcd330' }}
    
  >
    <h3 className="vertical-timeline-element-title">Week 7</h3>
     
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    iconStyle={{ background: '#bcd330', color: '#bcd330' }}
     
  /> */}
</VerticalTimeline>
 <hr />
      
    </div>
  )
}
