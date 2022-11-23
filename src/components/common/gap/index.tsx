import React from "react";

type PrivateProps = {
    price:String
    percentage:String
}

export default function Gap ({price,percentage}:PrivateProps) {
    return (
        <>
            <div className="w-[280px] h-[70px] rounded-2xl bg-orange-100 mt-6 flex">
                <div className="mt-2 ml-5">
                    <p className="text-zinc-400">
                        Identified Need Gap
                    </p>
                    <p className="text-orange-600 font-bold">
                        {price}
                    </p>
                </div>
                <div className="mt-2 ml-10 w-[50px] h-[50px] rounded-3xl border-solid border-4 border-orange-400">
                    <p className="pl-2 pt-2">
                        {percentage}
                    </p>
                </div>
            </div>
        </>
    )
}