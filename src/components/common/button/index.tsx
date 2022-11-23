import React from "react";

type PrivateProps = {
    backgroundColor:String
    borderColor:String
    text:String
    icon:any
}

export default function Button ({backgroundColor,borderColor,text,icon}:PrivateProps) {
    return (
        <>
            <button className={`${borderColor} ${backgroundColor} w-[100px] h-[50px] rounded-3xl flex pl-4 pt-3`}>
                {text}
                <img className="ml-2 mt-0.5 h-[18px]" src={icon}/>
            </button>
        </>
    )
}