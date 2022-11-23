import React from "react";

type PrivateProps = {
    title:String
    text:String
}

export default function Data ({title,text}:PrivateProps) {
    return (
        <>
            <div className="w-[200] mr-16">
                <p className="font-light text-sm text-zinc-400">{title}</p>
                <p className="text-lg not-italic font-bold">{text}</p>
            </div>
        </>
    )
}