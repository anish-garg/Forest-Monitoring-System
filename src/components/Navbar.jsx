import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex text-lg justify-center items-center gap-20 bg-white w-auto h-14 z-0">
      <NavLink to = "/" className="flex flex-col justify-center items-center bg-green-600 text-white h-24 w-20 z-10 text-xl font-bold">
      <div className="text-green-900 mt-3" >Forest</div>
      <div >Sight</div>
      </NavLink>
      <NavLink to = "/map">Map</NavLink>
      <NavLink to = "/dashboard">Dashboard</NavLink>
      <div>Newsletter</div>
      <div>About</div>
    </div>
  )
}

export default Navbar
