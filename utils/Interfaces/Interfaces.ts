import { LinkProps } from "next/link";
import { TGeneral } from "../Types/Types";
import { SVGProps } from "react";

export interface IDataChatProps{
    userMessage : string,
    messageTime : number | string,
}

export interface IBookingData{
    properties : string,
    checkInDate : Date | string,
    checkOutDate : Date | string,
    childPerson : string | number | null,
    adultPerson : string | number | null,
    referalCode? : string | number | null 
}

export interface IRoutesProps extends TGeneral, LinkProps{
    linkClassName : string
}
