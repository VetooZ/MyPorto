'use client'
import { BackgroundBeamsWithCollision } from "@/components/Utilities/Background"
import { TextGenerateEffect } from "@/components/Utilities/TextGenerateEffect"
import { ReadCvLogo } from "@phosphor-icons/react"

const About = () => {
    return (
        <div className=" inset-0 relative">
            <BackgroundBeamsWithCollision>
                <div className="flex justify-center flex-col items-center text-white absolute inset-x-0 top-0 my-3">
                        <TextGenerateEffect words={"About Me"} />
                        <p className="text-xs text-gray bg-white p-1 rounded shadow-2xl shadow-blue">A little about me</p>
                    <div className="flex flex-col mx-10 md:mx-60 ">

                        <p className="broder-2 text-white text-warp mt-5">hi, my name is veto, i was born on may 7 2007 in Medan</p>
                        <p className="broder-2 text-white text-warp mt-3">I started programming during Covid or 2020, I learned Lua to cheat in the game Growtopia but now I have repented</p>
                        <p className="broder-2 text-white text-warp mt-3">As time went by I started to learn about how to create a website using HTML, CSS and Javascript. After I started to understand about creating websites, I started using other technologies to create websites such as Nextjs, React and TailWindcss. Even though there are many things that are difficult for me to understand, I still try to learn them little by little</p>
                        <p className="broder-2 text-white text-warp mt-3">After that, now I am very interested in programming languages ​​and want to learn more, solve problems, and improve my skills in this field.</p>
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    )
}

export default About