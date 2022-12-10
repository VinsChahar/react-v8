import React, { useMemo, memo } from 'react'
import PropTypes from 'prop-types';

import './Table.css';


function Table({ data: userData, onSort }) {
  console.log('My Table..');


  const table = useMemo(() => (
    <div className="table">
      <p className="cla">{`Total Row Count: ${userData.length}`}</p>
      <table className="table-container">
        <thead>
          <tr className="th-container">
            {
              userData && Object.keys(userData[0]).map(a => (
                <th key={`th-${a}`} className='th' onClick={() => onSort(a)}>
                  {a}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            userData && userData.map(v => (
              <tr key={v.id} className="tb-container">
                {Object.values(v).map((a, inx) => (<td key={`td-${v.id}-${inx}`} className='td'>{a}</td>))}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  ), [userData, onSort]);

  return (
    <div>
      {table}
    </div>
  )
}

Table.prototype = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    employeeId: PropTypes.number,
    name: PropTypes.string,
    lname: PropTypes.string,
    address: PropTypes.string,
    position: PropTypes.string
  })).isRequired,
  onSort: PropTypes.func
}


export default memo(Table);