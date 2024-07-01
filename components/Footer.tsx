import React from 'react'

function Footer() {
    return (
        <div className="flex justify-between items-center pl-6 pr-10 h-20">
            <a href="/" target="_blank">
                <img src="/kevin.svg" className="w-28 h-12 hover:filter hover:drop-shadow-[0_0_0.5em_#0FE4A4]" alt="kevin logo" />
            </a>
            <nav className="flex justify-between items-center w-1/5 h-full">
                <a href="https://github.com/Gasyh3" target="_blank">
                    <img src="/github.svg" className="w-12 h-12 hover:filter hover:drop-shadow-[0_0_0.5em_#0FE4A4] github" alt="github logo" />
                </a>
                <a href="https://twitter.com/RakotoKev14" target="_blank">
                    <img src="/twitter.svg" className="w-12 h-12 hover:filter hover:drop-shadow-[0_0_0.5em_#0FE4A4] twitter" alt="twitter logo" />
                </a>
                <a href="https://www.linkedin.com/in/rakoto-kevin/" target="_blank">
                    <img src="linkedin.svg" className="w-12 h-12 hover:filter hover:drop-shadow-[0_0_0.5em_#0FE4A4] linkedin" alt="linkedin logo" />
                </a>
            </nav>
        </div>
    )
}

export default Footer