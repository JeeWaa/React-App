import React from "react";

type PrivateProps = {
    title:String
    body:String
    text:String
}

export default function Comment ({title,body,text}:PrivateProps) {
    return (
        <>
            <div className="mt-4">
                <p className="font-medium">
                    {title}
                </p>
                <p className="text-sm font-light text-slate-400 w-[300px]">
                    {body}
                </p>
            </div>
            <div>
                <p className="mt-8 mb-3 text-2xl underline underline-offset-1 text-slate-300">
                    {text}
                </p>
            </div>
        </>
    )
}