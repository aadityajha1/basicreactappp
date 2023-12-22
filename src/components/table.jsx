import React from "react";

const Table = ({ rows, datas }) => {
  return (
    <table>
      <thead>
        <tr>
          {rows.map((row) => (
            <th key={row.id}>{row.displayName} </th>
          ))}
        </tr>
      </thead>
      {datas &&
        datas.length &&
        datas.map((data) => (
          <>
            <tr key={data.id}>
              {rows.map((row) => (
                <>
                  <td>{data[row.value]}</td>
                </>
              ))}
            </tr>
          </>
        ))}
    </table>
  );
};

export default Table;
