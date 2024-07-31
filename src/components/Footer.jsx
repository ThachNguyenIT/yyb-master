import React from "react"

const Footer = () => {
    return (
        <div className="absolute bottom-[10px] w-full z-[9]">
            <div className="max-w-[1500px] mx-auto  py-[15px] px-[75px] rounded-[33px] bg-[#2C4B4D] flex justify-between items-center ">
                <p className="text-2xl font-normal leading-[28.8px] tracking-[0.04em] text-left text-[#fff]">
                    ©2024 YIN-YANG BUNNY.COPYRIGHT
                </p>
                <div className="flex justify-center items-center gap-x-5">
                    <div className="max-w-[80px] aspect-[1] rounded-full">
                        {" "}
                        <img
                            src="images/72077 1.svg"
                            alt=""
                        />
                    </div>

                    <div className="max-w-[80px] aspect-[1] rounded-full">
                        {" "}
                        <img
                            src="images/tele gram 1.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
