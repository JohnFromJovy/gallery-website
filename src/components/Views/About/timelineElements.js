import { IoSchoolOutline, IoCameraOutline } from 'react-icons/io5';
import { BsLaptop } from 'react-icons/bs';

const iconStyleBackground = [
	{ backgroundColorName: 'photography', backgroundColor: '#16a085' },
	{ backgroundColorName: 'it', backgroundColor: '#e67e22' },
	{ backgroundColorName: 'education', backgroundColor: '#f9c74f' },
];

const timelineElements = [
	{
		id: 1,
		title: 'Professional Photographer | Cinematographer',
		employer: 'In A Maze Studio',
		location: 'Sydney',
		descriptions: [
			'Conducting on-location photography | filming of over 300 wedding events and producing bridal portraits.',
			'Performing photo editing and other post-production activities, to enhance picture quality.',
			'Maintaining wedding photographs archives.',
			'Handling and maintaining inventory of all photographic supplies, as required.',
		],
		date: 'Sep 2018 - Current',
		icon: <IoCameraOutline />,
		iconStyle: { background: iconStyleBackground[0].backgroundColor },
	},
	{
		id: 2,
		title: 'Photographer | Cinematographer',
		employer: 'AusChannel Pty Ltd',
		location: 'Sydney',
		descriptions: [
			"Developed commercials for renowned brands like Bubs, Bellamy's Organic, Bayer, and Cemoy.",
			'Contributed to live streaming sales events, such as those promoting Penfolds wine, represented by Jessica Rudd, and a collaboration between Woolworths and Tmall.',
			'Collaborated with NetEase\'s Koala platform, overseeing multi-nation filming for their CEO\'s documentary, "Koala travels the world", which received over a million views.',
		],
		date: 'Jan 2014 - June 2018',
		icon: <IoCameraOutline />,
		iconStyle: { background: iconStyleBackground[0].backgroundColor },
	},
	{
		id: 3,
		title: 'IT Support',
		employer: 'New Fields Education',
		location: 'Sydney',
		descriptions: [
			'Installing and configuring computer hardware operating systems and applications.',
			'Monitoring and maintaining computer systems and networks.',
			'Troubleshooting system and network problems and diagnosing and solving hardware/software faults.',
			'Providing staff IT trainings.',
			'Designing and creating new E-newsletters for company.',
		],
		date: 'Jan 2012 - Jun 2013',
		icon: <BsLaptop />,
		iconStyle: { background: iconStyleBackground[1].backgroundColor },
	},
	{
		id: 4,
		title: 'Intern IT Support',
		employer: "St Andrew's Catholic School",
		location: 'Sydney',
		descriptions: [
			'Administration/Configuration of SharePoint Farm.',
			'Administration/Configuration of SharePoint site collections.',
			'Responsible for WSS configuration, shared services, policies, procedures, and SharePoint configuration.',
			'Account management by administration/configuration of Active Directory',
		],
		date: 'Apr 2011 - Jun 2011',
		icon: <BsLaptop />,
		iconStyle: { background: iconStyleBackground[1].backgroundColor },
	},
	{
		id: 5,
		title: 'Professional Year',
		employer: 'Pathway Australia',
		location: 'Sydney',
		descriptions: [],
		date: 'Feb 2009 - Dec 2010',
		icon: <IoSchoolOutline />,
		iconStyle: { background: iconStyleBackground[2].backgroundColor },
	},
	{
		id: 6,
		title: 'Master of Computer Science',
		employer: 'University of Wollongong',
		location: 'Wollongong',
		descriptions: [
			'Majored in Network Security and ICT Management',
			['High Distinction in Multimedia Study'],
		],
		date: 'Feb 2009 - Dec 2010',
		icon: <IoSchoolOutline />,
		iconStyle: { background: iconStyleBackground[2].backgroundColor },
	},
];

export default timelineElements;
