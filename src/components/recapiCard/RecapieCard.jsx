import './recapieCardStyles.scss';
import clock from '../images/clock.svg'
import user from '../images/user.svg'
import stat from '../images/stat.svg'

function RecipeCard({ src, time, serving, stats, name }) {
	return (
		<div className="card shadow">
			<div className=' position-relative'>
				<img src={src} className="card-img-top" alt="..." />
				<div className="card__info position-absolute w-100">
					<div className='d-flex'><img src={clock} alt='...' /> <span className='card__info__text'>{time} Mins</span></div>
					<div className='d-flex'><img src={user} alt='...' /> <span className='card__info__text'>{serving} Servings</span></div>
					<div className='d-flex'><img src={stat} alt='...' /> <span className='card__info__text'>{stats}</span></div>
				</div>
			</div>

			<div className="card-body">
				<p className="card-text">
					<span className='card__header'>{name}</span>
					<a href='/#' className='card__read-more'>View Recipe</a>
				</p>
			</div>
		</div>
	)
}

export default RecipeCard;