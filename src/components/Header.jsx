import React from "react"

const Header = () => {
    return (
        <div className="fixed top-[20px] w-full z-[99]">
            <div className="max-w-[1500px] mx-auto px-[15px] py-2 flex justify-between items-center backdrop-blur-[50px] bg-transparent rounded-3xl ">
                <div className="flex justify-center items-center gap-x-8 ">
                    <img
                        className="max-w-[175px]"
                        src="images/yin yang logo 2 1.svg"
                        alt=""
                    />
                    <div className="flex justify-center items-center gap-8">
                        <h2 className="headerItem hover:text-[#ff4d00]">HOME</h2>
                        <h2 className="headerItem hover:text-[#ff4d00]">BUNNY GAME </h2>
                        <h2 className="headerItem hover:text-[#ff4d00]"> WHITE PAPER</h2>
                    </div>
                </div>

                <button className="py-[17px] px-[43px] rounded-full text-white bg-[#ff7562] border-solid border-[2px] border-[#fff] hover:shadow-[0px_0px_100px_5px_#ff4d00]  ">
                    PLAY FOR FREE
                </button>
            </div>
        </div>
    )
}

export default Header
