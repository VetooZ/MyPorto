'use client'
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { InstagramLogo, GithubLogo, DiscordLogo } from "@phosphor-icons/react";


const HeroSection = () => {
    return (
        <div className="bg-white dark:bg-primary min-h-screen fixed inset-0 flex items-center justify-center">

            <div className="flex flex-col">
                <div className="flex flex-col mt-4 justify-center items-center text-primary dark:text-white">
                    <div className="font-semibold text-3xl lg:text-5xl text-primary dark:text-white">
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
                </div>
                <div className="flex items-center">
                    <Link href={"/about"} className="text-lg bg-gray dark:bg-white text-white dark:text-primary font-semibold rounded-full mt-5 px-3 py-1 mx-5 lg:mx-0  hover:bg-gray hover:text-white hover:shadow-lg hover:shadow-blue hover:ease-out hover:duration-300 active:bg-gray active:text-white active:ease-in-out active:duration-300 active:shadow-lg active:shadow-blue">More About Me</Link>
                </div>
                <div className="flex flex-col items-start mt-5 mx-7 lg:mx-0 text-primary dark:text-white">
                    <div className="flex justify-center items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-primary dark:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <h1 className=" font-bold text-xl">
                            Contact
                        </h1>

                    </div>
                    <span className="w-28 h-[2px] my-2 block bg-primary dark:bg-white"></span>
                    <div className="flex justify-center gap-3 mt-3">

                        <Link href={"https://instagram.com/vetozt__"} className="flex justify-center items-center bg-gray dark:bg-white text-white dark:text-primary rounded-xl p-2 hover:bg-gray hover:text-white hover:ease-in-out hover:duration-300 hover:shadow-lg hover:shadow-blue active:bg-gray active:text-white active:ease-in-out active:duration-300 active:shadow-lg active:shadow-blue">
                            <InstagramLogo size={25} />
                            Instagram
                        </Link>
                        <Link href={"https://github.com/VetooZ"} className="flex justify-center items-center bg-gray dark:bg-white text-white dark:text-primary rounded-xl p-2 hover:bg-gray hover:text-white hover:ease-in-out hover:duration-300 hover:shadow-lg hover:shadow-blue active:bg-gray active:text-white active:ease-in-out active:duration-300 active:shadow-lg active:shadow-blue">
                            <GithubLogo size={25} />
                            Github
                        </Link>
                        <Link href={"https://discord.com/users/659866807624007700"} className="flex justify-center items-center bg-gray dark:bg-white text-white dark:text-primary rounded-xl p-2 hover:bg-gray hover:text-white hover:ease-in-out hover:duration-300 hover:shadow-lg hover:shadow-blue active:bg-gray active:text-white active:ease-in-out active:duration-300 active:shadow-lg active:shadow-blue">
                            <DiscordLogo size={25} />
                            Discord
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection