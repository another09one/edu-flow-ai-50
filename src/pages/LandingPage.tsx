import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  Zap, 
  Shield,
  Clock,
  BarChart3,
  Bot
} from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
import logo from "@/assets/nextingen-logo.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="NextIn GEN Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-foreground">NextIn GEN</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="font-medium">
                Login
              </Button>
            </Link>
            <Link to="/login">
              <Button className="btn-hero">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="AI-powered educational scheduling interface" 
            className="w-full h-full object-cover opacity-20" 
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Next Generation
              <span className="block text-accent-glow">Academic Management</span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Revolutionary AI-powered system that transforms educational scheduling, 
              optimizes resources, and delivers predictive academic insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button className="btn-hero text-lg px-10 py-6">
                  Start Free Trial
                </Button>
              </Link>
              <Button variant="outline" className="glass text-white border-white/30 hover:bg-white/20 text-lg px-10 py-6">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-4xl font-bold text-foreground mb-4">
              Intelligent Scheduling Solutions
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of academic management with AI-driven insights and automated optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Bot,
                title: "AI Conflict Resolution",
                description: "Automatically detect and resolve scheduling conflicts before they impact your institution."
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description: "Forecast resource needs and optimize utilization with advanced machine learning."
              },
              {
                icon: Clock,
                title: "Real-time Updates",
                description: "Instant synchronization across all platforms with live scheduling modifications."
              },
              {
                icon: BarChart3,
                title: "Performance Insights",
                description: "Comprehensive dashboards with actionable insights for better decision making."
              }
            ].map((feature, index) => (
              <Card key={index} className="kpi-card hover-lift animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-4">
                  <feature.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h3 className="text-4xl font-bold text-foreground mb-6">
                Built for Modern Education
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Multi-Role Management",
                    description: "Seamless collaboration between administrators, teachers, and students."
                  },
                  {
                    icon: Shield,
                    title: "Enterprise Security",
                    description: "Bank-level security with role-based access control and data encryption."
                  },
                  {
                    icon: Zap,
                    title: "Lightning Fast",
                    description: "Optimized performance handling thousands of concurrent users effortlessly."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <benefit.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant">
              <div className="text-center">
                <Calendar className="h-16 w-16 text-primary mx-auto mb-6" />
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Transform Your Institution?
                </h4>
                <p className="text-muted-foreground mb-6">
                  Join thousands of educational institutions already using Edu-Flow 
                  to streamline their academic operations.
                </p>
                <Link to="/login">
                  <Button className="btn-accent w-full">
                    Start Your Journey
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={logo} alt="NextIn GEN Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-foreground">NextIn GEN</span>
          </div>
          <p className="text-muted-foreground">
            Revolutionizing academic management with next-generation AI solutions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;