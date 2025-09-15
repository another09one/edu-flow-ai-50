import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { UserCog, GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import logo from "@/assets/nextingen-logo.png";

const RoleSelectionPage = () => {
  const { user, setUserRole, logout } = useAuth();
  const navigate = useNavigate();

  const handleRoleSelect = (role: 'admin' | 'teacher' | 'student') => {
    setUserRole(role);
    navigate(`/${role}`);
  };

  const roles = [
    {
      id: 'admin' as const,
      title: 'Administrator',
      description: 'Full system access with analytics, user management, and AI scheduling controls.',
      icon: UserCog,
      features: ['System Analytics', 'User Management', 'AI Configuration', 'Resource Planning'],
      gradient: 'from-primary to-primary-glow'
    },
    {
      id: 'teacher' as const,
      title: 'Teacher',
      description: 'Manage classes, view schedules, and access student performance insights.',
      icon: GraduationCap,
      features: ['Class Management', 'Schedule Viewing', 'Student Insights', 'Resource Booking'],
      gradient: 'from-accent to-accent-glow'
    },
    {
      id: 'student' as const,
      title: 'Student',
      description: 'Access personal schedules, assignments, and academic tracking tools.',
      icon: BookOpen,
      features: ['Personal Schedule', 'Assignment Tracking', 'Grade Viewing', 'Resource Access'],
      gradient: 'from-alert to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center space-x-3 text-white hover:text-accent-glow transition-colors mb-6">
            <img src={logo} alt="NextIn GEN Logo" className="h-12 w-12" />
            <span className="text-3xl font-bold">NextIn GEN</span>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome, {user?.name}!
          </h1>
          <p className="text-xl text-white/80 mb-6">
            Choose your role to access the appropriate dashboard
          </p>
          <Button
            variant="outline"
            onClick={logout}
            className="glass text-white border-white/30 hover:bg-white/20"
          >
            Switch Account
          </Button>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {roles.map((role, index) => (
            <Card 
              key={role.id} 
              className="card-gradient hover-lift animate-bounce-in shadow-elegant group cursor-pointer" 
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleRoleSelect(role.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-4 rounded-full bg-gradient-to-r ${role.gradient} w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <role.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">{role.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {role.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {role.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full bg-gradient-to-r ${role.gradient} text-white hover:scale-105 transition-all duration-300 group-hover:shadow-lg`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRoleSelect(role.id);
                  }}
                >
                  Access Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Access based on current user role */}
        {user?.role && (
          <div className="text-center">
            <p className="text-white/60 mb-4">
              Or continue with your current role: {user.role}
            </p>
            <Button
              onClick={() => navigate(`/${user.role}`)}
              className="btn-accent"
            >
              Continue as {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoleSelectionPage;