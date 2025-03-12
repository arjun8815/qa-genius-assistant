
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

// Mock AI response function - In a real app, this would call an API
const getAIResponse = async (message: string): Promise<string> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  if (message.toLowerCase().includes("test case")) {
    return "I can help you create test cases. Here's a template:\n\n**Test Case ID**: TC-001\n**Title**: Verify user login with valid credentials\n**Description**: Test the login functionality with correct username and password\n**Preconditions**: User has a valid account\n**Steps**:\n1. Navigate to login page\n2. Enter valid username\n3. Enter valid password\n4. Click login button\n**Expected Result**: User should be successfully logged in and redirected to dashboard";
  }
  
  if (message.toLowerCase().includes("bug") || message.toLowerCase().includes("issue")) {
    return "Here's a bug report template you can use:\n\n**Bug ID**: BUG-001\n**Title**: Payment processing fails on checkout\n**Severity**: High\n**Description**: When users attempt to complete payment, an error occurs and the transaction fails\n**Steps to Reproduce**:\n1. Add items to cart\n2. Proceed to checkout\n3. Enter payment information\n4. Click 'Complete Payment'\n**Expected Behavior**: Payment processes successfully\n**Actual Behavior**: Error message appears and payment fails\n**Environment**: Chrome 98, Windows 11";
  }
  
  if (message.toLowerCase().includes("edge case") || message.toLowerCase().includes("scenario")) {
    return "Here are some edge case scenarios to consider:\n\n1. **Network Disconnection**: What happens if the user loses connection during a transaction?\n2. **Concurrent Users**: How does the system behave with multiple simultaneous users?\n3. **Input Validation**: Test with extreme values, special characters, and empty inputs\n4. **Browser Compatibility**: Test across different browsers and versions\n5. **Mobile Responsiveness**: Test on various device sizes and orientations";
  }
  
  return "I'm your QA assistant. I can help you generate test cases, suggest edge cases, create bug reports, and list regression scenarios. What would you like help with today?";
};

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm your QA assistant. I can help you generate test cases, suggest edge cases, create bug reports, and list regression scenarios. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    
    try {
      const response = await getAIResponse(inputValue);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="border-b px-4 py-3">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Bot className="h-5 w-5 text-qa-purple" />
          QA Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-3 max-w-[80%]",
                message.role === "user" ? "ml-auto" : ""
              )}
            >
              {message.role === "assistant" && (
                <Avatar className="h-8 w-8 bg-qa-purple-light text-white">
                  <Bot className="h-4 w-4" />
                </Avatar>
              )}
              <div
                className={cn(
                  "rounded-lg px-3 py-2 text-sm",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                <div className="whitespace-pre-line">{message.content}</div>
                <div
                  className={cn(
                    "mt-1 text-xs",
                    message.role === "user"
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  )}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
              {message.role === "user" && (
                <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
                  <User className="h-4 w-4" />
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <Avatar className="h-8 w-8 bg-qa-purple-light text-white">
                <Bot className="h-4 w-4" />
              </Avatar>
              <div className="rounded-lg bg-muted px-3 py-2 text-sm flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="border-t p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <Input
              type="text"
              placeholder="Ask something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
              className="flex-1"
            />
            <Button 
              type="submit" 
              size="icon" 
              disabled={isLoading || !inputValue.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
