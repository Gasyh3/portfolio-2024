import React from 'react'
import Logo3D from '@/components/Logo3D'

function Hero() {
    return (
        <div className="w-screen h-[90vh] flex justify-center flex-col">
            <Logo3D />
            <h1 className="text-white mx-auto text-4xl hover:filter hover:drop-shadow-[0_0_0.5em_#0FE4A4]">Développeur Web Fullstack</h1>
        </div>
    )
}

export default Hero