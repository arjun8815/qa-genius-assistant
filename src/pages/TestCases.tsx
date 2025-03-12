
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ChevronRight,
  PlusCircle
} from "lucide-react";

// Mock data
const testCases = [
  {
    id: "TC-001",
    title: "User Authentication Flow",
    status: "Passed",
    priority: "High",
    component: "Auth",
    lastExecuted: "2 hours ago",
  },
  {
    id: "TC-002",
    title: "Password Reset Process",
    status: "Failed",
    priority: "High",
    component: "Auth",
    lastExecuted: "1 day ago",
  },
  {
    id: "TC-003",
    title: "User Profile Update",
    status: "Not Run",
    priority: "Medium",
    component: "Profile",
    lastExecuted: "Never",
  },
  {
    id: "TC-004",
    title: "Payment Processing",
    status: "Passed",
    priority: "Critical",
    component: "Payments",
    lastExecuted: "3 hours ago",
  },
  {
    id: "TC-005",
    title: "Product Listing Pagination",
    status: "Not Run",
    priority: "Low",
    component: "Product",
    lastExecuted: "Never",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Passed":
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
          <CheckCircle2 className="mr-1 h-3 w-3" /> Passed
        </Badge>
      );
    case "Failed":
      return (
        <Badge variant="destructive" className="hover:bg-red-700">
          <XCircle className="mr-1 h-3 w-3" /> Failed
        </Badge>
      );
    case "Not Run":
      return (
        <Badge variant="outline" className="text-muted-foreground">
          <Clock className="mr-1 h-3 w-3" /> Not Run
        </Badge>
      );
    default:
      return <Badge>{status}</Badge>;
  }
};

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "Critical":
      return <Badge className="bg-red-100 text-red-800">Critical</Badge>;
    case "High":
      return <Badge className="bg-orange-100 text-orange-800">High</Badge>;
    case "Medium":
      return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>;
    case "Low":
      return <Badge className="bg-blue-100 text-blue-800">Low</Badge>;
    default:
      return <Badge>{priority}</Badge>;
  }
};

const TestCases = () => {
  return (
    <AppLayout title="Test Cases" subtitle="Manage your test cases">
      <div className="space-y-4">
        {testCases.map((testCase) => (
          <Card key={testCase.id} className="transition-all hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      {testCase.id}
                    </span>
                    <h3 className="font-medium">{testCase.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {getStatusBadge(testCase.status)}
                    {getPriorityBadge(testCase.priority)}
                    <Badge className="bg-qa-purple-light/10 text-qa-purple">
                      {testCase.component}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-muted-foreground hidden sm:block">
                    Last executed: {testCase.lastExecuted}
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
          Add New Test Case
        </Button>
      </div>
    </AppLayout>
  );
};

export default TestCases;
