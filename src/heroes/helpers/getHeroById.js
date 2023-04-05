import { heroes } from '../data/heroes';

export const getHeroById = id => {
	return heroes.find(heroe => heroe.id === id);
};
