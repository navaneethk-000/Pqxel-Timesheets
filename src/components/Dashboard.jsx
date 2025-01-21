import { Outlet } from 'react-router-dom'
import Header from './Header'
import MainOutlet from './MainOutlet'
import Sidebar from './SideBar'

function Dashboard() {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex flex-col w-full">
        {/* Header */}
        <Header />

        {/* Main Content */}
       {/* <MainOutlet/> */}
       <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard