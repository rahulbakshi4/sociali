import { NavLink, Link, useNavigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../features/users/usersSlice"
import { ExploreIcon, HomeIcon } from "../SVG/svg"
export const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((store) => store.auth)
    const { allUsers } = useSelector((store) => store.users)
    const currUser = allUsers?.find((user) => user._id === user?._id)
    return (
        <div className="fixed z-10 h-max w-full lg:top-0 md:top-0 bottom-0 ">
            <div className="bg-gray-50 border-b-2 border-b-slate-800">
                <nav className="lg:flex md:flex hidden mx-auto  max-w-5xl items-center justify-between px-8 ">
                    <h2 className="text-4xl hidden lg:block md:block font-bold italic"><Link to="/feed" className="">sociali.</Link></h2>
                    <ul className="lg:flex md:flex hidden list-none gap-4 pl-0 m-0">
                        <li className="lg:flex md:flex hidden p-2 gap-4 rounded-md w-full items-center">
                            <NavLink to='/feed' className={({ isActive }) => isActive ? "p-2 rounded-full bg-light" : "p-2 rounded-full"}>
                                <HomeIcon />
                            </NavLink>

                            <NavLink to='/explore' className={({ isActive }) => isActive ? "p-2 rounded-full bg-light" : "p-2 rounded-full"}>
                                <ExploreIcon />
                            </NavLink>

                            <img onClick={() => navigate(`/profile/${user?.username}`, { replace: true, state: { _id: user?._id } })}
                                className={`rounded-full w-8 h-8 cursor-pointer ${user === undefined && "hidden"}`} src={currUser?.avatarUrl || user.avatarUrl} alt="user avatar" />
                        </li>
                    </ul>
                </nav>
                <nav className="lg:hidden border-t-2 border-t-slate-800 md:hidden flex mx-auto  max-w-6xl items-center justify-between py-1 px-8" >
                    <NavLink to='/feed' className={({ isActive }) => isActive ? "p-2 rounded-full bg-light" : "p-2 rounded-full"}>
                        <HomeIcon size={22} />
                    </NavLink>

                    <NavLink to='/explore' className={({ isActive }) => isActive ? "p-2 rounded-full bg-light" : "p-2 rounded-full"}>
                        <ExploreIcon size={22} />
                    </NavLink>

                    <img onClick={() => { dispatch(getUser(user._id)); navigate(`/profile/${user?.username}`, { replace: true, state: { _id: user._id } }) }}
                        className={`rounded-full w-6 h-6 cursor-pointer ${user === undefined && "hidden"}`} src={currUser?.avatarUrl || user.avatarUrl} alt="user avatar" />
                </nav>

            </div>
        </div>
    )
}
