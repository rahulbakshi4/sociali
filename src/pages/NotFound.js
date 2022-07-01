import { useNavigate } from "react-router-dom"
import { Navbar } from "../components"
export const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />

            <div className="App bg-light min-h-screen m-0">
                <div className="flex lg:max-w-7xl max-w-full mx-auto items-center justify-center gap-8 p-6 flex-col lg:flex-row md:flex-row h-screen">

                    <img src={`https://res.cloudinary.com/rahulb4/image/upload/v1653936153/sm-assests/Video_park_vrmwhz.svg`} className="lg:w-1/2 lg:h-auto md:w-3/5 w-3/5 h-2/5" alt="" />

                    <div className="border-2 bg-white border-gray-800 rounded-lg lg:w-1/2 p-8 shadow-3xl">
                        <h1 className="text-5xl">404</h1>
                        <p className="py-4 text-xl">Nothing to see here just Uncle Tom and Mr.Crow chiiling together and they don't like to be disturbed. </p>
                        <button className="btn" onClick={() => navigate('/')}>Back to Home</button>
                    </div>
                </div>
            </div>
        </>
    )
}
