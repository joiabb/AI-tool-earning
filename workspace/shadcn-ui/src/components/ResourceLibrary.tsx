import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, ExternalLink, Video, FileText, Users, Zap } from 'lucide-react';

export default function ResourceLibrary() {
  const resources = [
    {
      title: "Complete Guide to AI Content Creation",
      type: "Guide",
      category: "Content Creation",
      description: "Step-by-step guide to building a profitable AI content creation business",
      icon: FileText,
      difficulty: "Beginner",
      estimatedTime: "30 min read",
      tags: ["AI", "Content", "Business"]
    },
    {
      title: "AI Tools Masterclass",
      type: "Video Course",
      category: "Education",
      description: "Learn to use ChatGPT, Claude, Midjourney, and other AI tools effectively",
      icon: Video,
      difficulty: "Intermediate",
      estimatedTime: "2 hours",
      tags: ["AI Tools", "Training", "Hands-on"]
    },
    {
      title: "Freelancing with AI Services",
      type: "Template",
      category: "Business",
      description: "Ready-to-use templates for proposals, contracts, and pricing for AI services",
      icon: FileText,
      difficulty: "Beginner",
      estimatedTime: "15 min setup",
      tags: ["Templates", "Freelancing", "Business"]
    },
    {
      title: "AI Entrepreneurs Community",
      type: "Community",
      category: "Networking",
      description: "Join thousands of entrepreneurs building AI-powered businesses",
      icon: Users,
      difficulty: "All Levels",
      estimatedTime: "Ongoing",
      tags: ["Community", "Networking", "Support"]
    },
    {
      title: "Prompt Engineering Secrets",
      type: "Ebook",
      category: "Technical",
      description: "Advanced techniques for creating high-converting AI prompts",
      icon: Zap,
      difficulty: "Advanced",
      estimatedTime: "1 hour read",
      tags: ["Prompts", "AI", "Advanced"]
    },
    {
      title: "AI Business Case Studies",
      type: "Case Study",
      category: "Inspiration",
      description: "Real success stories from AI entrepreneurs making $10k+/month",
      icon: BookOpen,
      difficulty: "All Levels",
      estimatedTime: "45 min read",
      tags: ["Success Stories", "Inspiration", "Real Examples"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'guide': return 'bg-blue-100 text-blue-800';
      case 'video course': return 'bg-purple-100 text-purple-800';
      case 'template': return 'bg-orange-100 text-orange-800';
      case 'community': return 'bg-pink-100 text-pink-800';
      case 'ebook': return 'bg-indigo-100 text-indigo-800';
      case 'case study': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-500" />
            Resource Library
          </CardTitle>
          <CardDescription>
            Curated resources to help you succeed with AI-powered income generation
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Icon className="w-8 h-8 text-indigo-500 mb-2" />
                  <Badge className={getTypeColor(resource.type)}>
                    {resource.type}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{resource.estimatedTime}</span>
                  <Badge className={getDifficultyColor(resource.difficulty)}>
                    {resource.difficulty}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {resource.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full" variant="outline">
                  Access Resource <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-800">💡 Pro Tip</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-purple-700">
            Start with the beginner resources and gradually work your way up. The most successful AI entrepreneurs 
            combine multiple income streams - try the Strategy Generator to find your perfect mix!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}