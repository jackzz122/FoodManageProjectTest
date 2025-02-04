import { useState } from "react";
export default function Category(props) {
    return (
        <button onClick={props.change} className='px-2 bg-orange-400 text-white mx-2 rounded-md'>{props.cate}</button>
    )
}