import { Link } from "react-router-dom";
import { CounterContext } from "../Context/CounterContext";
import { useContext } from "react"

export function About() {
  const counter = useContext(CounterContext)
    return(
       <div>
         <h1 className="text-xl text-red-950">Hello From About!!</h1>
         <Link to="/contact">Contact</Link>
         <p>Counter: {counter}</p>
       </div>
    )
}