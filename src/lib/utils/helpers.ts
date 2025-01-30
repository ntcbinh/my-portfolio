import { iconSKills } from '$lib/constants/data';

export const getRandomFromMinMax = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomIcon = (currentIcon: (typeof iconSKills)[0]) => {
	const availableIcons = iconSKills.filter((icon) => icon !== currentIcon);
	return availableIcons[Math.floor(Math.random() * availableIcons.length)];
};
