import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  UserCheck, 
  UserX, 
  Clock, 
  Award,
  MessageCircle,
  TrendingUp,
  Search
} from "lucide-react";

const InteractiveClassManager = () => {
  const [selectedClass, setSelectedClass] = useState("mathematics");
  const [searchTerm, setSearchTerm] = useState("");

  const classes = {
    mathematics: {
      name: "Mathematics - Advanced Calculus",
      totalStudents: 28,
      present: 26,
      absent: 2,
      time: "09:00 AM - 10:30 AM",
      avgGrade: 85,
      students: [
        { id: 1, name: "Alice Johnson", status: "present", grade: 92, participation: 95 },
        { id: 2, name: "Bob Smith", status: "present", grade: 78, participation: 80 },
        { id: 3, name: "Carol Brown", status: "absent", grade: 88, participation: 85 },
        { id: 4, name: "David Wilson", status: "present", grade: 94, participation: 90 },
        { id: 5, name: "Emma Davis", status: "present", grade: 82, participation: 88 }
      ]
    },
    physics: {
      name: "Physics - Quantum Mechanics",
      totalStudents: 24,
      present: 22,
      absent: 2,
      time: "11:00 AM - 12:30 PM",
      avgGrade: 79,
      students: [
        { id: 1, name: "Frank Miller", status: "present", grade: 86, participation: 75 },
        { id: 2, name: "Grace Lee", status: "present", grade: 91, participation: 95 },
        { id: 3, name: "Henry Taylor", status: "absent", grade: 65, participation: 60 },
        { id: 4, name: "Ivy Chen", status: "present", grade: 89, participation: 85 }
      ]
    }
  };

  const currentClass = classes[selectedClass as keyof typeof classes];
  
  const filteredStudents = currentClass.students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    return status === 'present' ? 'bg-success text-success-foreground' : 'bg-destructive text-destructive-foreground';
  };

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return 'text-success';
    if (grade >= 80) return 'text-primary';
    if (grade >= 70) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="space-y-6">
      {/* Class Selection */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5 text-primary" />
            Interactive Class Manager
          </CardTitle>
          <CardDescription>Manage your active classes in real-time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Button
              variant={selectedClass === "mathematics" ? "default" : "outline"}
              onClick={() => setSelectedClass("mathematics")}
              className="flex-1"
            >
              Mathematics
            </Button>
            <Button
              variant={selectedClass === "physics" ? "default" : "outline"}
              onClick={() => setSelectedClass("physics")}
              className="flex-1"
            >
              Physics
            </Button>
          </div>

          {/* Class Overview */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-lg border border-border bg-card/50">
              <div className="flex items-center justify-between">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">{currentClass.totalStudents}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Total Students</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card/50">
              <div className="flex items-center justify-between">
                <UserCheck className="h-5 w-5 text-success" />
                <span className="text-2xl font-bold text-foreground">{currentClass.present}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Present</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card/50">
              <div className="flex items-center justify-between">
                <UserX className="h-5 w-5 text-destructive" />
                <span className="text-2xl font-bold text-foreground">{currentClass.absent}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Absent</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card/50">
              <div className="flex items-center justify-between">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-2xl font-bold text-foreground">{currentClass.avgGrade}%</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Avg Grade</p>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Student List */}
          <div className="space-y-3">
            {filteredStudents.map((student) => (
              <div key={student.id} className="p-4 rounded-lg border border-border bg-card/50 hover:bg-accent/5 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{student.name}</p>
                      <p className="text-sm text-muted-foreground">Student ID: {student.id.toString().padStart(3, '0')}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(student.status)}>
                    {student.status}
                  </Badge>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">Grade</span>
                      <span className={`font-bold ${getGradeColor(student.grade)}`}>{student.grade}%</span>
                    </div>
                    <Progress value={student.grade} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">Participation</span>
                      <span className={`font-bold ${getGradeColor(student.participation)}`}>{student.participation}%</span>
                    </div>
                    <Progress value={student.participation} className="h-2" />
                  </div>
                </div>

                <div className="flex space-x-2 mt-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <MessageCircle className="h-3 w-3 mr-1" />
                    Message
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Analytics
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveClassManager;