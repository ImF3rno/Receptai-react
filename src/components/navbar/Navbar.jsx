import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import './navBarStyle.scss';
import { CiSearch } from "react-icons/ci";
import { MdOutlinePerson2 } from "react-icons/md";
import { FaPlateWheat } from "react-icons/fa6";

const TopNav=()=>{
  const menuData = [
    {
      patch:'/',
      name:"Home"
    },
    {
      patch:'/recipite',
      name:"Recipite"
    },
    {
      patch:'/community',
      name:"Community"
    },
    {
      patch:'/about',
      name:"About us"
    },
  ];
  return(
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand" style={{color:"#046E1B"}}><span className="logo"><FaPlateWheat/></span>Reacipedia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
              menuData.map((item)=>(
                <NavLink to={item.patch} key={item.name}>
                  <div className="list_item">{item.name}</div>
                </NavLink>
              ))
            }
          </Nav>
          <Nav className="ms-auto">
          <CiSearch />
          <MdOutlinePerson2 />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNav;