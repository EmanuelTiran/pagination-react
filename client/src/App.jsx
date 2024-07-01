import DataTable from "./components/DataTable";
import React, { useState } from 'react';


export default function App() {
   const [dataType, setDataType] = useState('users'); // Initial state is 'users'


   const resolveDataType = (type) => {
      if (type === 'users' || type === 'cars') {
         setDataType(type);
         console.log({ dataType })
      } else {
         console.error('Invalid data type. Must be either "users" or "cars"');
      }
   };

   return (
      <div>
         <header className="p-4 text-center">
            <h1 className="text-xl font-bold font-mono">{dataType.charAt(0).toUpperCase() + dataType.slice(1)} Table</h1>
         </header>
         <main className="p-4">
            <DataTable dataType={dataType} />
            <div className="mt-4 text-center">
               <button
                  onClick={() => resolveDataType('users')}
                  className={`m-1 px-4 py-2 bg-green-500 text-white rounded ${dataType === `users` && `border-slate-600 border-2`} `}
               >
                  Set to Users
               </button>
               <button
                  onClick={() => resolveDataType('cars')}
                  className={`px-4 py-2 bg-green-500 text-white rounded ${dataType === `cars` && `border-slate-600 border-2`} `}
               >
                  Set to cars
               </button>
            </div>
         </main >
      </div >
   )
}