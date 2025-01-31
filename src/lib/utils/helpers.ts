import { iconSKills } from '$lib/constants/data';

export const getRandomFromMinMax = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomIcon = (currentIcon: (typeof iconSKills)[0]) => {
	const availableIcons = iconSKills.filter((icon) => icon !== currentIcon);
	return availableIcons[Math.floor(Math.random() * availableIcons.length)];
};

export function getSpeedDialPosition(index: number, actions: unknown[]) {
	const startAngle = 180;
	const sweepAngle = -90;
	const angle = startAngle - (index * sweepAngle) / (actions.length - 1);
	const radian = (angle * Math.PI) / 180;
	const radius = 160;
	const x = Math.cos(radian) * radius;
	const y = Math.sin(radian) * radius;
	return { x, y };
}
