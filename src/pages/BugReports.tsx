
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertCircle, 
  AlertTriangle, 
  Info, 
  ChevronRight,
  PlusCircle
} from "lucide-react";

// Mock data
const bugReports = [
  {
    id: "BUG-001",
    title: "Payment processing fails on checkout",
    severity: "High",
    status: "Open",
    component: "Payments",
    assignee: "John Doe",
    reported: "1 day ago",
  },
  {
    id: "BUG-002",
    title: "Login button unresponsive on mobile devices",
    severity: "Medium",
    status: "In Progress",
    component: "Auth",
    assignee: "Jane Smith",
    reported: "3 days ago",
  },
  {
    id: "BUG-003",
    title: "Product images not loading in Safari",
    severity: "Low",
    status: "Open",
    component: "Product",
    assignee: "Unassigned",
    reported: "5 days ago",
  },
  {
    id: "BUG-004",
    title: "User session expires too quickly",
    severity: "Medium",
    status: "Closed",
    component: "Auth",
    assignee: "John Doe",
    reported: "1 week ago",
  },
];

const getSeverityBadge = (severity: string) => {
  switch (severity) {
    case "Critical":
      return (
        <Badge className="bg-red-100 text-red-800">
          <AlertCircle className="mr-1 h-3 w-3" /> Critical
        </Badge>
      );
    case "High":
      return (
        <Badge className="bg-orange-100 text-orange-800">
          <AlertTriangle className="mr-1 h-3 w-3" /> High
        </Badge>
      );
    case "Medium":
      return (
        <Badge className="bg-yellow-100 text-yellow-800">
          <AlertTriangle className="mr-1 h-3 w-3" /> Medium
        </Badge>
      );
    case "Low":
      return (
        <Badge className="bg-blue-100 text-blue-800">
          <Info className="mr-1 h-3 w-3" /> Low
        </Badge>
      );
    default:
      return <Badge>{severity}</Badge>;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Open":
      return <Badge variant="outline" className="text-red-600">Open</Badge>;
    case "In Progress":
      return <Badge className="bg-qa-blue text-blue-700">In Progress</Badge>;
    case "Closed":
      return <Badge className="bg-green-100 text-green-800">Closed</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

const BugReports = () => {
  return (
    <AppLayout title="Bug Reports" subtitle="Track and manage bug reports">
      <div className="space-y-4">
        {bugReports.map((bug) => (
          <Card key={bug.id} className="transition-all hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      {bug.id}
                    </span>
                    <h3 className="font-medium">{bug.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {getSeverityBadge(bug.severity)}
                    {getStatusBadge(bug.status)}
                    <Badge className="bg-qa-purple-light/10 text-qa-purple">
                      {bug.component}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-muted-foreground hidden sm:block">
                    <div>Assignee: {bug.assignee}</div>
                    <div>Reported: {bug.reported}</div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 p-0"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        <Button className="w-full py-6" variant="outline">
          <PlusCircle className="mr-2 h-4 w-4" />
          Report New Bug
        </Button>
      </div>
    </AppLayout>
  );
};

export default BugReports;
