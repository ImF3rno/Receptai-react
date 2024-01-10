import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import './navBarStyle.scss';
import { CiSearch } from "react-icons/ci";
import { MdOutlinePerson2 } from "react-icons/md";
import { FaPlateWheat } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function TopNav(){
  const [categories, setCategories] = useState([])
	useEffect(() => {
		async function fetchAPI() {
			let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
			response = await response.json()
			setCategories(response.categories)
		}

		fetchAPI()
	}, [])
  return (
		<nav>
			<header className="navbar navbar-expand-lg container d-flex justify-content-between header mt-3 px-2">
      <span className="logo"><FaPlateWheat/></span>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav list-reset d-md-flex">
						<li className="nav-item">
							<Link to="/">Home</Link>
						</li>
						<li className="nav-item dropdown">
							<a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Categories
							</a>
							<ul className="dropdown-menu">
								{categories.map(category => 
                <li key={category.idCategory}><Link className="dropdown-item" to={`/category/${category.strCategory}`}>
                  {category.strCategory}</Link>
                </li>)}
							</ul>
						</li>
						<li className="nav-item">
							<a href="/#">Community</a>
						</li>
						<li className="nav-item">
							<a href="/#">About Us</a>
						</li>
						<li className="nav-item">
							<div className="d-flex gap-3">
								<CiSearch/>
								<MdOutlinePerson2 />
							</div>
						</li>
					</ul>
				</div>
			</header>
		</nav>
	);
}
export default TopNav;