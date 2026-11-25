import { Link } from "react-router-dom";

function Navbar(){
return(
    <div className="flex justify-evenly p-5">
        <h1 className="text-3xl font-bold">Student App</h1>
        <div className="flex justify-evenly gap-5">
        <Link to="/" className="bg-black text-white rounded-lg px-5 py-2">Students List</Link>
        <Link to="/favourites" className="bg-black text-white rounded-lg px-5 py-2">Favourite Students</Link>
         </div>
    </div>
)
}

export default Navbar