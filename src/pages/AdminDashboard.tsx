import DashboardLayout from "@/components/DashboardLayout";
import KPICards from "@/components/admin/KPICards";
import InteractiveTimetable from "@/components/admin/InteractiveTimetable";
import ManagementQuickView from "@/components/admin/ManagementQuickView";
import AIPredictiveScheduler from "@/components/admin/AIPredictiveScheduler";
import RealTimeAnalytics from "@/components/admin/RealTimeAnalytics";

const AdminDashboard = () => {
  return (
    <DashboardLayout 
      title="Administrator Dashboard" 
      subtitle="AI-Powered Academic Management System"
    >
      <div className="space-y-8 animate-fade-in">
        {/* KPI Overview */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">System Overview</h2>
          <KPICards />
        </section>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Timetable */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">Interactive Timetable</h2>
            <InteractiveTimetable />
          </div>

          {/* Side Panel */}
          <div className="space-y-8">
            {/* AI Predictive Scheduler */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">AI Scheduler</h3>
              <AIPredictiveScheduler />
            </div>

            {/* Management Quick View */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h3>
              <ManagementQuickView />
            </div>
          </div>
        </div>

        {/* Real-Time Analytics Section */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Real-Time Analytics</h2>
          <RealTimeAnalytics />
        </section>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;