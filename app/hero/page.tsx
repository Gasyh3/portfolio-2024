import React from 'react'
import Logo3D from '@/components/Logo3D'
import Legend from '@/components/Legend'
import Footer from '@/components/Footer'

function Hero() {
    return (
        <div className="w-screen h-[100vh] flex justify-center flex-col">
            <Logo3D />
            <Legend />
            <Footer />
        </div>
    )
}

export default Hero