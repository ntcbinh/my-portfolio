import { env } from '$env/dynamic/public';
import Email from '$lib/svelte-icons/Email.svelte';
import Facebook from '$lib/svelte-icons/Facebook.svelte';
import GitHub from '$lib/svelte-icons/GitHub.svelte';
import LinkedIn from '$lib/svelte-icons/LinkedIn.svelte';

const classes = [
	'absolute -top-4 lg:top-[-100px] left-[100px] sm:left-[180px] lg:left-[100px]',
	'absolute top-0 lg:top-[-150px] sm:right-[150px] right-0 lg:right-[250px]',
	'absolute bottom-0 sm:bottom-[-70px] right-0 sm:right-[220px]',
	'absolute bottom-0 sm:bottom-[-100px] left-20 sm:left-[180px]',
	'absolute bottom-0 sm:bottom-[-150px] sm:left-[150px] right-0 sm:right-[250px]',
	'absolute bottom-0 sm:bottom-[-70px] right-0 sm:right-[220px]',
	'absolute bottom-12 sm:bottom-[-70px] right-2 sm:right-[220px]',
	'absolute bottom-5 sm:bottom-[-100px] right-20 sm:left-[180px]',
	'absolute bottom-10 sm:bottom-[-150px] sm:left-[150px] right-5 sm:right-[250px]',
	'absolute bottom-20 sm:bottom-[-70px] right-10 sm:right-[220px]'
];

export const iconSKills = [
	'smile',
	'robot',
	'js',
	'react',
	'ts',
	'svelte',
	'nest',
	'vue',
	'nuxt',
	'laravel'
].map((name, index) => ({
	src: `/images/${name}.gif`,
	name,
	class: classes[index],
	width: index === 1 ? 100 : 70,
	height: index === 1 ? 100 : 70
}));

export const iconContacts = [
	{
		icon: LinkedIn,
		href: env.PUBLIC_LINKEDIN_LINK
	},
	{
		icon: GitHub,
		href: env.PUBLIC_GITHUB_LINK
	},
	{
		icon: Email,
		href: `mailto:${env.PUBLIC_EMAIL_LINK}`
	},
	{
		icon: Facebook,
		href: env.PUBLIC_FACEBOOK_LINK
	}
];

export const PERSONAL_INFO = {
	NAME: 'Binh Nguyen',
	TITLE: 'Senior Software Engineer',
	LOCATION: 'Ho Chi Minh, Vietnam',
	EMAIL: 'ntcbinh16@gmail.com',
	PHONE: '+84 353 606 106',
	DESCRIPTION: `I'm Binh Nguyen, a Software Engineer with over six years of experience turning complex
			problems into elegant solutions. Coding isn't just my job - it's my passion. I thrive on
			crafting innovative, efficient, and meticulously designed software that makes a difference.`,
	NUM_OF_YEAR_EXPERIENCE: 6,
	TECH: {
		FE: 'React/Next・Vue/Nuxt・Svelte',
		BE: 'Node/Nest・Laravel'
	},
	ABOUT_ME: `My short-term goal is to continuously learn and adapt to new and emerging technologies. With a strong ambition, I strive to become a professional full-stack developer or a bridge engineer within the next two years while also broadening my expertise across various IT disciplines.<br/>
		My strength lies in precision and meticulous execution. While I may not have exceptional skills in any single area, my deep sense of responsibility and relentless effort drive me forward.<br/>
		I firmly believe that, with a combination of self-learning, specialized training, and mentorship, I can excel in my role and contribute meaningfully.`
};

export const hobbies = [
	{
		icon: '📷',
		title: 'Photography',
		description:
			'Capturing moments through the lens allows me to express creativity and appreciate the beauty in everyday life.'
	},
	{
		icon: '🌍',
		title: 'Traveling',
		description:
			'Exploring new places, meeting people, and immersing myself in different cultures fuel my curiosity and keep life exciting.'
	},
	{
		icon: '✍️',
		title: 'Creative Lettering',
		description:
			'I enjoy experimenting with artistic lettering and calligraphy, turning words into visually expressive art.'
	},
	{
		icon: '🪴',
		title: 'Succulent Gardening',
		description:
			'Growing and caring for succulents brings me a sense of tranquility and appreciation for nature’s resilience.'
	}
];

export const fulfillmentMessage =
	"But above all, I find the greatest fulfillment in helping others. Whether it's solving a technical challenge, offering guidance, or simply being there to listen, making a positive impact gives me a deep sense of purpose.";

export const educationDetails = [
	{
		dateRange: '9/2014 - 12/2018',
		title: 'Control Engineering and Automation',
		institution: 'Can Tho University',
		gpa: '2.92/4',
		gpaLabel: 'GPA:',
		gpaColor: 'white',
		dateClass: 'bg-highlightPrimary',
		titleClass: 'text-highlightPrimary',
		gpaClass: 'text-gray-400'
	},
	{
		dateRange: '7/2017',
		title: 'Japanese Language Proficiency Test N5',
		dateClass: 'bg-yellow-600',
		titleClass: 'text-yellow-600'
	},
	{
		dateRange: '12/2021',
		title: 'Japanese Language Proficiency Test N3',
		dateClass: 'bg-yellow-600',
		titleClass: 'text-yellow-600'
	}
];
