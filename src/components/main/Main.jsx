import './mainStyle.scss';
import { useParams } from "react-router-dom";
import  Recipes  from '../recapes/Recapies';
import Header from '../header/Header';
import Landing from '../lading/Landing';
import  Search  from '../search/Search';

const Main=()=>{
    let {id}=useParams();
    return(
        <>
            <Header/>
            {!id&&<Landing/>}
            <Search/>
            <Recipes/>
        </>
    )
}

export default Main;