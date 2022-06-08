import { useState, useEffect } from 'react'

export const HeroImgContainer = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const nextImage = () => {
            count > 2 ? setCount(0) : setCount(count => count + 1)
        }
        let intervalID = setInterval(nextImage, 2000)
        return () => clearInterval(intervalID)
    })
    return (
        <div className="lg:w-1/2 hidden lg:block">
            <img src={`https://res.cloudinary.com/rahulb4/image/upload/v1653936153/sm-assests/hero-img-${count < 3 ? count : 0}.svg`} className="" alt="" />
        </div>
    )
}
