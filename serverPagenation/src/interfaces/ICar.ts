import { ObjectId } from "mongodb"
import Permission from "../unions/T_Permission"
import { Document } from "mongoose"
import PartialDoc from "../unions/T_PartialDoc"


export default interface ICar extends Partial<Pick<Document,PartialDoc>> {
    // _id? : ObjectId | string
    model : string
    year : number
    color : string
    licensePlate : string
    owner : string
    isActive?: boolean
}

