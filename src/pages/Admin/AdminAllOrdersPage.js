import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import AdminAllOrders from '../../components/Admin/AdminAllOrders'

const AdminAllOrdersPage = () => {
  return (
    <div dir='ltr'>
    <Sidebar active={1}/>
    <div className="content">
      <Navbar />
      <AdminAllOrders/>
    </div>
  </div>
  )
}

export default AdminAllOrdersPage
