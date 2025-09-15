import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  AlertTriangle, 
  BookOpen,
  Clock,
  CheckCircle,
  BarChart3
} from "lucide-react";

const KPICards = () => {
  const kpiData = [
    {
      title: "Total Students",
      value: "2,847",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Active Classes",
      value: "156",
      change: "+5%",
      trend: "up",
      icon: BookOpen,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Schedule Efficiency",
      value: "94.2%",
      change: "+2.3%",
      trend: "up",
      icon: TrendingUp,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "Resource Utilization",
      value: "87.5%",
      change: "+4.1%",
      trend: "up",
      icon: BarChart3,
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      title: "Conflicts Resolved",
      value: "23",
      change: "-18%",
      trend: "down",
      icon: CheckCircle,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "Pending Issues",
      value: "7",
      change: "-12%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-alert",
      bgColor: "bg-alert/10"
    },
    {
      title: "Avg. Class Duration",
      value: "47min",
      change: "+1min",
      trend: "stable",
      icon: Clock,
      color: "text-muted-foreground",
      bgColor: "bg-muted/10"
    },
    {
      title: "Room Occupancy",
      value: "78.3%",
      change: "+6.2%",
      trend: "up",
      icon: Calendar,
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
      {kpiData.map((kpi, index) => (
        <Card key={index} className="kpi-card animate-bounce-in" style={{ animationDelay: `${index * 0.05}s` }}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2 rounded-lg ${kpi.bgColor}`}>
                <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
              </div>
              <div className={`text-xs font-medium ${
                kpi.trend === 'up' ? 'text-success' : 
                kpi.trend === 'down' ? 'text-destructive' : 'text-muted-foreground'
              }`}>
                {kpi.change}
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground mb-1">{kpi.value}</p>
              <p className="text-xs text-muted-foreground font-medium">{kpi.title}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default KPICards;