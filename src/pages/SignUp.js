import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../features/auth/authSlice'
import { HeroImgContainer } from '../components'
export const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "", username: "", email: "", password: "", confirmPassword: ""
    })
    const { password, confirmPassword } = formData
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token } = useSelector((state) => state.auth)
    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error('Passwords didn\'t not match')
        }
        else if (token && password === confirmPassword) {
            dispatch(signUp(formData))
            toast.success('Signed Up Successfully!', { duration: 1500, position: 'bottom-center' });
            navigate('/')
        }
        else {
            toast.error('Something Went Wrong!', { duration: 1500, position: 'bottom-center' })
        }
    }
    const onChangeHandler = (e) => {
        setFormData((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }
    return (
        <div className="App bg-light min-h-screen m-0">
            <div className="flex lg:max-w-7xl max-w-full  mx-auto items-center justify-center gap-8 p-6 flex-col lg:flex-row h-screen">
                <HeroImgContainer />
                <div className="lg:w-1/2 border-black border-solid  border-2 rounded-xl p-8 bg-white  shadow-3xl">
                    <div className="py-4">
                        <h2 className="text-3xl">Put your story out there with <span className="text-5xl font-bold italic">sociali</span></h2>
                        <h3 className="text-center text-xl font-semibold mt-4"> Sign Up Here</h3>
                    </div>

                    <form onSubmit={submitHandler} className=" h-full">
                        <div className="flex justify-center mt-4">
                            <div className="lg:w-3/5 md:w-9/12 w-full">
                                <label
                                    className="block uppercase tracking-wide   text-xs font-bold mb-2"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter Your Name"
                                    className="bg-white appearance-none border-2  rounded w-full py-2 px-4
                                     text-gray-900 leading-tight focus:outline-none focus:bg-white 
                                     focus:border-gray-500 drop-shadow-sm"
                                    onChange={onChangeHandler}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-center  mt-4">
                            <div className="lg:w-3/5 md:w-9/12 w-full">
                                <label
                                    className="block uppercase tracking-wide  text-xs font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='johnwayy@gmail.com'
                                    onChange={onChangeHandler}
                                    className="bg-white appearance-none border-2 rounded w-full 
                                    py-2 px-4 text-gray-900 leading-tight focus:outline-none 
                                    focus:bg-white focus:border-gray-500 drop-shadow-sm"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-center  mt-4">
                            <div className="lg:w-3/5 md:w-9/12 w-full">
                                <label
                                    className="block uppercase tracking-wide  text-xs font-bold mb-2"
                                    htmlFor="username"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder='jwayy'
                                    onChange={onChangeHandler}
                                    className="bg-white appearance-none border-2 rounded w-full 
                                    py-2 px-4 text-gray-900 leading-tight focus:outline-none 
                                    focus:bg-white focus:border-gray-500 drop-shadow-sm"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-4">
                            <div className="lg:w-3/5 md:w-9/12 w-full">
                                <label
                                    className="block uppercase tracking-wide text-xs font-bold mb-2"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="*********"
                                    onChange={onChangeHandler}
                                    className="bg-white appearance-none border-2 rounded w-full 
                                    py-2 px-4 text-gray-900 leading-tight focus:outline-none 
                                    focus:bg-white focus:border-gray-500 drop-shadow-sm"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex justify-center mt-4">
                            <div className="lg:w-3/5 md:w-9/12 w-full">
                                <label
                                    className="block uppercase tracking-wide  text-xs font-bold mb-2"
                                    htmlFor="password"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="password"
                                    placeholder="*********"
                                    className="bg-white appearance-none border-2  rounded w-full 
                                    py-2 px-4 text-gray-900 leading-tight focus:outline-none 
                                    focus:bg-white focus:border-gray-500 drop-shadow-sm"
                                    onChange={onChangeHandler} required
                                />
                            </div>
                        </div>

                        <div className="mt-4 justify-center flex ">
                            <button
                                type="submit"
                                className="group w-full lg:w-3/5 md:w-9/12  py-2 px-4  border-2 border-black 
                                text-sm leading-5 font-medium rounded-md text-white bg-black hover:bg-white 
                                hover:text-black hover:shadow-btn  focus:outline-none focus:border-gray-500 
                                 active:shadow-none active:outline-none
                                 transition-all duration-300 ease-in-out"
                            >
                                Sign Up
                            </button>
                        </div>

                        <p className="text-center mt-10 text- ">Already have an account? <span onClick={() => navigate('/')} className="cursor-pointer underline">Log In Here</span></p>
                    </form>
                </div>
            </div>

        </div>
    )
}
