import React from "react";

type PrivateProps = {
    title:String
}

export default function Header ({title}:PrivateProps) {
    return (
        <>
            <div>
                <h1 className="text-7xl font-bold">{title}</h1>
            </div>
        </>
    )
}