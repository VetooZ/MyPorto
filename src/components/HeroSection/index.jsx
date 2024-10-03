'use client'
import Typewriter from "typewriter-effect";
import Image from "next/image";


const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 mt-10">
                <div className="col-span-7 place-self-center">
                    <h1 className="mb-4 text-4xl lg:text-5xl font-semibold">
                        <Typewriter
                            options={{
                                strings: ['Halloo', `Selamat Datang Di`, ' Web Portfolio Saya'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </div>
                <div className="flex items-center justify-items-center col-span-8 place-self-center lg:place-self-start lg:mx-40">
                    <p className="text-lg lg:text-xl">Halo Saya Veto, saya adalah web developer yang masih belajar dan mengembangkan keahlian dalam membangun website yang menarik</p>
                </div>
            </div>
        </section>
    )
}

export default HeroSection