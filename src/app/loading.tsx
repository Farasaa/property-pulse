'use client'

import { ClipLoader } from "react-spinners"

const override = {
    display: "block",
    margin: "0 auto"
};


export default function LoaddingPage() {
    return (
         
            <ClipLoader size={150} color={"#3b82f6"} loading={true}  cssOverride={override} aria-label="Loader"/>
         
    )
}