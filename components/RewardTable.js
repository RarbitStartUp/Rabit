import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  // {
  //   field: 'date',
  //   headerName: 'Date',
  //   type: 'number',
  //   width: 70,
  // },
  { field: 'shopName', headerName: 'Shop Name', width: 130 },
  { field: 'date', headerName: 'Date', width: 130 },
  { field: 'token', headerName: 'Token %', width: 130 },
  { field: 'lockup', headerName: 'Lock Up til', width: 130 },

  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
]

const rows = [
  {
    id: 1,
    shopName: 'Sora Ramen',
    token: '10',
    date: '5/1/2020',
    lockup: '5/2/2020',
  },
  {
    id: 2,
    shopName: 'Rim Cafe',
    token: '20',
    date: '4/2/2020',
    lockup: '4/3/2020',
  },
  {
    id: 3,
    shopName: 'Aqua Bar',
    token: '50',
    date: '8/7/2021',
    lockup: '8/8/2020',
  },
  {
    id: 4,
    shopName: 'Steak',
    token: '45',
    date: '5/7/2021',
    lockup: '5/8/2020',
  },
  {
    id: 5,
    shopName: 'Sushiro',
    token: '67',
    date: '6/7/2020',
    lockup: '6/8/2020',
  },
  {
    id: 6,
    shopName: 'Pizza Express',
    token: '80',
    date: '1/8/2021',
    lockup: '1/9/2020',
  },
  {
    id: 7,
    shopName: 'PastaHolic',
    token: '15',
    date: '15/9/2021',
    lockup: '15/10/2020',
  },
  {
    id: 8,
    shopName: 'Spagetti',
    token: '5',
    date: '20/8/2021',
    lockup: '20/9/2020',
  },
  {
    id: 9,
    shopName: 'MeatFever',
    token: '20',
    date: '7/8/2021',
    lockup: '7/9/2020',
  },
]

export default function RewardTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  )
}
