"use client"

import Link from "next/link"
import { BackgroundBeamsWithCollision } from "@/components/Utilities/Background"

const Page = () => {
    return (
        <div className="fixed inset-0">

            <BackgroundBeamsWithCollision>

                <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-4">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>

                        <h3 className="text-white text-3xl font-bold">NOT FOUND</h3>
                        <Link href="/" className="text-primary bg-white text-xl text-semibold px-3 py-1 rounded-full active:shadow-xl active:shadow-blue hover:shadow-xl hover:shadow-blue">Back</Link>
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    )
}

export default Page