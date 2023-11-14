import { Link } from "react-router-dom";
import { CounterContext } from "../Context/CounterContext";
import { useContext } from "react"
export function Contact() {
    const counter = useContext(CounterContext)
    return(
        <div>
            <h1 className="text-xl text-purple-700">Hello From Contact!!</h1>
            <Link to="/">Home</Link>
            <p>Counter: {counter}</p>
        </div>
    )
}