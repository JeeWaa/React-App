import React from "react";
import Year from "../../common/year";
import Header from "../../common/header";
import Data from "../../common/data";
import Gap from "../../common/gap";
import Comment from "../../common/comment";
import Plan from "../../common/plan";

type PrivateProps = {
    value: any
}

export default function Clone ({value}:PrivateProps) {

    const text = value.texts
    const planes = value.plane

    return (
        <>
            <Year year={text.year}/>
            <div className="ml-9 mt-5">
                <div className="w-[900px]">
                    <Header title={text.header}/>
                </div>
                <div className="flex mt-2">
                    <div className="mr-60">
                        <p className="text-slate-450">
                            {text.text}
                        </p>
                        <div className="flex mt-5 mb-2">
                            <Data title={"Total need"} text={"Eshan De Silva"}/>
                            <Data title={"I have"} text={"Rs. 3,000,000"}/>
                        </div>
                        <Gap price={"Rs. 16,200,000"} percentage={"15%"}/>
                        <Comment
                            title={"Factoring an inflation rate of 4.5 %"}
                            body={"Inflation rate is considered as at january 2020 according to Central bank of Sri lanka"}
                            text={"Recommanded Products"}/>
                    </div>
                    <img className="w-[500px] mr-8 mb-2" src={text.image}/>
                </div>
                <Plan
                    image={planes.image}
                    title={planes.title}
                    text={planes.text}
                    pay={planes.pay}
                    st={planes.st}
                    sv={planes.sv}
                    price={planes.price}
                    total={planes.total}
                    pv={planes.pv}
                />
            </div>
        </>
    )
}