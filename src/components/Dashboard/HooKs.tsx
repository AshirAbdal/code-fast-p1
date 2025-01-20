"use client"
import { useState } from "react";

const Example=()=>{


    const [count, setCount] = useState(0);

    const handleIncrement = () => {setCount(count + 1);}
    const handleDecrement = () => {setCount(count - 1);}


    return (

        <div className=" flex flex-auto gap-10 py-32 px-8 ">

            <button className="btn" onClick={handleDecrement}>
            - Remove
            </button>


            <div className="text-3xl font-bold pt-2">
            {count}
            </div>


            <button className="btn" onClick={handleIncrement}>
            +Add
            </button>


        </div>

    );

}

 export default Example;  