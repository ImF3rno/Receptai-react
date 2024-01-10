import Header from "../header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeInfo from "../recipeInfo/RecipeInfo";
import Main from "../main/Main"


const App=()=>{
  return (
    <>
    	<Router>
				<Routes>
					<Route path="/" element={<Main />}>
						<Route path="/category/:id" element={<Header />} />
					</Route>
					<Route path="/recipe/:id" element={<RecipeInfo />} />
				</Routes>
			</Router>
    </>
  )
}

export default App
