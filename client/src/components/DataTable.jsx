import { useState } from 'react';
import { sortData, filterData } from './data';
import Pagination from './Pagination';




const DataTable = ({data}) => {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [isActive, setIsActive] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSort = (key) => {
    console.log(key)
    const order = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(order);
  };
  const dir = sortOrder === 'asc' ? "🔽" : "🔼";
  const filteredObjects = filterData(data, search, isActive);
  const sortedObjects = sortData(filteredObjects, sortKey, sortOrder);
  const totalPages = Math.ceil(sortedObjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentObjects = sortedObjects.slice(startIndex, startIndex + itemsPerPage);




  return (
    <div className="p-4">
      <div className="flex mb-4">
        <input
          type="text"
          className="border p-2 mr-2"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="border p-2" value={isActive} onChange={(e) => setIsActive(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <table className="min-w-full">
  <thead>
    <tr>
      {Object.keys(data[0]).map((key, i) => (
        <th 
          key={key} 
          className="py-2 px-4 border cursor-pointer first-letter:uppercase" 
          onClick={() => handleSort(key)}
        >
          {key}{sortKey === key && dir}
        </th>
      ))}
    </tr>
  </thead>
  <tbody>
    {currentObjects && currentObjects.map((obj) => (
      <tr key={obj.id} className="text-center">
        {Object.entries(obj).map(([key, value]) => (
          <td 
            key={key} 
            className={`py-2 px-4 border ${key === "status" ? (obj.isActive ? 'text-green-500' : 'text-red-500') : ""}`}
          >
            {key !== "isActive" ? value : (obj.isActive ? 'Yes' : 'No')}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>

      <Pagination currentPage={currentPage} totalPages={totalPages} totalLength={filteredObjects.length} itemsPerPage={currentObjects.length} onPageChange={setCurrentPage} />

    </div>
  );
};

export default DataTable;
