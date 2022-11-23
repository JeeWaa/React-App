import React from "react";
import icon from "../../../assets/Picture2 11.png";
import icon2 from "../../../assets/Group.png";

type PrivateProps = {
    image:any
    title:String
    text:String
    pay:String
    st:String
    sv:Array<String>
    price:String
    total:String
    pv:String
}

export default function Plan ({image,title,text,pay,st,sv,price,total,pv}:PrivateProps) {
    return (
        <>
            <div className="mt-5 mb-8">
                <div className="w-[1310px] h-[400px] rounded-3xl border-solid border-8 border-orange-600 flex">
                    <div className="bg-orange-600 w-[400px]">
                        <img className="pt-3" src={image}/>
                    </div>
                    <div className="w-[424px] ml-20 mr-2">
                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                            {title}
                        </h2>
                        <p className="font-light mb-6">
                            {text}
                        </p>
                        <div className="h-[30px] w-[120px] bg-orange-600 rounded-3xl mb-8">
                            <p className="text-white pl-4 pt-0.5">
                                {pay}
                            </p>
                        </div>
                        <h3 className="font-bold mb-2">
                            {st}
                        </h3>
                        <p className="mb-1 flex">
                            <img className="pr-2 h-[16px] mt-1" src={icon2}/>
                            {sv[0]}
                        </p>
                        <p className="mb-1 flex">
                            <img className="pr-2 h-[16px] mt-1" src={icon}/>
                            {sv[1]}
                        </p>
                        <p className="mb-2 flex">
                            <img className="pr-2 h-[16px] mt-1" src={icon}/>
                            {sv[2]}
                        </p>
                    </div>
                    <div className="w-[360px] relative ml-1">
                        <div className="h-[40px] w-[150px] bg-orange-400 rounded-xl mb-8 absolute right-0 top-4">
                            <p className="text-white pl-9 pt-2 font-semibold">
                                Edit in DAT
                            </p>
                        </div>
                        <div className="absolute bottom-60 right-0">
                            <p className="pl-7">
                                Illustrated Matuarity at 10%
                            </p>
                            <h2 className="text-4xl font-semibold">
                                {price}
                            </h2>
                        </div>
                        <div className="absolute bottom-40 right-0">
                            <p className="pl-7">
                                Total approx. Premium
                            </p>
                            <h2 className="text-4xl font-semibold">
                                {total}
                            </h2>
                        </div>
                        <div className="absolute bottom-5 right-0 w-[270px] h-[70px] bg-orange-100 rounded-xl flex">
                            <div>
                                <p className="ml-4 mt-5">
                                    Need gap covered
                                </p>
                            </div>
                            <div className="mt-1 ml-10 w-[60px] h-[60px] rounded-full border-solid border-4 border-orange-400">
                                <p className="pl-3 pt-3.5">
                                    {pv}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}