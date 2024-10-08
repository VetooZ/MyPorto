import { BackgroundBeamsWithCollision } from "@/components/Utilities/Background"

const Loading = () => {
    return (
        <BackgroundBeamsWithCollision>

            <div className="flex justify-center items-center min-h-screen">
                <div className="flex justify-center items-center loading"></div>
            </div>
        </BackgroundBeamsWithCollision>
    )
}

export default Loading