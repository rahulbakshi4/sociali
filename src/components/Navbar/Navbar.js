import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
export const Navbar = () => {

    return (
        <nav className="flex mx-auto max-w-6xl items-baseline justify-between pt-4 px-8 pb-2 ">
            <h2 className="text-4xl font-bold italic"><Link to="/" className="">sociali.</Link></h2>
            <ul className="flex list-none gap-4 pl-0 m-0">
                <li className="flex p-2 gap-5 rounded-md">
                    <span className="material-icons-round">home</span>
                    <span className="material-icons">bookmark</span>
                    <span className="material-icons">favorite</span>
                    <img className="rounded-full w-8 h-8" src="https://res.cloudinary.com/rahulb4/image/upload/v1643855031/peep_rssuj0.png" alt="user avatar" />
                </li>
            </ul>
        </nav>
    )
}
