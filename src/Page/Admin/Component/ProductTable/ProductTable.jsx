import React, {useMemo} from 'react'
import {data} from "../Data"
import {Column} from "./Columns"
import {useTable} from "react-table"

export const ProductTable =()=> {
    //use useMemo hook so that the react-table wont be re-rendering every time
    const columns = useMemo(()=>Column, [])
    const Data = useMemo(()=>data, [])
    const tableInstance = useTable({
        columns: columns,
        data: Data
    })
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance
  return (
    <div>
        <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        </table>
    </div>
  )
}
