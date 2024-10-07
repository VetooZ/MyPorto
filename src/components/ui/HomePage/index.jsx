'use client'
import Typewriter from "typewriter-effect";
import Image from "next/image";
import react from "react";
import { BackgroundBeamsWithCollision } from "@/components/Utilities/Background";
import Link from "next/link";


const HeroSection = () => {
    return (
        <div className="fixed inset-0">

            <BackgroundBeamsWithCollision>
                <div className="flex flex-col my-4 justify-center items-center text-white">
                    <div className="font-semibold text-3xl lg:text-5xl">
                        <Typewriter
                            options={{
                                strings: ['Hello', 'Welcome To My Website'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className="my-4 text-lg text-center lg:text-wrap lg:text-xl">
                        I'm Veto, I'm a web developer who is still learning and developing skills in building attractive websites
                    </div>
                    <Link href={"/"} className="text-xl bg-white text-primary font-semibold rounded-full mt-10 p-1 hover:shadow-xl hover:shadow-blue hover:transition hover:ease-out hover:duration-500 active:shadow-xl active:shadow-blue">About Me</Link>
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    )
}

export default HeroSection