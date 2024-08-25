// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	{
		id: 1,
		title: 'Pie Meet',
		category: 'Mobile Application',
		description: 'PieMeet is a secure and HD video conferencing app without Ads',
		img: MobileImage1,
		link: 'https://apkpure.net/pie-meet-video-calling-app/com.purpledroppie.piemeet'
	},
	{
		id: 2,
		title: 'WhatsApp status saver',
		category: 'Mobile Application',
		description: 'WhatsApp status saver is a free app which helps user to save all the photos and videos of whatsapp status.',
		img: MobileImage2,
		link: 'https://play.google.com/store/apps/details?id=com.purpledroppie.status'
	},
	{
		id: 3,
		title: 'Pack and Go',
		category: 'UI/UX Design',
		description: 'Pack and Go is platform where users can book travels for their journey. And agencies can register their travels.',
		img: WebImage2,
	},
	{
		id: 4,
		title: 'Platform for learning from disasters',
		description: 'A platform which collects the data from past disasters and predicts upcoming disasters, And used to spread awareness.',
		category: 'UI/UX Design',
		img: UIImage2,
	},
	{
		id: 5,
		title: 'Pay and Park',
		category: 'Mobile Application',
		description: 'A platform to automate the process of pay and pack services with online payment.',
		img: WebImage1,
	},
];
