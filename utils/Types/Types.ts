import { type } from "os"
import React from "react"

export type TGeneral = {
    className : string,
    children? : React.ReactNode
}
export type TInput = TGeneral & {
    inputType : string,
    inputName : string,
    inputID : string,
}