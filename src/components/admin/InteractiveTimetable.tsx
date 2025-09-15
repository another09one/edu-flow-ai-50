import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  AlertCircle,
  CheckCircle
} from "lucide-react";

const InteractiveTimetable = () => {
  const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", "12:00", 
    "13:00", "14:00", "15:00", "16:00", "17:00"
  ];
  
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  
  const scheduleData: { [key: string]: any[] } = {
    "Monday-09:00": [
      { subject: "Mathematics", room: "Room 101", teacher: "Dr. Smith", students: 28, status: "scheduled" }
    ],
    "Monday-11:00": [
      { subject: "Physics Lab", room: "Lab 203", teacher: "Prof. Johnson", students: 24, status: "conflict" }
    ],
    "Tuesday-09:00": [
      { subject: "Chemistry", room: "Lab 105", teacher: "Dr. Brown", students: 30, status: "scheduled" }
    ],
    "Tuesday-14:00": [
      { subject: "Biology", room: "Room 204", teacher: "Dr. Wilson", students: 25, status: "scheduled" }
    ],
    "Wednesday-10:00": [
      { subject: "English", room: "Room 301", teacher: "Ms. Davis", students: 32, status: "scheduled" }
    ],
    "Wednesday-15:00": [
      { subject: "History", room: "Room 302", teacher: "Mr. Taylor", students: 29, status: "scheduled" }
    ],
    "Thursday-09:00": [
      { subject: "Computer Science", room: "Lab 401", teacher: "Dr. Lee", students: 20, status: "ai-optimized" }
    ],
    "Friday-11:00": [
      { subject: "Art Class", room: "Studio A", teacher: "Ms. Garcia", students: 18, status: "scheduled" }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'conflict': return 'bg-destructive/20 border-destructive text-destructive-foreground';
      case 'ai-optimized': return 'bg-accent/20 border-accent text-accent-foreground';
      case 'scheduled': return 'bg-primary/20 border-primary text-primary-foreground';
      default: return 'bg-muted/20 border-border text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'conflict': return <AlertCircle className="h-3 w-3" />;
      case 'ai-optimized': return <CheckCircle className="h-3 w-3" />;
      default: return <Calendar className="h-3 w-3" />;
    }
  };

  return (
    <Card className="card-gradient">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-accent" />
            Weekly Schedule Overview
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">Week of Oct 21, 2024</span>
            <Button variant="outline" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-6 gap-2 mb-4">
          <div></div>
          {days.map((day) => (
            <div key={day} className="text-center">
              <div className="font-semibold text-sm text-foreground">{day}</div>
              <div className="text-xs text-muted-foreground">Oct {21 + days.indexOf(day)}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-6 gap-2 max-h-96 overflow-y-auto">
          {timeSlots.map((time) => (
            <div key={time} className="contents">
              <div className="py-2 text-xs font-medium text-muted-foreground text-right pr-2">
                {time}
              </div>
              {days.map((day) => {
                const key = `${day}-${time}`;
                const classes = scheduleData[key] || [];
                
                return (
                  <div key={key} className="min-h-[60px] border border-border/50 rounded p-1 bg-card/30">
                    {classes.map((classItem, index) => (
                      <div
                        key={index}
                        className={`p-2 rounded text-xs mb-1 border ${getStatusColor(classItem.status)} hover-lift cursor-pointer`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(classItem.status)}
                            <span className="font-medium truncate">{classItem.subject}</span>
                          </div>
                          <MoreVertical className="h-3 w-3 opacity-50" />
                        </div>
                        <div className="text-xs opacity-75">
                          <div>{classItem.room}</div>
                          <div>{classItem.teacher}</div>
                          <div>{classItem.students} students</div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-primary/20 border border-primary rounded"></div>
              <span className="text-muted-foreground">Scheduled</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-accent/20 border border-accent rounded"></div>
              <span className="text-muted-foreground">AI Optimized</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-destructive/20 border border-destructive rounded"></div>
              <span className="text-muted-foreground">Conflict</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline">
              Export Schedule
            </Button>
            <Button size="sm" className="btn-accent">
              AI Optimize
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveTimetable;