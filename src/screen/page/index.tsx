import React from "react";
import HomePage from "../../components/pages/home";
import {data} from "../../data";
import Clone from "../../components/pages/clone";

export default function Page () {
    return (
        <>
            <div className="border-solid border-2 border-orange-400 rounded-3xl m-5">
                <HomePage/>
                {data.map((val,index) => (
                    <Clone value={val}/>
                ))}
            </div>
        </>
    )
}