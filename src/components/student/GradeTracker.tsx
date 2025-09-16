import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Award, 
  Target,
  BookOpen,
  Calendar,
  BarChart
} from "lucide-react";

const GradeTracker = () => {
  const subjects = [
    {
      name: "Mathematics",
      currentGrade: "A-",
      percentage: 88,
      trend: "up",
      trendValue: "+5%",
      assignments: [
        { name: "Quiz 1", grade: 85, weight: 10 },
        { name: "Midterm", grade: 92, weight: 30 },
        { name: "Project", grade: 88, weight: 20 },
        { name: "Quiz 2", grade: 90, weight: 10 }
      ],
      target: 90,
      prediction: 89
    },
    {
      name: "Physics",
      currentGrade: "B+",
      percentage: 85,
      trend: "stable",
      trendValue: "0%",
      assignments: [
        { name: "Lab Report 1", grade: 88, weight: 15 },
        { name: "Quiz 1", grade: 82, weight: 10 },
        { name: "Midterm", grade: 85, weight: 35 },
        { name: "Lab Report 2", grade: 87, weight: 15 }
      ],
      target: 88,
      prediction: 86
    },
    {
      name: "Chemistry",
      currentGrade: "A",
      percentage: 92,
      trend: "up",
      trendValue: "+3%",
      assignments: [
        { name: "Lab Practical", grade: 95, weight: 25 },
        { name: "Quiz 1", grade: 90, weight: 10 },
        { name: "Research Paper", grade: 92, weight: 20 },
        { name: "Midterm", grade: 91, weight: 30 }
      ],
      target: 93,
      prediction: 93
    },
    {
      name: "History",
      currentGrade: "B",
      percentage: 82,
      trend: "down",
      trendValue: "-2%",
      assignments: [
        { name: "Essay 1", grade: 85, weight: 20 },
        { name: "Quiz 1", grade: 78, weight: 10 },
        { name: "Midterm", grade: 80, weight: 40 },
        { name: "Presentation", grade: 84, weight: 15 }
      ],
      target: 85,
      prediction: 83
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-success" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-destructive" />;
      default: return <BarChart className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return 'text-success';
    if (percentage >= 80) return 'text-primary';
    if (percentage >= 70) return 'text-warning';
    return 'text-destructive';
  };

  const getProgressColor = (current: number, target: number) => {
    const ratio = current / target;
    if (ratio >= 1) return 'bg-success';
    if (ratio >= 0.9) return 'bg-primary';
    if (ratio >= 0.8) return 'bg-warning';
    return 'bg-destructive';
  };

  return (
    <Card className="card-gradient">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Award className="mr-2 h-5 w-5 text-success" />
          Interactive Grade Tracker
        </CardTitle>
        <CardDescription>Track your academic progress with AI predictions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {subjects.map((subject, index) => (
            <div key={index} className="p-4 rounded-lg border border-border bg-card/50 hover:bg-accent/5 transition-colors">
              {/* Subject Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">{subject.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`text-2xl font-bold ${getGradeColor(subject.percentage)}`}>
                        {subject.currentGrade}
                      </span>
                      <span className="text-sm text-muted-foreground">({subject.percentage}%)</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {getTrendIcon(subject.trend)}
                  <span className={`text-sm font-medium ${getTrendColor(subject.trend)}`}>
                    {subject.trendValue}
                  </span>
                </div>
              </div>

              {/* Progress to Target */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-accent" />
                    <span className="text-sm text-muted-foreground">Target: {subject.target}%</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {subject.percentage}/{subject.target}%
                  </span>
                </div>
                <Progress 
                  value={(subject.percentage / subject.target) * 100} 
                  className="h-2"
                />
              </div>

              {/* AI Prediction */}
              <div className="p-3 rounded-lg bg-gradient-to-r from-accent/10 to-primary/10 mb-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">AI Prediction:</span>
                  <span className={`font-bold ${getGradeColor(subject.prediction)}`}>
                    {subject.prediction}%
                  </span>
                  <span className="text-sm text-muted-foreground">final grade</span>
                </div>
              </div>

              {/* Recent Assignments */}
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Recent Assignments</span>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {subject.assignments.slice(-4).map((assignment, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded bg-muted/30">
                      <span className="text-sm text-foreground">{assignment.name}</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className={getGradeColor(assignment.grade)}>
                          {assignment.grade}%
                        </Badge>
                        <span className="text-xs text-muted-foreground">{assignment.weight}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GradeTracker;