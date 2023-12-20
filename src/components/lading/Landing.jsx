import './landingStyle.scss';
import logo from '../images/Landing_image.png'

const Landing=()=>{
    return(
        <div className="container">
            <div className="landing">
                <div className="container-left">
                    <h2 className='landing-header'>Cooking Made Fun and Easy: Unleash Your Inner Chef</h2>
                    <p className='landing-text'>Discover more than <span style={{color:"#F79F1A"}}>10,000 recipes</span> in your hand with the best recipe. Help you to find the easiest way to cook.</p>
                    <button className='explore-button'><span className='explore-button-text'>Explore Recipes</span></button>
                </div>
                <div className="container-right">
                    <img src={logo} alt="Landing logo" className='Logo'/>
                </div>
            </div>
        </div>
    )
}

export default Landing;