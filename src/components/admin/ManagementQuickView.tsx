import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  UserPlus, 
  Settings, 
  Calendar,
  BookOpen,
  MapPin,
  Clock,
  ArrowRight
} from "lucide-react";

const ManagementQuickView = () => {
  const quickActions = [
    {
      title: "Add New User",
      description: "Register students, teachers, or staff",
      icon: UserPlus,
      color: "text-primary",
      bgColor: "bg-primary/10",
      action: "add-user"
    },
    {
      title: "Room Management",
      description: "Manage classroom availability",
      icon: MapPin,
      color: "text-accent",
      bgColor: "bg-accent/10",
      action: "manage-rooms"
    },
    {
      title: "Course Setup",
      description: "Create or modify courses",
      icon: BookOpen,
      color: "text-success",
      bgColor: "bg-success/10",
      action: "course-setup"
    },
    {
      title: "System Settings",
      description: "Configure AI parameters",
      icon: Settings,
      color: "text-warning",
      bgColor: "bg-warning/10",
      action: "settings"
    }
  ];

  const recentActivities = [
    {
      action: "New teacher registered",
      user: "Dr. Sarah Johnson",
      time: "2 minutes ago",
      type: "user"
    },
    {
      action: "Schedule conflict resolved",
      user: "AI System",
      time: "5 minutes ago",
      type: "ai"
    },
    {
      action: "Room 203 maintenance scheduled",
      user: "Admin System",
      time: "15 minutes ago",
      type: "system"
    },
    {
      action: "New course created",
      user: "Dr. Mike Wilson",
      time: "1 hour ago",
      type: "course"
    }
  ];

  const pendingApprovals = [
    {
      item: "Teacher Leave Request",
      requester: "Prof. Anderson",
      urgency: "medium",
      date: "Oct 25-27"
    },
    {
      item: "Room Booking",
      requester: "Dr. Smith",
      urgency: "high",
      date: "Tomorrow"
    },
    {
      item: "Course Modification",
      requester: "Ms. Davis",
      urgency: "low",
      date: "Next Week"
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user': return <Users className="h-4 w-4 text-primary" />;
      case 'ai': return <Clock className="h-4 w-4 text-accent" />;
      case 'course': return <BookOpen className="h-4 w-4 text-success" />;
      default: return <Settings className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-auto p-4 justify-start hover-lift"
              >
                <div className="flex flex-col items-start space-y-2 w-full">
                  <div className={`p-2 rounded-lg ${action.bgColor}`}>
                    <action.icon className={`h-5 w-5 ${action.color}`} />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-foreground text-sm">{action.title}</p>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="text-lg">Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="mt-1">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {activity.action}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    by {activity.user} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-3 text-muted-foreground">
            View All Activities
            <ArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </CardContent>
      </Card>

      {/* Pending Approvals */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="text-lg flex items-center justify-between">
            Pending Approvals
            <Badge variant="secondary" className="text-xs">
              {pendingApprovals.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pendingApprovals.map((approval, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border bg-card/30">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{approval.item}</p>
                  <p className="text-xs text-muted-foreground">
                    {approval.requester} • {approval.date}
                  </p>
                </div>
                <Badge className={getUrgencyColor(approval.urgency)}>
                  {approval.urgency}
                </Badge>
              </div>
            ))}
          </div>
          <Button className="w-full mt-3 btn-accent">
            Review All Approvals
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManagementQuickView;