
import BuyerProfileChart from "./BuyerProfileChart"
import DashboardStatsGrind from "./DashboardStatsGrind"
import PopularProduct from "./PopularProduct"
import RecentOrders from "./RecentOrders"
import TransChart from "./TransChart"


const Dashboard = () => {
  return (
    <div className="flex gap-4 flex-col">
    <DashboardStatsGrind/>
    <div className="flex flex-row gap-4 w-full ">
         <TransChart/>
         <BuyerProfileChart/>
         </div>
         <div className="flex flex-row gap-4 w-full ml-3">
<RecentOrders/>
<PopularProduct/>
         </div>
   
    </div>
  )
}

export default Dashboard
