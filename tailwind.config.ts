import containerQueries from '@tailwindcss/container-queries';
import plugin from 'tailwindcss/plugin';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				textColor: '#0f172a',
				darkBgColor: '#020617',
				disableColor: '#545454',
				darkDisableColor: '#abc2d3',
				darkBorderColor: '#334155',
				darkTextColor: '#D9EEFF',
				highlightColor: '#A576E3',
				highlightPrimary: '#04B5DD',
				borderColor: '#E9E9E9'
			}
		}
	},

	plugins: [
		typography,
		forms,
		containerQueries,
		plugin(function ({ addComponents }) {
			const custom = {
				'.smooth-scroll': {
					scrollBehavior: 'smooth'
				}
			};
			addComponents([custom]);
		})
	]
} satisfies Config;
