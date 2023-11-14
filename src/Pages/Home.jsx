import { Link } from "react-router-dom"
import { CounterContext } from "../Context/CounterContext"
import { useContext } from "react"

export function Home() {
    const counter = useContext(CounterContext)

    return(
        <div>
            <h1 className="text-xl text-indigo-500">Hello!!</h1>
            <Link to="/about">ABOUT</Link>
            <p>Counter: {counter}</p>
        </div>
    )
}