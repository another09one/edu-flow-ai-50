import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  Users, 
  TrendingUp, 
  AlertTriangle,
  Clock,
  CheckCircle
} from "lucide-react";

const RealTimeAnalytics = () => {
  const systemMetrics = [
    { label: "System Load", value: 67, status: "normal", icon: Activity },
    { label: "Active Users", value: 89, status: "high", icon: Users },
    { label: "Server Response", value: 23, status: "excellent", icon: Clock },
    { label: "Success Rate", value: 98, status: "excellent", icon: CheckCircle }
  ];

  const recentActivities = [
    { action: "Class Schedule Updated", user: "Dr. Smith", time: "2 min ago", type: "update" },
    { action: "New Student Enrolled", user: "System", time: "5 min ago", type: "create" },
    { action: "Room Booking Conflict Resolved", user: "AI System", time: "8 min ago", type: "resolve" },
    { action: "Grade Report Generated", user: "Prof. Johnson", time: "12 min ago", type: "generate" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-success';
      case 'normal': return 'text-primary';
      case 'high': return 'text-warning';
      default: return 'text-muted-foreground';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'update': return <TrendingUp className="h-4 w-4 text-primary" />;
      case 'create': return <Users className="h-4 w-4 text-success" />;
      case 'resolve': return <CheckCircle className="h-4 w-4 text-accent" />;
      case 'generate': return <Activity className="h-4 w-4 text-warning" />;
      default: return <AlertTriangle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* System Performance Metrics */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="mr-2 h-5 w-5 text-accent" />
            Real-Time System Metrics
          </CardTitle>
          <CardDescription>Live system performance monitoring</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {systemMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="p-4 rounded-lg border border-border bg-card/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <IconComponent className={`h-4 w-4 ${getStatusColor(metric.status)}`} />
                      <span className="text-sm font-medium text-foreground">{metric.label}</span>
                    </div>
                    <Badge variant="outline" className={getStatusColor(metric.status)}>
                      {metric.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-foreground">{metric.value}%</span>
                    </div>
                    <Progress value={metric.value} className="h-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity Feed */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="mr-2 h-5 w-5 text-primary" />
            Live Activity Feed
          </CardTitle>
          <CardDescription>Real-time system activities and changes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-card/50 border border-border hover:bg-accent/5 transition-colors">
                {getActivityIcon(activity.type)}
                <div className="flex-1">
                  <p className="font-medium text-foreground">{activity.action}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm text-muted-foreground">by {activity.user}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RealTimeAnalytics;