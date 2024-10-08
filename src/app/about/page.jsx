'use client'
import { BackgroundBeamsWithCollision } from "@/components/Utilities/Background"
import { TextGenerateEffect } from "@/components/Utilities/TextGenerateEffect"
import { ReadCvLogo } from "@phosphor-icons/react"

const About = () => {

    return (
        <div className=" inset-0 relative">
            <BackgroundBeamsWithCollision>
                <div className="flex justify-center flex-col items-center text-white absolute inset-x-0 top-0 my-3">
                    <div className="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                        </svg>
                        <TextGenerateEffect words={"About Me"} />
                    </div>
                    <p className="text-sm text-gray bg-white px-3 py-1 rounded shadow-2xl shadow-blue">


                        A little about me
                    </p>
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