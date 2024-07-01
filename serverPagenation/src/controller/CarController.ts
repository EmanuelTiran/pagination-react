import { FilterQuery, UpdateQuery } from 'mongoose'
import users from '../data'
import ICar from '../interfaces/ICar'
import CarModel from '../models/CarModel'
import IController from '../interfaces/IController'
import FilterUserRequest, { SortOrder } from '../dto/user/FilterUserRequest'



class CarController implements IController<ICar> {
    async create(data: ICar): Promise<ICar> {
        let car = await CarModel.create(data)
        return car
    }

    async read(filter: FilterUserRequest): Promise<{ items: ICar[], count: number }> {
        const { search, isActive, sortKey, sortOrder, currentPage = 1 } = filter;
        const itemsPerPage = 10;
        const startIndex = (currentPage - 1) * itemsPerPage;

        let filterQuery: FilterQuery<ICar> = {
            $or: [
                { model: { $regex: search || "", $options: 'i' } },
                { licensePlate: { $regex: search || "", $options: 'i' } }
            ]
        };

        if (isActive !== undefined) {
            filterQuery.isActive = isActive === "active";
        }

        const validSortKeys: (keyof ICar)[] = ["model", "year", "color", "licensePlate", "owner", "isActive"];
        const validSortKey: keyof ICar = validSortKeys.includes(sortKey as keyof ICar) ? sortKey as keyof ICar : "model";

        const cars = await CarModel.find(filterQuery)
            .sort({ [validSortKey]: sortOrder === 'asc' ? 1 : -1 })
            .skip(startIndex)
            .limit(itemsPerPage);

        const count = await CarModel.countDocuments(filterQuery);

        return { items: cars, count };
    }

    async readOne(filter: FilterQuery<ICar>): Promise<ICar | null> {
        console.log({ filter }, "--------------------------------")
        return await CarModel.findOne(filter)
    }

    update(filter: FilterQuery<ICar>, newData: UpdateQuery<ICar>): ICar {
        throw new Error('Method not implemented.')
    }
    del(filter: FilterQuery<ICar>): boolean {
        throw new Error('Method not implemented.')
    }
}


export default CarController


export const sortData = (data: any, key: keyof ICar | undefined, order: SortOrder | undefined = 'asc') => {


    if (key != undefined) {
        return [...data].sort((a, b) => {
            if (a[key].toString().toLowerCase() < b[key].toString().toLowerCase()) return order === 'asc' ? -1 : 1;
            if (a[key].toString().toLowerCase() > b[key].toString().toLowerCase()) return order === 'asc' ? 1 : -1;
            return 0;
        });
    }
    return data;
};

