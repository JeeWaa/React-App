import React from "react";
import Button from "../../common/button";
import Data from "../../common/data";
import Header from "../../common/header";
import img from "../../../assets/19893_UA_Family-Square-6x6-E-FINAL_7th-Mar 4.png";
import icon from "../../../assets/akar-icons_edit.png";
import icon2 from "../../../assets/Vector.png";

export default function HomePage () {
    return (
        <>
            <div className="flex space-x-3 w-[350px] absolute top-10 right-14">
                <Button backgroundColor={""} borderColor={"border-solid border-2 border-neutral-400 text-neutral-400"} text={"Edit"} icon={icon}/>
                <Button backgroundColor={""} borderColor={"w-[115px] border-solid border-2 border-orange-400 text-orange-400"} text={"Share"} icon={icon2}/>
                <Button backgroundColor={"bg-orange-600 w-[136px] h-[50px] text-white"} borderColor={""} text={"Move to DAT"} icon={""}/>
            </div>
            <div className="ml-9 mt-24 mr-9 flex">
                <div className="mr-2">
                    <h1 className="text-4xl text-gray-400 font-light pb-5">Dear, Mr.Eshan 👋</h1>
                    <Header title={"Now you have a better understanding of your financial requiremnts of your future"}/>
                    <div className="flex mt-5">
                        <Data title={"Total need"} text={"Eshan De Silva"}/>
                        <Data title={"I have"} text={"Rs. 3,000,000"}/>
                        <Data title={"Income"} text={"Rs. XXXX"}/>
                    </div>
                </div>
                <div>
                    <div className="bg-auto bg-no-repeat bg-center"></div>
                    <img className="w-[2600px]" src={img}/>
                </div>
            </div>
            <div className="grid justify-items-center mt-5">
                <Button backgroundColor={""} borderColor={"text-orange-400 w-[120px]"} text={"Scroll down"} icon={""}/>
            </div>
        </>
    )
}