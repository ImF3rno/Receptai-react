import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import Video from "../video/Video"

function RecipeInfo() {
	let { id } = useParams();
	const [recipe, setRecipe] = useState([]);
	useEffect(() => {
		async function fetchAPI() {
			let response = await fetch(
				"https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
			);
			response = await response.json();
			setRecipe(response.meals[0]);
		}
		fetchAPI();
	}, [id]);
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	function makeIt() {
		const instructions = [];
		for (let i = 1; i < 21; i++) {
			if (recipe[`strIngredient${i}`] == "") {
				return instructions;
			}
			instructions.push(
				<li key={i}>{recipe[`strMeasure${i}`]} {recipe[`strIngredient${i}`]}</li>
			);
		}
		return instructions;
	}

	return (
		<>
			<Header/>
			<div className="container">
				<div className="row mb-3">
					<div className="col-12 col-lg-6 position-relative">
						<img src={recipe.strMealThumb} className="img-fluid" />
						<div className="card__info position-absolute w-100">
							<div className="d-flex video-btn">
								{recipe.strYoutube ? ( 
                                <span className="card__info__text" type="button" data-bs-toggle="modal" data-bs-target="#videoModal"> Watch Video Guide</span>
								):(
									<span>Video not available</span>
								)}
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<h2 className="mb-4">{recipe.strMeal}</h2>
						<h5>Ingredients:</h5>
						<ul>{makeIt()}</ul>
						<div>
							<strong>Origin:</strong> {recipe.strArea} <br /> <strong>Category:</strong> {recipe.strCategory}
						</div>
						<div></div>
					</div>
				</div>
				<h5>Instructions:</h5>
				<p>{recipe.strInstructions}{" "}
					<em>[Source: {recipe.strSource ? <a href={recipe.strSource}>{recipe.strSource}</a> : 'not available'}]</em>
				</p>
				<p><strong>Tags:</strong> {recipe.strTags || "none"}</p>
			</div>
			<Video title={recipe.strMeal} youtubeVideoId={recipe.strYoutube?.slice( recipe.strYoutube.indexOf("=") + 1)}/>
		</>
	);
}

export default RecipeInfo