import React from 'react';
import './about.css';
import timelineElements from './timelineElements';

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
	return (
		<div className="about">
			<h3 className="title">Timeline</h3>
			<VerticalTimeline>
				{timelineElements.map((element) => {
					return (
						<VerticalTimelineElement
							key={element.key}
							className="Element"
							date={element.date}
							iconStyle={element.iconStyle}
							icon={element.icon}>
							<h3 className="vertical-timeline-element-title">
								{element.title}
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								{element.employer} | {element.location}
							</h4>
							{element.descriptions.map((description) => (
								<p className="description">• {description}</p>
							))}
						</VerticalTimelineElement>
					);
				})}
			</VerticalTimeline>
		</div>
	);
};

export default About;
