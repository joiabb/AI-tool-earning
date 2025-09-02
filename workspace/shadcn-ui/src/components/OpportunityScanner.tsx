import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, ExternalLink, RefreshCw, Zap } from 'lucide-react';

interface Opportunity {
  title: string;
  category: string;
  trend: string;
  potential: string;
  difficulty: string;
  description: string;
  demand: string;
  competition: string;
  timeToStart: string;
}

export default function OpportunityScanner() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(false);

  const mockOpportunities: Opportunity[] = [
    {
      title: "AI Image Generation Services",
      category: "AI Services",
      trend: "🔥 Hot",
      potential: "$500-3000/month",
      difficulty: "Easy",
      description: "Create custom images for businesses using AI tools like Midjourney and DALL-E",
      demand: "High",
      competition: "Medium",
      timeToStart: "1-2 weeks"
    },
    {
      title: "ChatGPT Prompt Engineering",
      category: "Consulting",
      trend: "📈 Rising",
      potential: "$1000-5000/month",
      difficulty: "Medium",
      description: "Help businesses optimize their AI prompts for better results",
      demand: "Very High",
      competition: "Low",
      timeToStart: "1 week"
    },
    {
      title: "AI-Powered Social Media Management",
      category: "Marketing",
      trend: "⚡ Trending",
      potential: "$800-4000/month",
      difficulty: "Medium",
      description: "Manage social media accounts using AI tools for content creation and scheduling",
      demand: "High",
      competition: "Medium",
      timeToStart: "2-3 weeks"
    },
    {
      title: "AI Content Localization",
      category: "Translation",
      trend: "🚀 Emerging",
      potential: "$600-2500/month",
      difficulty: "Easy-Medium",
      description: "Help businesses translate and localize content using AI translation tools",
      demand: "Growing",
      competition: "Low",
      timeToStart: "1-2 weeks"
    },
    {
      title: "AI-Enhanced Online Tutoring",
      category: "Education",
      trend: "📚 Stable",
      potential: "$400-2000/month",
      difficulty: "Easy",
      description: "Offer tutoring services enhanced with AI tools for personalized learning",
      demand: "High",
      competition: "High",
      timeToStart: "1 week"
    },
    {
      title: "AI Data Analysis Services",
      category: "Analytics",
      trend: "📊 Growing",
      potential: "$1200-6000/month",
      difficulty: "Hard",
      description: "Provide data analysis and insights using AI-powered analytics tools",
      demand: "Very High",
      competition: "Low",
      timeToStart: "3-4 weeks"
    }
  ];

  const scanOpportunities = () => {
    setLoading(true);
    setTimeout(() => {
      const shuffled = [...mockOpportunities].sort(() => 0.5 - Math.random());
      setOpportunities(shuffled.slice(0, 4));
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    scanOpportunities();
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDemandColor = (demand: string) => {
    switch (demand.toLowerCase()) {
      case 'very high': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'growing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            AI Opportunity Scanner
          </CardTitle>
          <CardDescription>
            Discover trending money-making opportunities in the AI space
          </CardDescription>
          <Button onClick={scanOpportunities} disabled={loading} className="w-fit">
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Scanning...' : 'Scan New Opportunities'}
          </Button>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {opportunities.map((opportunity, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                <Badge variant="secondary">{opportunity.trend}</Badge>
              </div>
              <CardDescription>{opportunity.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="font-semibold">Potential: </span>
                  <span className="text-green-600">{opportunity.potential}</span>
                </div>
                <div>
                  <span className="font-semibold">Time to Start: </span>
                  <span>{opportunity.timeToStart}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge className={getDifficultyColor(opportunity.difficulty)}>
                  {opportunity.difficulty}
                </Badge>
                <Badge className={getDemandColor(opportunity.demand)}>
                  {opportunity.demand} Demand
                </Badge>
                <Badge variant="outline">{opportunity.category}</Badge>
              </div>

              <div className="pt-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Competition: <strong>{opportunity.competition}</strong></span>
                  <Button size="sm" variant="outline">
                    Learn More <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {opportunities.length === 0 && !loading && (
        <Card className="text-center p-8">
          <Zap className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-500">Click "Scan New Opportunities" to discover trending money-making opportunities!</p>
        </Card>
      )}
    </div>
  );
}