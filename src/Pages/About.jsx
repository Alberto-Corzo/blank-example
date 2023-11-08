import { Link } from "react-router-dom";

export function About() {
    return(
       <div>
         <h1 className="text-xl text-red-950">Hello From About!!</h1>
         <Link to="/contact">Contact</Link>
       </div>
    )
}