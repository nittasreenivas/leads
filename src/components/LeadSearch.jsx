
import React, { useState } from 'react';
import axios from 'axios';

function LeadSearch() {
  const [searchKey, setSearchKey] = useState('');
  const [leads, setLeads] = useState([]);

  const handleText = (e) => {
    setSearchKey(e.target.value);
  };

  const handleSearch = () => {
    axios.get(`http://localhost:4000/Leads?phoneNumber=${searchKey}`).then((res) => {
      if (res.data.length === 1) {
        setLeads(res.data); // Use setLeads with the array directly
      } else {
        setLeads([]);
      }
      setSearchKey('');
    });
  };

  return (
    <div className='border border-2 border-danger m-2 p-2'>
      <h3>LeadSearch</h3>
      <div className='d-flex justify-content-center'>
        <input type='text' placeholder='search lead' onChange={handleText} value={searchKey} />
        <button onClick={handleSearch}>Search</button>
      </div>

      {leads.length > 0 ? (
        <div className='d-flex justify-content-center m-4 p-3'>
          <table className='table table-bordered border-success'>
            <thead>
              <tr>
                <th>fullname</th>
                <th>phoneNumber</th>
                <th>Email</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td>{lead.fullname}</td>
                  <td>{lead.phoneNumber}</td>
                  <td>{lead.email}</td>
                  <td>{lead.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className='text-danger text-center m-2 p-2'>NO LEADS FOUND FOR THIS NUMBER</h3>
      )}
    </div>
  );
}

export default LeadSearch;
