import { Link } from "react-router-dom"

export function Home() {
    return(
        <div>
            <h1 className="text-xl text-indigo-500">Hello!!</h1>
            <Link to="/about">ABOUT</Link>
        </div>
    )
}