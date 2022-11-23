import React from "react";
import img from "../../../assets/Picture2 11.png";

type PrivateProps = {
    year:String
}

export default function Year ({year}:PrivateProps) {
    return (
        <>
            <div className="mt-20 mr-9 flex">
                <div className="mr-5 ml-2">
                    <img src={img}/>
                </div>
                <h2 className="text-5xl font-bold text-zinc-400">{year}</h2>
            </div>
        </>
    )
}