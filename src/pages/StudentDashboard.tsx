import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import StudyPlanner from "@/components/student/StudyPlanner";
import GradeTracker from "@/components/student/GradeTracker";
import { 
  Calendar, 
  BookOpen, 
  Clock, 
  TrendingUp, 
  Award,
  AlertCircle,
  CheckCircle2,
  FileText,
  Users
} from "lucide-react";

const StudentDashboard = () => {
  const todaySchedule = [
    { time: "09:00 AM", subject: "Mathematics", teacher: "Dr. Smith", room: "Room 101", type: "lecture" },
    { time: "11:00 AM", subject: "Physics", teacher: "Prof. Johnson", room: "Lab 203", type: "lab" },
    { time: "02:00 PM", subject: "Chemistry", teacher: "Dr. Brown", room: "Lab 105", type: "lecture" },
    { time: "04:00 PM", subject: "Study Group", teacher: "Self-Study", room: "Library", type: "study" }
  ];

  const upcomingAssignments = [
    { title: "Math Quiz Chapter 5", subject: "Mathematics", dueDate: "Tomorrow", status: "pending", priority: "high" },
    { title: "Physics Lab Report", subject: "Physics", dueDate: "Oct 25", status: "in-progress", priority: "medium" },
    { title: "Chemistry Project", subject: "Chemistry", dueDate: "Oct 28", status: "not-started", priority: "low" },
    { title: "History Essay", subject: "History", dueDate: "Nov 2", status: "completed", priority: "low" }
  ];

  const gradeOverview = [
    { subject: "Mathematics", grade: "A-", progress: 88, trend: "up" },
    { subject: "Physics", grade: "B+", progress: 85, trend: "stable" },
    { subject: "Chemistry", grade: "A", progress: 92, trend: "up" },
    { subject: "History", grade: "B", progress: 82, trend: "down" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success text-success-foreground';
      case 'in-progress': return 'bg-warning text-warning-foreground';
      case 'pending': return 'bg-alert text-alert-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-destructive bg-destructive/10';
      case 'medium': return 'border-warning bg-warning/10';
      default: return 'border-border';
    }
  };

  return (
    <DashboardLayout 
      title="Student Dashboard" 
      subtitle="Track your academic progress and manage assignments"
    >
      <div className="space-y-8 animate-fade-in">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="kpi-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Classes Today</p>
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
                  <p className="text-sm font-medium text-muted-foreground">Pending Tasks</p>
                  <p className="text-3xl font-bold text-foreground">3</p>
                </div>
                <FileText className="h-8 w-8 text-alert" />
              </div>
            </CardContent>
          </Card>

          <Card className="kpi-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Overall GPA</p>
                  <p className="text-3xl font-bold text-foreground">3.7</p>
                </div>
                <Award className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="kpi-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Study Hours</p>
                  <p className="text-3xl font-bold text-foreground">28</p>
                </div>
                <Clock className="h-8 w-8 text-primary" />
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
              <CardDescription>Your classes and activities for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaySchedule.map((classItem, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <Clock className="h-4 w-4 text-muted-foreground mx-auto mb-1" />
                        <p className="text-sm font-medium text-foreground">{classItem.time}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{classItem.subject}</p>
                        <p className="text-sm text-muted-foreground">{classItem.teacher} • {classItem.room}</p>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary"
                      className={classItem.type === 'lab' ? 'bg-primary/10 text-primary' : ''}
                    >
                      {classItem.type}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 btn-accent">
                View Full Calendar
              </Button>
            </CardContent>
          </Card>

          {/* Assignments */}
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-primary" />
                Assignments & Tasks
              </CardTitle>
              <CardDescription>Track your assignment progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAssignments.map((assignment, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${getPriorityColor(assignment.priority)}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{assignment.title}</h4>
                      <Badge className={getStatusColor(assignment.status)}>
                        {assignment.status.replace('-', ' ')}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                      <p className="text-sm font-medium text-foreground">Due {assignment.dueDate}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View All Assignments
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Study Tools Section */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Study Tools</h2>
          <StudyPlanner />
        </section>

        {/* Grade Tracking Section */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Academic Performance</h2>
          <GradeTracker />
        </section>

        {/* Recent Updates */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-alert" />
              Recent Updates & Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-success/5 border border-success/20">
                <CheckCircle2 className="h-5 w-5 text-success mt-1" />
                <div>
                  <p className="font-medium text-foreground">Assignment graded</p>
                  <p className="text-sm text-muted-foreground">Your History Essay received grade A- - 30 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-alert/5 border border-alert/20">
                <AlertCircle className="h-5 w-5 text-alert mt-1" />
                <div>
                  <p className="font-medium text-foreground">Upcoming deadline</p>
                  <p className="text-sm text-muted-foreground">Math Quiz Chapter 5 is due tomorrow - 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                <Users className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Study group invitation</p>
                  <p className="text-sm text-muted-foreground">You've been invited to Physics study group - 3 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;