import mongoose from "mongoose";
import IUser from "./interfaces/IUser";
import { connectToMongo } from "./models/connectToMongo";
import UserModel from "./models/UserModel";
import 'dotenv/config';
import ICar from "./interfaces/ICar";
import CarModel from "./models/CarModel";

connectToMongo()

async function insertUsers(usersArray: IUser[]): Promise<mongoose.Document[]> {
    try {
        // Disable validation for the password field temporarily
        UserModel.schema.path('password').required(false);
        
        const insertedUsers = await UserModel.insertMany(usersArray);
        console.log(`Successfully inserted ${insertedUsers.length} users.`);
        return insertedUsers;
    } catch (error) {
        console.error('Error inserting users:', error);
        throw error;
    } finally {
        // Re-enable validation for the password field
        UserModel.schema.path('password').required(true);
    }
  }

  async function insertCars(carsArray: ICar[]): Promise<mongoose.Document[]> {
    try {
        // Disable validation for the licensePlate field temporarily if needed
        CarModel.schema.path('licensePlate').required(false);
        
        const insertedCars = await CarModel.insertMany(carsArray);
        console.log(`Successfully inserted ${insertedCars.length} cars.`);
        return insertedCars;
    } catch (error) {
        console.error('Error inserting cars:', error);
        throw error;
    } finally {
        // Re-enable validation for the licensePlate field
        CarModel.schema.path('licensePlate').required(true);
    }
}


  
  // Example usage:
  const usersToInsert: IUser[] = [
    {
        fullName: "Noa Cohen",
        age: 22,
        email: "Noa1.cohen@example.com",
        phone: "444-222-1111",
        password: "<hashed password>", // Placeholder for actual hashed password
        permission: "user",
        isActive: true
    },
    {
        fullName: "Eliana Levi",
        age: 33,
        email: "Eliana1.levi@example.com",
        phone: "888-777-6666",
        password: "<hashed password>",
        permission: "admin",
        isActive: true
    },
    {
        fullName: "David Katz",
        age: 28,
        email: "David1.katz@example.com",
        phone: "555-333-1111",
        password: "<hashed password>",
        permission: "user",
        isActive: true
    },
    {
        fullName: "Michal Solomon",
        age: 30,
        email: "Michal1.solomon@example.com",
        phone: "777-555-4444",
        password: "<hashed password>",
        permission: "admin",
        isActive: true
    },
    {
        fullName: "Yossi Ben Haim",
        age: 45,
        email: "Yossi1.benHaim@example.com",
        phone: "999-888-7777",
        password: "<hashed password>",
        permission: "user",
        isActive: false
    },
    {
        fullName: "Rivka Goldstein",
        age: 27,
        email: "Rivka1.goldstein@example.com",
        phone: "666-444-3333",
        password: "<hashed password>",
        permission: "user",
        isActive: true
    },
    {
        fullName: "Shlomi Levi",
        age: 34,
        email: "Shlomi1.levi@example.com",
        phone: "444-555-6666",
        password: "<hashed password>",
        permission: "admin",
        isActive: true
    },
    {
        fullName: "Tamar Cohen",
        age: 29,
        email: "Tamar1.cohen@example.com",
        phone: "222-333-4444",
        password: "<hashed password>",
        permission: "user",
        isActive: true
    },
    {
        fullName: "Avi Mizrahi",
        age: 38,
        email: "Avi1.mizrahi@example.com",
        phone: "111-222-3333",
        password: "<hashed password>",
        permission: "admin",
        isActive: true
    },
    {
        fullName: "Daniella Levi",
        age: 25,
        email: "Daniella1.levi@example.com",
        phone: "333-444-5555",
        password: "<hashed password>",
        permission: "user",
        isActive: true
    },
    {
        fullName: "Yael Ben Ami",
        age: 32,
        email: "Yael1.benAmi@example.com",
        phone: "555-666-7777",
        password: "<hashed password>",
        permission: "admin",
        isActive: false
    },
    {
        fullName: "Omer Rahamim",
        age: 40,
        email: "Omer1.rahamim@example.com",
        phone: "888-999-1111",
        password: "<hashed password>",
        permission: "user",
        isActive: true
    },
    {
        fullName: "Elior Malka",
        age: 37,
        email: "Elior1.malka@example.com",
        phone: "111-444-7777",
        password: "<hashed password>",
        permission: "admin",
        isActive: true
    },
    {
        fullName: "Nir Avraham",
        age: 26,
        email: "Nir1.avraham@example.com",
        phone: "222-555-8888",
        password: "<hashed password>",
        permission: "user",
        isActive: true
    },
    {
        fullName: "Gili Barak",
        age: 31,
        email: "Gili1.barak@example.com",
        phone: "444-777-9999",
        password: "<hashed password>",
        permission: "admin",
        isActive: true
    },
    {
        fullName: "Tal Friedman",
        age: 29,
        email: "Tal1.friedman@example.com",
        phone: "999-111-3333",
        password: "<hashed password>",
        permission: "user",
        isActive: false
    },
    {
        fullName: "Yaron Halevi",
        age: 35,
        email: "Yaron1.halevi@example.com",
        phone: "333-666-9999",
        password: "<hashed password>",
        permission: "admin",
        isActive: true
    },
    {
        fullName: "Nofar Elbaz",
        age: 24,
        email: "Nofar1.elbaz@example.com",
        phone: "555-888-1111",
        password: "<hashed password>",
        permission: "user",
        isActive: true
    },
    {
        fullName: "Meir Tal",
        age: 42,
        email: "Meir1.tal@example.com",
        phone: "111-222-4444",
        password: "<hashed password>",
        permission: "admin",
        isActive: true
    },
    {
        fullName: "Yuval Ben David",
        age: 52,
        email: "Yuval1.benDavid@example.com",
        phone: "333-111-2222",
        password: "<hashed password>",
        permission: "user",
        isActive: false
    }
];
const carsToInsert: ICar[] = [
    {
        model: "Toyota Corolla",
        year: 2019,
        color: "White",
        licensePlate: "123-456-78",
        owner: "Noa Cohen",
        isActive: true
    },
    {
        model: "Honda Civic",
        year: 2020,
        color: "Black",
        licensePlate: "234-567-89",
        owner: "Eliana Levi",
        isActive: true
    },
    {
        model: "Mazda 3",
        year: 2018,
        color: "Blue",
        licensePlate: "345-678-90",
        owner: "David Katz",
        isActive: true
    },
    {
        model: "Ford Focus",
        year: 2017,
        color: "Red",
        licensePlate: "456-789-01",
        owner: "Michal Solomon",
        isActive: true
    },
    {
        model: "Chevrolet Malibu",
        year: 2016,
        color: "Gray",
        licensePlate: "567-890-12",
        owner: "Yossi Ben Haim",
        isActive: false
    },
    {
        model: "Nissan Altima",
        year: 2021,
        color: "Silver",
        licensePlate: "678-901-23",
        owner: "Rivka Goldstein",
        isActive: true
    },
    {
        model: "Hyundai Elantra",
        year: 2019,
        color: "White",
        licensePlate: "789-012-34",
        owner: "Shlomi Levi",
        isActive: true
    },
    {
        model: "Volkswagen Jetta",
        year: 2018,
        color: "Black",
        licensePlate: "890-123-45",
        owner: "Tamar Cohen",
        isActive: true
    },
    {
        model: "Kia Forte",
        year: 2020,
        color: "Blue",
        licensePlate: "901-234-56",
        owner: "Avi Mizrahi",
        isActive: true
    },
    {
        model: "Subaru Impreza",
        year: 2017,
        color: "Red",
        licensePlate: "012-345-67",
        owner: "Daniella Levi",
        isActive: true
    },
    {
        model: "Audi A4",
        year: 2021,
        color: "Gray",
        licensePlate: "123-456-89",
        owner: "Yael Ben Ami",
        isActive: false
    },
    {
        model: "BMW 3 Series",
        year: 2016,
        color: "Silver",
        licensePlate: "234-567-90",
        owner: "Omer Rahamim",
        isActive: true
    },
    {
        model: "Mercedes-Benz C-Class",
        year: 2019,
        color: "White",
        licensePlate: "345-678-01",
        owner: "Elior Malka",
        isActive: true
    },
    {
        model: "Lexus IS",
        year: 2018,
        color: "Black",
        licensePlate: "456-789-12",
        owner: "Nir Avraham",
        isActive: true
    },
    {
        model: "Infiniti Q50",
        year: 2020,
        color: "Blue",
        licensePlate: "567-890-23",
        owner: "Gili Barak",
        isActive: true
    },
    {
        model: "Volvo S60",
        year: 2017,
        color: "Red",
        licensePlate: "678-901-34",
        owner: "Tal Friedman",
        isActive: false
    },
    {
        model: "Tesla Model 3",
        year: 2021,
        color: "Gray",
        licensePlate: "789-012-45",
        owner: "Yaron Halevi",
        isActive: true
    },
    {
        model: "Porsche 911",
        year: 2019,
        color: "Silver",
        licensePlate: "890-123-56",
        owner: "Nofar Elbaz",
        isActive: true
    },
    {
        model: "Jaguar XE",
        year: 2018,
        color: "White",
        licensePlate: "901-234-67",
        owner: "Meir Tal",
        isActive: true
    },
    {
        model: "Cadillac CTS",
        year: 2016,
        color: "Black",
        licensePlate: "012-345-78",
        owner: "Yuval Ben David",
        isActive: false
    }
];
 export const insertDataCar = async (): Promise<void> => {
    try {
        const insertedCars = await insertCars(carsToInsert);
        console.log('Inserted cars:', insertedCars);
    } catch (error) {
        console.error('Failed to insert cars:', error);
    }
};
  export const insertDataUser = async (): Promise<void> => {
    try {
      const insertedUsers = await insertUsers(usersToInsert);
      console.log('Inserted users:', insertedUsers);
    } catch (error) {
      console.error('Failed to insert users:', error);
    }
  }; 

