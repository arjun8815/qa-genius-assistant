
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { AIChat } from "@/components/chat/AIChat";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TestTube, 
  Bug, 
  FileText, 
  MessageSquarePlus 
} from "lucide-react";

const Chat = () => {
  const [searchParams] = useSearchParams();
  const action = searchParams.get("action");
  const [title, setTitle] = useState("AI Chat Assistant");
  const [subtitle, setSubtitle] = useState("Get AI-powered help with your QA tasks");

  useEffect(() => {
    if (action) {
      switch (action) {
        case "generate-test-cases":
          setTitle("Generate Test Cases");
          setSubtitle("Create comprehensive test cases from requirements");
          break;
        case "suggest-edge-cases":
          setTitle("Suggest Edge Cases");
          setSubtitle("Identify potential edge scenarios for thorough testing");
          break;
        case "create-bug-report":
          setTitle("Frame a Bug Report");
          setSubtitle("Create structured and detailed bug reports");
          break;
        case "regression-scenarios":
          setTitle("List Regression Scenarios");
          setSubtitle("Generate regression test scenarios for your application");
          break;
        default:
          setTitle("AI Chat Assistant");
          setSubtitle("Get AI-powered help with your QA tasks");
      }
    }
  }, [action]);

  return (
    <AppLayout title={title} subtitle={subtitle} showActions={false}>
      <div className="grid gap-4 lg:grid-cols-4">
        <div className="lg:col-span-3 h-[calc(100vh-220px)]">
          <AIChat />
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common QA requests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2"
                onClick={() => window.location.href = "/chat?action=generate-test-cases"}
              >
                <TestTube className="h-4 w-4 text-qa-icon-testcase" />
                Generate Test Cases
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2"
                onClick={() => window.location.href = "/chat?action=suggest-edge-cases"}
              >
                <FileText className="h-4 w-4 text-qa-icon-edgecase" />
                Suggest Edge Cases
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2"
                onClick={() => window.location.href = "/chat?action=create-bug-report"}
              >
                <Bug className="h-4 w-4 text-qa-icon-bug" />
                Frame a Bug Report
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2"
                onClick={() => window.location.href = "/chat?action=regression-scenarios"}
              >
                <MessageSquarePlus className="h-4 w-4 text-qa-icon-regression" />
                List Regression Scenarios
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tips</CardTitle>
              <CardDescription>Get the most out of the AI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Be specific about requirements and user stories</p>
              <p>• Include relevant technical details</p>
              <p>• Upload design requirements for context</p>
              <p>• Specify test environments when relevant</p>
              <p>• Ask follow-up questions to refine results</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Chat;
