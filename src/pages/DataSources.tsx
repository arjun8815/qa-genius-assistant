
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Database, 
  File, 
  UploadCloud, 
  Link,
  Trash2,
  ExternalLink
} from "lucide-react";

// Mock data
const dataSources = [
  {
    id: "DS-001",
    name: "Product Requirements Document",
    type: "PDF",
    source: "Uploaded",
    size: "1.2 MB",
    dateAdded: "2 days ago",
  },
  {
    id: "DS-002",
    name: "User Stories - Sprint 24",
    type: "Jira",
    source: "Connected",
    size: "42 items",
    dateAdded: "1 week ago",
  },
  {
    id: "DS-003",
    name: "API Documentation",
    type: "Notion",
    source: "Connected",
    size: "15 pages",
    dateAdded: "3 days ago",
  },
  {
    id: "DS-004",
    name: "UI Design Specs",
    type: "Figma",
    source: "Connected",
    size: "8 frames",
    dateAdded: "Yesterday",
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "PDF":
      return <File className="h-10 w-10 text-red-500" />;
    case "Jira":
      return <Database className="h-10 w-10 text-blue-500" />;
    case "Notion":
      return <FileText className="h-10 w-10 text-gray-800" />;
    case "Figma":
      return <FileText className="h-10 w-10 text-purple-500" />;
    default:
      return <File className="h-10 w-10" />;
  }
};

const DataSources = () => {
  return (
    <AppLayout title="Data Sources" subtitle="Manage your imported requirements and documents">
      <div className="grid gap-4 md:grid-cols-3">
        {dataSources.map((source) => (
          <Card key={source.id} className="transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                {getTypeIcon(source.type)}
                <h3 className="mt-4 font-medium">{source.name}</h3>
                <div className="mt-2 flex gap-2">
                  <Badge className="bg-qa-purple-light/10 text-qa-purple">
                    {source.type}
                  </Badge>
                  <Badge variant="outline">
                    {source.source}
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {source.size} • Added {source.dateAdded}
                </p>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" /> Open
                  </Button>
                  <Button size="sm" variant="outline" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        <Card className="transition-all hover:shadow-md flex items-center justify-center min-h-[248px]">
          <CardContent className="p-6 text-center">
            <UploadCloud className="h-10 w-10 mx-auto text-muted-foreground" />
            <h3 className="mt-4 font-medium">Add Data Source</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Upload files or connect to external sources
            </p>
            <div className="mt-4 flex gap-2 justify-center">
              <Button size="sm">
                <UploadCloud className="mr-2 h-4 w-4" /> Upload
              </Button>
              <Button size="sm" variant="outline">
                <Link className="mr-2 h-4 w-4" /> Connect
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default DataSources;
