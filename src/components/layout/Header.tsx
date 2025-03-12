
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  title: string;
  subtitle?: string;
  showActions?: boolean;
}

export default function Header({ title, subtitle, showActions = true }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between p-4 md:p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>
      {showActions && (
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pl-8"
            />
          </div>
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
          <Button size="sm" className="w-full sm:w-auto">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Item
          </Button>
        </div>
      )}
    </div>
  );
}
