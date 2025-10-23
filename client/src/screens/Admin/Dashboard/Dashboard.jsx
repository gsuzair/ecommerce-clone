import { FiBox, FiUsers } from "react-icons/fi";
import CustomerOrOrder from "../../../components/Admin/Dashboard/CustomerOrOrder";
import MonthlyTarget from "../../../components/Admin/Dashboard/MonthlyTarget";
import MonthlySales from "../../../components/Admin/Dashboard/MonthlySales";
import CustomersDemographic from "../../../components/Admin/Dashboard/CustomersDemographic";
import RecentOrder from "../../../components/Admin/Dashboard/RecentOrder";
import Statistics from "../../../components/Admin/Dashboard/Statistics";
import AdminLayout from "../../../components/AdminLayout/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="grid gap-4 lg:gap-6 grid-cols-1 lg:grid-cols-12 auto-rows-auto">
        <div className="lg:col-span-3 h-full">
          <CustomerOrOrder title="Customers" value="3,782" delta="11.01%" positive icon={<FiUsers />} />
        </div>

        <div className="lg:col-span-3 h-full">
          <CustomerOrOrder title="Products" value="1,245" delta="2.3%" positive icon={<FiBox />} />
        </div>

        <div className="lg:col-span-6 lg:row-span-2 h-full">
          <MonthlyTarget
            percent={75.55}
            deltaLabel="+10%"
            target="$20K"
            revenue="$20K"
            today="$20K"
            targetTrend="down"
            revenueTrend="up"
            todayTrend="up"
            message="You earn $3287 today, it's higher than last month. Keep up your good work!"
          />
        </div>

        <div className="lg:col-span-6 h-full">
          <MonthlySales />
        </div>

        <div className="lg:col-span-12 h-full">
          <Statistics />
        </div>
        <div className="lg:col-span-5 h-full">
          <CustomersDemographic />
        </div>
        <div className="lg:col-span-7 h-full">
          <RecentOrder />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
