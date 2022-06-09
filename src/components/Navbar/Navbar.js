import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { useSelector } from "react-redux"
export const Navbar = () => {
    const navigate = useNavigate()
    const { user } = useSelector((store) => store.auth)
    return (
        <div className="fixed z-10 h-max w-full lg:top-0 md:top-0 bottom-0 ">
            <div className="bg-gray-50 border-b-2 border-b-slate-800">
                <nav className="lg:flex md:flex hidden mx-auto  max-w-5xl items-baseline justify-between px-8 ">
                    <h2 className="text-4xl hidden lg:block md:block font-bold italic"><Link to="/feed" className="">sociali.</Link></h2>
                    <ul className="lg:flex md:flex hidden list-none gap-4 pl-0 m-0">
                        <li className="lg:flex md:flex hidden p-2 gap-5 rounded-md w-full">
                            <span className="material-icons-round">home</span>
                            <span className="material-icons">bookmark</span>
                            <span className="material-icons">explore</span>
                            <img onClick={() => navigate(`/profile/${user?.username}`, { replace: true, state: { _id: user?._id } })}
                                className="rounded-full w-8 h-8 cursor-pointer" src={user?.avatarUrl} alt="user avatar" />
                        </li>
                    </ul>
                </nav>
                <nav className="lg:hidden border-t-2 border-t-slate-800 md:hidden flex mx-auto  max-w-6xl items-baseline justify-between pt-4 px-8 pb-4" >
                    <span className="material-icons-round">home</span>
                    <span className="material-icons">bookmark</span>
                    <span className="material-icons">explore</span>

                    <img onClick={() => navigate(`/profile/${user?.username}`, { replace: true, state: { _id: user._id } })}
                        className="rounded-full w-8 h-8 cursor-pointer" src={user?.avatarUrl} alt="user avatar" />
                </nav>

            </div>
        </div>
    )
}
