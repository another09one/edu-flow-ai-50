import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  Target, 
  BookOpen, 
  CheckCircle2,
  Plus,
  Timer,
  TrendingUp,
  Award
} from "lucide-react";

const StudyPlanner = () => {
  const [activeTab, setActiveTab] = useState("planner");
  const [newGoal, setNewGoal] = useState("");

  const studyGoals = [
    { id: 1, subject: "Mathematics", goal: "Complete Chapter 5 exercises", progress: 75, deadline: "Tomorrow", priority: "high" },
    { id: 2, subject: "Physics", goal: "Review quantum mechanics notes", progress: 45, deadline: "Oct 25", priority: "medium" },
    { id: 3, subject: "Chemistry", goal: "Prepare for lab test", progress: 90, deadline: "Oct 28", priority: "low" },
    { id: 4, subject: "History", goal: "Research essay sources", progress: 30, deadline: "Nov 2", priority: "medium" }
  ];

  const studySessions = [
    { subject: "Mathematics", duration: 120, date: "Today", efficiency: 85 },
    { subject: "Physics", duration: 90, date: "Yesterday", efficiency: 72 },
    { subject: "Chemistry", duration: 60, date: "2 days ago", efficiency: 95 },
    { subject: "History", duration: 45, date: "3 days ago", efficiency: 68 }
  ];

  const weeklyStats = {
    totalHours: 28,
    completedGoals: 12,
    avgEfficiency: 80,
    streakDays: 5
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 90) return 'text-success';
    if (efficiency >= 75) return 'text-primary';
    if (efficiency >= 60) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="mr-2 h-5 w-5 text-accent" />
            Smart Study Planner
          </CardTitle>
          <CardDescription>AI-powered study planning and progress tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-6">
            <Button
              variant={activeTab === "planner" ? "default" : "outline"}
              onClick={() => setActiveTab("planner")}
              className="flex-1"
            >
              <Target className="h-4 w-4 mr-2" />
              Goals
            </Button>
            <Button
              variant={activeTab === "sessions" ? "default" : "outline"}
              onClick={() => setActiveTab("sessions")}
              className="flex-1"
            >
              <Timer className="h-4 w-4 mr-2" />
              Sessions
            </Button>
            <Button
              variant={activeTab === "analytics" ? "default" : "outline"}
              onClick={() => setActiveTab("analytics")}
              className="flex-1"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Analytics
            </Button>
          </div>

          {/* Study Goals Tab */}
          {activeTab === "planner" && (
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Add new study goal..."
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={() => setNewGoal("")}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-3">
                {studyGoals.map((goal) => (
                  <div key={goal.id} className="p-4 rounded-lg border border-border bg-card/50 hover:bg-accent/5 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">{goal.goal}</p>
                          <p className="text-sm text-muted-foreground">{goal.subject}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getPriorityColor(goal.priority)}>
                          {goal.priority}
                        </Badge>
                        <Badge variant="outline">
                          Due {goal.deadline}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <span className="font-bold text-foreground">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>

                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline" className="flex-1">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Mark Complete
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Clock className="h-3 w-3 mr-1" />
                        Start Timer
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Study Sessions Tab */}
          {activeTab === "sessions" && (
            <div className="space-y-4">
              {studySessions.map((session, index) => (
                <div key={index} className="p-4 rounded-lg border border-border bg-card/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Timer className="h-4 w-4 text-accent" />
                      <div>
                        <p className="font-semibold text-foreground">{session.subject}</p>
                        <p className="text-sm text-muted-foreground">{session.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">{session.duration} min</p>
                      <p className={`text-sm font-medium ${getEfficiencyColor(session.efficiency)}`}>
                        {session.efficiency}% efficiency
                      </p>
                    </div>
                  </div>
                  <Progress value={session.efficiency} className="h-2" />
                </div>
              ))}
              <Button className="w-full btn-accent">
                <Plus className="h-4 w-4 mr-2" />
                Start New Study Session
              </Button>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg border border-border bg-card/50">
                  <div className="flex items-center justify-between">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-2xl font-bold text-foreground">{weeklyStats.totalHours}h</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Weekly Hours</p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card/50">
                  <div className="flex items-center justify-between">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span className="text-2xl font-bold text-foreground">{weeklyStats.completedGoals}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Goals Completed</p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card/50">
                  <div className="flex items-center justify-between">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <span className="text-2xl font-bold text-foreground">{weeklyStats.avgEfficiency}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Avg Efficiency</p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card/50">
                  <div className="flex items-center justify-between">
                    <Award className="h-5 w-5 text-warning" />
                    <span className="text-2xl font-bold text-foreground">{weeklyStats.streakDays}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Day Streak</p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-border bg-gradient-to-r from-accent/10 to-primary/10">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">Congratulations!</p>
                    <p className="text-sm text-muted-foreground">You're on a 5-day study streak. Keep it up!</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyPlanner;