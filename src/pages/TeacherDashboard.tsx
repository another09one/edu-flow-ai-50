import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import InteractiveClassManager from "@/components/teacher/InteractiveClassManager";
import { 
  Calendar, 
  Users, 
  BookOpen, 
  Clock, 
  AlertCircle, 
  CheckCircle,
  TrendingUp,
  FileText
} from "lucide-react";

const TeacherDashboard = () => {
  const todayClasses = [
    { time: "09:00 AM", subject: "Mathematics", room: "Room 101", students: 28, status: "upcoming" },
    { time: "11:00 AM", subject: "Physics", room: "Lab 203", students: 24, status: "in-progress" },
    { time: "02:00 PM", subject: "Chemistry", room: "Lab 105", students: 30, status: "upcoming" },
    { time: "04:00 PM", subject: "Study Hall", room: "Room 115", students: 15, status: "upcoming" }
  ];

  const upcomingAssignments = [
    { title: "Math Quiz Chapter 5", dueDate: "Tomorrow", subject: "Mathematics", submitted: 18, total: 28 },
    { title: "Physics Lab Report", dueDate: "Oct 25", subject: "Physics", submitted: 20, total: 24 },
    { title: "Chemistry Project", dueDate: "Oct 28", subject: "Chemistry", submitted: 5, total: 30 }
  ];

  return (
    <DashboardLayout 
      title="Teacher Dashboard" 
      subtitle="Manage your classes and track student progress"
    >
      <div className="space-y-8 animate-fade-in">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="kpi-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Today's Classes</p>
                  <p className="text-3xl font-bold text-foreground">4</p>
                </div>
                <Calendar className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="kpi-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                  <p className="text-3xl font-bold text-foreground">97</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="kpi-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Reviews</p>
                  <p className="text-3xl font-bold text-foreground">12</p>
                </div>
                <FileText className="h-8 w-8 text-alert" />
              </div>
            </CardContent>
          </Card>

          <Card className="kpi-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg. Performance</p>
                  <p className="text-3xl font-bold text-foreground">85%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Today's Schedule */}
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-accent" />
                Today's Schedule
              </CardTitle>
              <CardDescription>Your classes for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayClasses.map((classItem, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <Clock className="h-4 w-4 text-muted-foreground mx-auto mb-1" />
                        <p className="text-sm font-medium text-foreground">{classItem.time}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{classItem.subject}</p>
                        <p className="text-sm text-muted-foreground">{classItem.room} • {classItem.students} students</p>
                      </div>
                    </div>
                    <Badge 
                      variant={classItem.status === 'in-progress' ? 'default' : 'secondary'}
                      className={classItem.status === 'in-progress' ? 'bg-accent text-accent-foreground' : ''}
                    >
                      {classItem.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 btn-accent">
                View Full Schedule
              </Button>
            </CardContent>
          </Card>

          {/* Assignment Tracking */}
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-primary" />
                Assignment Tracking
              </CardTitle>
              <CardDescription>Monitor submission progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAssignments.map((assignment, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border bg-card/50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{assignment.title}</h4>
                      <Badge variant="outline">Due {assignment.dueDate}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{assignment.subject}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm text-foreground">
                          {assignment.submitted}/{assignment.total} submitted
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">
                          {Math.round((assignment.submitted / assignment.total) * 100)}%
                        </p>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mt-2">
                      <div 
                        className="bg-accent h-2 rounded-full" 
                        style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                Manage Assignments
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Class Manager */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Class Management</h2>
          <InteractiveClassManager />
        </section>

        {/* Recent Activity */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-alert" />
              Recent Activity & Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-accent/5 border border-accent/20">
                <CheckCircle className="h-5 w-5 text-success mt-1" />
                <div>
                  <p className="font-medium text-foreground">New submission received</p>
                  <p className="text-sm text-muted-foreground">Sarah Johnson submitted Physics Lab Report - 2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-alert/5 border border-alert/20">
                <AlertCircle className="h-5 w-5 text-alert mt-1" />
                <div>
                  <p className="font-medium text-foreground">Schedule conflict detected</p>
                  <p className="text-sm text-muted-foreground">Room 203 double-booked for tomorrow 2 PM - 15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                <Users className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Parent meeting request</p>
                  <p className="text-sm text-muted-foreground">Mrs. Williams requested meeting about Mike's performance - 1 hour ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;