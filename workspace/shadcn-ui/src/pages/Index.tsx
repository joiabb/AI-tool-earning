import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import StrategyGenerator from '@/components/StrategyGenerator';
import OpportunityScanner from '@/components/OpportunityScanner';
import IncomeCalculator from '@/components/IncomeCalculator';
import ResourceLibrary from '@/components/ResourceLibrary';
import { Sparkles, DollarSign, TrendingUp, Zap, ArrowRight, Star } from 'lucide-react';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'generator':
        return <StrategyGenerator />;
      case 'scanner':
        return <OpportunityScanner />;
      case 'calculator':
        return <IncomeCalculator />;
      case 'resources':
        return <ResourceLibrary />;
      default:
        return <HomePage onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
        {renderSection()}
      </div>
    </div>
  );
}

function HomePage({ onSectionChange }: { onSectionChange: (section: string) => void }) {
  const features = [
    {
      icon: Sparkles,
      title: "AI Strategy Generator",
      description: "Get personalized money-making strategies powered by artificial intelligence",
      action: () => onSectionChange('generator'),
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Opportunity Scanner",
      description: "Discover trending AI-powered business opportunities in real-time",
      action: () => onSectionChange('scanner'),
      color: "blue"
    },
    {
      icon: DollarSign,
      title: "Income Calculator",
      description: "Calculate your potential earnings from various AI services",
      action: () => onSectionChange('calculator'),
      color: "green"
    },
    {
      icon: Zap,
      title: "Resource Library",
      description: "Access curated guides, tools, and templates for AI entrepreneurs",
      action: () => onSectionChange('resources'),
      color: "indigo"
    }
  ];

  const stats = [
    { label: "AI Opportunities", value: "500+", icon: TrendingUp },
    { label: "Success Stories", value: "1,200+", icon: Star },
    { label: "Avg. Monthly Income", value: "$3,500", icon: DollarSign },
    { label: "Time to Start", value: "1-2 weeks", icon: Zap }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      indigo: "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700"
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-purple-200">
            🚀 AI-Powered Income Generation
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Turn AI Into Your
            <br />
            Money Machine
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover proven strategies, trending opportunities, and powerful tools to generate income using artificial intelligence. Start your AI-powered business today.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
            onClick={() => onSectionChange('generator')}
          >
            Get AI Strategy <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-purple-200 hover:bg-purple-50"
            onClick={() => onSectionChange('scanner')}
          >
            Explore Opportunities
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getColorClasses(feature.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={feature.action}
                  className={`w-full bg-gradient-to-r ${getColorClasses(feature.color)} text-white border-0 group-hover:shadow-lg transition-all`}
                >
                  Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Success Stories Preview */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Star className="w-5 h-5" />
            Success Stories
          </CardTitle>
          <CardDescription className="text-green-700">
            Real people making real money with AI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold">Sarah M.</div>
              <div className="text-sm text-gray-600">AI Content Creator</div>
              <div className="text-green-600 font-bold">$4,200/month</div>
              <div className="text-xs text-gray-500 mt-1">"Started with zero AI knowledge"</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold">Mike R.</div>
              <div className="text-sm text-gray-600">AI Chatbot Developer</div>
              <div className="text-green-600 font-bold">$7,800/month</div>
              <div className="text-xs text-gray-500 mt-1">"Quit my day job in 3 months"</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold">Lisa K.</div>
              <div className="text-sm text-gray-600">AI Consultant</div>
              <div className="text-green-600 font-bold">$12,500/month</div>
              <div className="text-xs text-gray-500 mt-1">"Working 20 hours/week"</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
        <CardContent className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your AI Income Journey?</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who are already building profitable AI-powered businesses. 
            Get your personalized strategy in minutes.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
            onClick={() => onSectionChange('generator')}
          >
            Generate My AI Strategy <Sparkles className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}