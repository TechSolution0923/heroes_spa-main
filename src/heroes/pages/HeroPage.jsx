import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	//El useMemo para memorizar valores y el useCallback para memorizar funciones
	const hero = useMemo(() => getHeroById(id), [id]);
	if (!hero) {
		return <Navigate to='/marvel' />;
	}
	const onNavigateBack = () => {
		navigate(-1);
	};
	return (
		<div className='row mt-5'>
			<div className='col-4 animate__animated animate__fadeInLeft'>
				<img
					src={`/assets/heroes/${id}.jpg`}
					alt={hero.superhero}
					className='img-thumbnail'
				/>
			</div>
			<div className='col-8'>
				<h3>{hero.superhero}</h3>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<b>Alter ego: </b>
						{hero.alter_ego}
					</li>
					<li className='list-group-item'>
						<b>Publisher: </b>
						{hero.publisher}
					</li>
					<li className='list-group-item'>
						<b>First Appearance: </b>
						{hero.first_appearance}
					</li>
				</ul>
				<h5 className='mt-3'>Characters</h5>
				<p>{hero.characters}</p>
				<button onClick={onNavigateBack} className='btn btn-outline-primary'>
					Back
				</button>
			</div>
		</div>
	);
};
