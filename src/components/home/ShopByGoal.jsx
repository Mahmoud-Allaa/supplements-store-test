'use client'
import { useState } from "react"


export default function ShopByGoal() {

    const [tab, setTab] = useState(0)
    const products = [
        1, 2, 3, 4, 5, 6, 7, 8,
        1, 2, 3, 4, 5, 6, 7, 8
    ]
    const tabs = ['Fat Loss', 'Gain Muscle', 'Get Energetic']

    return (
        <section className="p-[32px] md:p-[70px]">
            <h2 className="text-black font-[500] text-3xl text-center">SHOP BY <span className="text-[#993737]">GOAL</span></h2>
            <div className="flex flex-row gap-[16px] justify-center my-[32px] font-[500]">
                {tabs.map((t, i) => (
                    <button onClick={() => setTab(i)} className={`px-[8px] md:px-3 py-1 ${i == tab ? 'bg-[#993737] text-white' : 'bg-[lightgray]'} rounded skew-x-[-9deg]`}>{t}</button>
                ))}
            </div>
            <div className="slider w-[full] overflow-auto pb-5">
                <div className="flex flex-row gap-[10px] md:gap-[24px] w-[fit-content]">
                    {products.map((p, i) => (
                        <div className="w-[150px] h-[160px] md:w-[250px] md:h-[250px] bg-[#D9D9D9] rounded" />
                    ))}
                </div>
            </div>
        </section>
    )
}
