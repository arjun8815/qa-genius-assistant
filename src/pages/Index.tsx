
import AppLayout from "@/components/layout/AppLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { AIChat } from "@/components/chat/AIChat";
import { 
  TestTube, 
  Bug, 
  FileText, 
  Zap 
} from "lucide-react";

const Dashboard = () => {
  return (
    <AppLayout 
      title="Dashboard" 
      subtitle="Welcome to QA Genius Assistant"
      showActions={false}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Test Cases"
          value="128"
          description="+12 this week"
          icon={<TestTube className="h-4 w-4 text-qa-icon-testcase" />}
        />
        <StatCard
          title="Open Bug Reports"
          value="24"
          description="-3 this week"
          icon={<Bug className="h-4 w-4 text-qa-icon-bug" />}
        />
        <StatCard
          title="Test Scenarios"
          value="56"
          description="+8 this week"
          icon={<FileText className="h-4 w-4 text-qa-icon-scenario" />}
        />
        <StatCard
          title="AI Suggestions"
          value="93"
          description="+15 this week"
          icon={<Zap className="h-4 w-4 text-qa-icon-aisuggestion" />}
        />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <div className="space-y-4">
          <QuickActions />
          <RecentActivity />
        </div>
        <div className="h-[600px]">
          <AIChat />
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
