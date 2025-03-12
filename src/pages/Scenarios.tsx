
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, PlusCircle } from "lucide-react";

// Mock data
const scenarios = [
  {
    id: "SC-001",
    title: "E-commerce Checkout Flow",
    type: "Functional",
    status: "Active",
    testCases: 12,
    lastUpdated: "Yesterday",
  },
  {
    id: "SC-002",
    title: "User Registration Process",
    type: "Functional",
    status: "Active",
    testCases: 8,
    lastUpdated: "3 days ago",
  },
  {
    id: "SC-003",
    title: "Mobile Responsive Layout",
    type: "UI/UX",
    status: "Draft",
    testCases: 5,
    lastUpdated: "1 week ago",
  },
  {
    id: "SC-004",
    title: "API Integration Tests",
    type: "Integration",
    status: "Active",
    testCases: 15,
    lastUpdated: "2 days ago",
  },
  {
    id: "SC-005",
    title: "Performance Under Load",
    type: "Performance",
    status: "Draft",
    testCases: 3,
    lastUpdated: "1 week ago",
  },
];

const getTypeBadge = (type: string) => {
  switch (type) {
    case "Functional":
      return <Badge className="bg-qa-purple-light/10 text-qa-purple">Functional</Badge>;
    case "UI/UX":
      return <Badge className="bg-qa-blue text-blue-700">UI/UX</Badge>;
    case "Integration":
      return <Badge className="bg-indigo-100 text-indigo-800">Integration</Badge>;
    case "Performance":
      return <Badge className="bg-yellow-100 text-yellow-800">Performance</Badge>;
    default:
      return <Badge>{type}</Badge>;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Active":
      return <Badge className="bg-green-100 text-green-800">Active</Badge>;
    case "Draft":
      return <Badge variant="outline" className="text-muted-foreground">Draft</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

const Scenarios = () => {
  return (
    <AppLayout title="Test Scenarios" subtitle="Manage your test scenarios">
      <div className="space-y-4">
        {scenarios.map((scenario) => (
          <Card key={scenario.id} className="transition-all hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      {scenario.id}
                    </span>
                    <h3 className="font-medium">{scenario.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {getTypeBadge(scenario.type)}
                    {getStatusBadge(scenario.status)}
                    <Badge variant="outline">
                      {scenario.testCases} Test Cases
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-muted-foreground hidden sm:block">
                    Last updated: {scenario.lastUpdated}
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
          Create New Scenario
        </Button>
      </div>
    </AppLayout>
  );
};

export default Scenarios;
