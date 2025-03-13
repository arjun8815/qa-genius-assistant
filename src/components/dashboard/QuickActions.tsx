
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TestTube, 
  Bug, 
  FileText, 
  PlusCircle, 
  Upload, 
  MessageSquarePlus 
} from "lucide-react";

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Button 
            variant="outline" 
            className="h-auto justify-start gap-2 py-3"
            onClick={() => window.location.href = "/chat?action=generate-test-cases"}
          >
            <TestTube className="h-4 w-4 text-qa-icon-testcase" />
            <div className="flex flex-col items-start">
              <span>Generate Test Cases</span>
              <span className="text-xs text-muted-foreground">
                Create test cases from requirements
              </span>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-auto justify-start gap-2 py-3"
            onClick={() => window.location.href = "/chat?action=suggest-edge-cases"}
          >
            <FileText className="h-4 w-4 text-qa-icon-edgecase" />
            <div className="flex flex-col items-start">
              <span>Suggest Edge Cases</span>
              <span className="text-xs text-muted-foreground">
                Identify potential edge scenarios
              </span>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-auto justify-start gap-2 py-3"
            onClick={() => window.location.href = "/chat?action=create-bug-report"}
          >
            <Bug className="h-4 w-4 text-qa-icon-bug" />
            <div className="flex flex-col items-start">
              <span>Frame a Bug Report</span>
              <span className="text-xs text-muted-foreground">
                Create structured bug reports
              </span>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-auto justify-start gap-2 py-3"
            onClick={() => window.location.href = "/chat?action=regression-scenarios"}
          >
            <MessageSquarePlus className="h-4 w-4 text-qa-icon-regression" />
            <div className="flex flex-col items-start">
              <span>List Regression Scenarios</span>
              <span className="text-xs text-muted-foreground">
                Generate regression test scenarios
              </span>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-auto justify-start gap-2 py-3 col-span-1 sm:col-span-2"
            onClick={() => window.location.href = "/data-sources/upload"}
          >
            <Upload className="h-4 w-4 text-qa-icon-upload" />
            <div className="flex flex-col items-start">
              <span>Upload Requirements</span>
              <span className="text-xs text-muted-foreground">
                Import from Jira, Azure DevOps, or files
              </span>
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
