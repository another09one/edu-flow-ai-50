import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  Brain, 
  LogOut, 
  User, 
  Home,
  Calendar,
  Users,
  Settings,
  BarChart3,
  BookOpen,
  Clock
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const DashboardLayout = ({ children, title, subtitle }: DashboardLayoutProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getNavigationItems = () => {
    const baseItems = [
      { name: "Dashboard", href: `/${user?.role}`, icon: Home },
      { name: "Schedule", href: `/${user?.role}/schedule`, icon: Calendar },
    ];

    if (user?.role === 'admin') {
      return [
        ...baseItems,
        { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
        { name: "Users", href: "/admin/users", icon: Users },
        { name: "Settings", href: "/admin/settings", icon: Settings },
      ];
    }

    if (user?.role === 'teacher') {
      return [
        ...baseItems,
        { name: "Classes", href: "/teacher/classes", icon: BookOpen },
        { name: "Students", href: "/teacher/students", icon: Users },
      ];
    }

    if (user?.role === 'student') {
      return [
        ...baseItems,
        { name: "Assignments", href: "/student/assignments", icon: BookOpen },
        { name: "Grades", href: "/student/grades", icon: BarChart3 },
      ];
    }

    return baseItems;
  };

  const navigationItems = getNavigationItems();

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-foreground">Edu-Flow</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div>
                <h1 className="text-xl font-semibold text-foreground">{title}</h1>
                {subtitle && (
                  <p className="text-sm text-muted-foreground">{subtitle}</p>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-foreground font-medium">{user?.name}</span>
                <span className="text-muted-foreground">({user?.role})</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-muted-foreground hover:text-destructive"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-card border-r border-border min-h-[calc(100vh-73px)]">
          <nav className="p-6">
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href || 
                  (item.href !== `/${user?.role}` && location.pathname.startsWith(item.href));
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? "sidebar-active" 
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;