'use client'
import { TextGenerateEffect } from "@/components/Utilities/TextGenerateEffect"
import { GameController, Code  } from "@phosphor-icons/react"


const Hobby = () => {
    return (
        <div className="bg-white dark:bg-primary inset-0 h-screen">
            <div className="flex items-center justify-center relative">
                <div className="absolute flex items-center justify-center">
                    <GameController size={23} className="-translate-x-16 translate-y-2 text-primary dark:text-white" />
                    <Code size={23} className="translate-x-16 translate-y-3 text-primary dark:text-white"/>
                </div>
                    <TextGenerateEffect words={"My Hobby"} />
            </div>
            ada
        </div>
    )
}

export default Hobby