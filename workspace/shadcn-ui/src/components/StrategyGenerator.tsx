import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Sparkles, DollarSign, Clock, Target } from 'lucide-react';

interface Strategy {
  title: string;
  description: string;
  potential: string;
  timeframe: string;
  difficulty: string;
  steps: string[];
  tags: string[];
}

export default function StrategyGenerator() {
  const [skills, setSkills] = useState('');
  const [timeAvailable, setTimeAvailable] = useState('');
  const [budget, setBudget] = useState('');
  const [strategy, setStrategy] = useState<Strategy | null>(null);
  const [loading, setLoading] = useState(false);

  const strategies: Strategy[] = [
    {
      title: "AI Content Creation Business",
      description: "Leverage AI tools to create content for businesses and individuals",
      potential: "$2,000-$8,000/month",
      timeframe: "2-4 weeks to start",
      difficulty: "Medium",
      steps: [
        "Learn AI content tools (ChatGPT, Claude, Jasper)",
        "Create portfolio samples",
        "Set up social media presence",
        "Find clients on Upwork, Fiverr",
        "Scale with automation"
      ],
      tags: ["AI", "Content", "Writing", "Marketing"]
    },
    {
      title: "AI-Powered Dropshipping",
      description: "Use AI to find winning products and automate your dropshipping business",
      potential: "$1,500-$10,000/month",
      timeframe: "3-6 weeks to start",
      difficulty: "Medium-High",
      steps: [
        "Research trending products with AI tools",
        "Set up Shopify store",
        "Create AI-generated product descriptions",
        "Run targeted ads",
        "Automate customer service with chatbots"
      ],
      tags: ["E-commerce", "AI", "Automation", "Marketing"]
    },
    {
      title: "AI Tutoring & Course Creation",
      description: "Create and sell AI-enhanced educational content and tutoring services",
      potential: "$1,000-$5,000/month",
      timeframe: "2-3 weeks to start",
      difficulty: "Low-Medium",
      steps: [
        "Choose your expertise area",
        "Create course outline with AI assistance",
        "Record video content",
        "Set up on Udemy/Teachable",
        "Market through social media"
      ],
      tags: ["Education", "AI", "Courses", "Teaching"]
    }
  ];

  const generateStrategy = () => {
    setLoading(true);
    setTimeout(() => {
      const randomStrategy = strategies[Math.floor(Math.random() * strategies.length)];
      setStrategy(randomStrategy);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            AI Strategy Generator
          </CardTitle>
          <CardDescription>
            Get personalized money-making strategies powered by AI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="skills">Your Skills/Interests</Label>
              <Input
                id="skills"
                placeholder="e.g., writing, design, coding, marketing"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="time">Time Available</Label>
              <Select value={timeAvailable} onValueChange={setTimeAvailable}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time commitment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="part-time">Part-time (5-15 hrs/week)</SelectItem>
                  <SelectItem value="full-time">Full-time (40+ hrs/week)</SelectItem>
                  <SelectItem value="weekend">Weekends only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="budget">Starting Budget</Label>
            <Select value={budget} onValueChange={setBudget}>
              <SelectTrigger>
                <SelectValue placeholder="Select your budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-100">$0 - $100</SelectItem>
                <SelectItem value="100-500">$100 - $500</SelectItem>
                <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                <SelectItem value="1000+">$1,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            onClick={generateStrategy} 
            className="w-full" 
            disabled={loading}
          >
            {loading ? 'Generating Strategy...' : 'Generate AI Strategy'}
          </Button>
        </CardContent>
      </Card>

      {strategy && (
        <Card className="border-2 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Target className="w-5 h-5" />
              {strategy.title}
            </CardTitle>
            <CardDescription className="text-green-700">
              {strategy.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span className="font-semibold">{strategy.potential}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>{strategy.timeframe}</span>
              </div>
              <div>
                <Badge variant={strategy.difficulty === 'Low-Medium' ? 'secondary' : 'default'}>
                  {strategy.difficulty}
                </Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Action Steps:</h4>
              <ol className="list-decimal list-inside space-y-1">
                {strategy.steps.map((step: string, index: number) => (
                  <li key={index} className="text-sm">{step}</li>
                ))}
              </ol>
            </div>

            <div className="flex flex-wrap gap-2">
              {strategy.tags.map((tag: string) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}