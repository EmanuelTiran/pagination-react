import { SaveOptions, Document } from "mongoose";
import CarController from "../controller/CarController";
import ICar from "../interfaces/ICar";
import CreateNewCarRequest from "../dto/user/CreateNewCarRequest";
import FilterUserRequest from "../dto/user/CreateNewCarRequest";

class CarService {
    private static controller: CarController = new CarController()

    static getAllCars(filter: FilterUserRequest) {
        return this.controller.read(filter);
    }

    static async getSingleCar(email: string) {
        return await this.controller.readOne({ email })
    }

    static async createCar(body: CreateNewCarRequest) {
        let oldCar = await this.getSingleCar(body.licensePlate)
        if (oldCar) throw new Error("Car is exist")

        let nCar: ICar = {
            model: body.model,
            year: body.year,
            color: body.color,
            licensePlate: body.licensePlate,
            owner: body.owner,
            isActive: body.isActive,
                   }


        let newCar = await this.controller.create(nCar)
        if (newCar.save) newCar.save()

        return newCar
    }
}

export default CarService