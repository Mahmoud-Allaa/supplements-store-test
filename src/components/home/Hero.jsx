

export default function Hero() {
    return (
        <header className="bg-[#D9D9D9] w-full flex flex-col md:flex-row justify-center gap-10 p-[24px] md:p-[70px] items-center">
            <div className="md:w-[50%] rounded h-[300px] bg-[#8D8D8D]"></div>
            <div className="flex flex-col gap-5 md:w-[50%] items-center md:items-start">
                <h3 className="bg-[#993737] text-[white] w-[fit-content] px-3 py-1 rounded skew-x-[-10deg]">Heading</h3>
                <h1 className="text-center md:text-left text-black text-[32px] md:text-[64px] md:leading-[4.5rem]">POWER <br /> YOUR <span className="text-[#993737]">WORKOUT</span></h1>
                <button className="bg-white border-0 rounded text-[#993737] px-4 py-2 w-[fit-content] font-[500] hover:drop-shadow-md hover:bg-[#993737] hover:text-white">Shop Now</button>
            </div>
        </header>
    )
}
