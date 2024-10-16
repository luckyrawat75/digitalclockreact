import React, { useState } from "react";
import "./App.css";

const Information = () => {

    let newTime = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(newTime)


    const Update = () => {
        let Ntime = new Date().toLocaleTimeString();
        setCtime(Ntime);
    };
    setInterval(Update, 1000);
    return (
        <>
            <div className="top">
                <h1>Digital Clock </h1>
                <h2>{ctime}</h2>
            </div>
        </>
    );

}
export default Information;