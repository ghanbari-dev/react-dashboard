import React from 'react'
import { Header } from '../components'
import TableTemplate from '../components/table/TableTemplate'

type Props = {}

const Customers = (props: Props) => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Customers" />

    <TableTemplate editable />
  </div>
  )
}

export default Customers