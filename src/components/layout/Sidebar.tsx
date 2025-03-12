
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  TestTube, 
  Bug, 
  FileText, 
  Database, 
  Settings, 
  Moon, 
  Sun, 
  PlusCircle 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

const NavItem = ({ 
  icon: Icon, 
  label, 
  path, 
  isCollapsed, 
  isActive 
}: { 
  icon: any; 
  label: string; 
  path: string; 
  isCollapsed: boolean; 
  isActive: boolean;
}) => {
  const navigate = useNavigate();
  
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-3 px-3 py-2",
        isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"
      )}
      onClick={() => navigate(path)}
    >
      <Icon className="h-5 w-5" />
      {!isCollapsed && <span className="font-medium">{label}</span>}
    </Button>
  );
};

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { setTheme, theme } = useTheme();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: TestTube, label: "Test Cases", path: "/test-cases" },
    { icon: Bug, label: "Bug Reports", path: "/bug-reports" },
    { icon: FileText, label: "Scenarios", path: "/scenarios" },
    { icon: Database, label: "Data Sources", path: "/data-sources" },
  ];

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-sidebar transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-14 items-center px-3 py-4">
        {!isCollapsed && (
          <h1 className="text-lg font-semibold text-foreground">QA Genius</h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={cn("ml-auto shrink-0")}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
              isCollapsed={isCollapsed}
              isActive={location.pathname === item.path}
            />
          ))}
        </nav>
      </div>
      <div className="mt-auto border-t p-2">
        <div className="grid gap-1">
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "justify-start gap-3",
              isCollapsed && "justify-center px-0"
            )}
            onClick={() => navigate("/settings")}
          >
            <Settings className="h-4 w-4" />
            {!isCollapsed && <span>Settings</span>}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "justify-start gap-3",
              isCollapsed && "justify-center px-0"
            )}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <>
                <Sun className="h-4 w-4" />
                {!isCollapsed && <span>Light Mode</span>}
              </>
            ) : (
              <>
                <Moon className="h-4 w-4" />
                {!isCollapsed && <span>Dark Mode</span>}
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
