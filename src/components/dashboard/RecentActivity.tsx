
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TestTube, Bug, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data
const recentActivities = [
  {
    id: 1,
    type: "test-case",
    title: "User Authentication Flow",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    type: "bug-report",
    title: "Payment Processing Error",
    timestamp: "Yesterday",
  },
  {
    id: 3,
    type: "scenario",
    title: "Mobile Responsive Layout",
    timestamp: "2 days ago",
  },
  {
    id: 4,
    type: "test-case",
    title: "API Integration Tests",
    timestamp: "3 days ago",
  },
];

const getActivityIcon = (type: string) => {
  const iconProps = {
    className: "h-4 w-4",
    strokeWidth: 2,
  };
  
  switch (type) {
    case "test-case":
      return <TestTube {...iconProps} className="h-4 w-4 text-qa-icon-testcase" />;
    case "bug-report":
      return <Bug {...iconProps} className="h-4 w-4 text-qa-icon-bug" />;
    case "scenario":
      return <FileText {...iconProps} className="h-4 w-4 text-qa-icon-scenario" />;
    default:
      return null;
  }
};

const getActivityBadge = (type: string) => {
  switch (type) {
    case "test-case":
      return <Badge variant="outline" className="qa-badge-purple">Test Case</Badge>;
    case "bug-report":
      return <Badge variant="outline" className="qa-badge-orange">Bug Report</Badge>;
    case "scenario":
      return <Badge variant="outline" className="qa-badge-blue">Scenario</Badge>;
    default:
      return null;
  }
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center space-x-3 rounded-md border p-3 transition-all hover:bg-accent"
            >
              <div className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border",
                activity.type === "test-case" ? "border-qa-icon-testcase" :
                activity.type === "bug-report" ? "border-qa-icon-bug" :
                "border-qa-icon-scenario"
              )}>
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{activity.title}</p>
                  <span className="text-xs text-muted-foreground">
                    {activity.timestamp}
                  </span>
                </div>
                <div>{getActivityBadge(activity.type)}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
