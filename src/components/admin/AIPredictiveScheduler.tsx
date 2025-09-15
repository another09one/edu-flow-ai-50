import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  Lightbulb
} from "lucide-react";

const AIPredictiveScheduler = () => {
  const aiMetrics = {
    efficiency: 94.2,
    conflictsResolved: 23,
    optimizationScore: 87.5,
    predictiveAccuracy: 91.8
  };

  const aiSuggestions = [
    {
      type: "optimization",
      title: "Room Utilization Improvement",
      description: "Move Physics Lab to Room 301 for 15% better efficiency",
      impact: "high",
      confidence: 92,
      icon: Target
    },
    {
      type: "prediction",
      title: "Conflict Prevention",
      description: "Potential scheduling conflict detected for next Thursday",
      impact: "medium",
      confidence: 88,
      icon: AlertTriangle
    },
    {
      type: "insight",
      title: "Peak Hours Analysis",
      description: "Consider adding more sections between 10-12 AM",
      impact: "medium",
      confidence: 85,
      icon: Lightbulb
    }
  ];

  const schedulingStatus = {
    isProcessing: false,
    lastOptimization: "2 hours ago",
    nextScheduled: "Tomorrow 6:00 AM",
    upcomingConflicts: 3
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      default: return 'bg-success text-success-foreground';
    }
  };

  const getSuggestionIcon = (suggestion: any) => {
    const IconComponent = suggestion.icon;
    return <IconComponent className="h-4 w-4" />;
  };

  return (
    <div className="space-y-6">
      {/* AI Status */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="mr-2 h-5 w-5 text-accent animate-glow" />
            AI System Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm font-medium text-foreground">Active & Learning</span>
              </div>
              <Badge className="bg-success/10 text-success">Online</Badge>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">System Efficiency</span>
                  <span className="font-medium text-foreground">{aiMetrics.efficiency}%</span>
                </div>
                <Progress value={aiMetrics.efficiency} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Predictive Accuracy</span>
                  <span className="font-medium text-foreground">{aiMetrics.predictiveAccuracy}%</span>
                </div>
                <Progress value={aiMetrics.predictiveAccuracy} className="h-2" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border">
              <div className="text-center">
                <p className="text-2xl font-bold text-success">{aiMetrics.conflictsResolved}</p>
                <p className="text-xs text-muted-foreground">Conflicts Resolved</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-accent">{schedulingStatus.upcomingConflicts}</p>
                <p className="text-xs text-muted-foreground">Predicted Issues</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Suggestions */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lightbulb className="mr-2 h-5 w-5 text-warning" />
            AI Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {aiSuggestions.map((suggestion, index) => (
              <div key={index} className="p-3 rounded-lg border border-border bg-card/30 hover-lift">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getSuggestionIcon(suggestion)}
                    <span className="font-medium text-sm text-foreground">{suggestion.title}</span>
                  </div>
                <Badge className={getImpactColor(suggestion.impact)}>
                  {suggestion.impact}
                </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{suggestion.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-3 w-3 text-accent" />
                    <span className="text-xs text-muted-foreground">
                      {suggestion.confidence}% confidence
                    </span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-xs h-6">
                    Apply
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="mr-2 h-5 w-5 text-primary" />
            AI Controls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Button 
              className="w-full btn-accent"
              disabled={schedulingStatus.isProcessing}
            >
              {schedulingStatus.isProcessing ? (
                <>
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  Optimizing...
                </>
              ) : (
                <>
                  <Brain className="mr-2 h-4 w-4" />
                  Run AI Optimization
                </>
              )}
            </Button>
            
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="text-xs">
                Conflict Scan
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                Resource Analysis
              </Button>
            </div>

            <div className="pt-3 border-t border-border text-xs text-muted-foreground space-y-1">
              <div className="flex justify-between">
                <span>Last optimization:</span>
                <span>{schedulingStatus.lastOptimization}</span>
              </div>
              <div className="flex justify-between">
                <span>Next scheduled:</span>
                <span>{schedulingStatus.nextScheduled}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIPredictiveScheduler;