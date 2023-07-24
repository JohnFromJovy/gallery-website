import React from 'react';
import './about.css';
import timelineElements from './timelineElements';
// import { FaSchool, FaCamera, FaLaptop, FaLaptopCode } from 'react-icons/fa';
import { IoSchoolOutline } from 'react-icons/io5';
import { BsLaptop } from 'react-icons/bs';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
	const work = { background: '#06D6A0' };
	const education = { background: '#F9c74F' };

	return (
		<div className="about">
			<h3 className="title">Timeline</h3>
			<VerticalTimeline>
				{timelineElements.map((element) => {
					const isWorkIcon = element.icon === 'work';

					return (
						<VerticalTimelineElement
							key={element.key}
							className="Element"
							date={element.date}
							iconStyle={isWorkIcon ? work : education}
							icon={isWorkIcon ? <BsLaptop /> : <IoSchoolOutline />}>
							<h3 className="vertical-timeline-element-title">
								{element.title}
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								{element.employer} | {element.location}
							</h4>
							{element.descriptions.map((description) => (
								<p className="description">• {description}</p>
							))}
							{/* <p className="id">{element.description}</p> */}
						</VerticalTimelineElement>
					);
				})}
			</VerticalTimeline>
		</div>
	);
};

export default About;
