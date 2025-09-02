import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, TrendingUp, Calculator, BookOpen } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const sections = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'generator', label: 'AI Strategy', icon: TrendingUp },
    { id: 'scanner', label: 'Opportunities', icon: TrendingUp },
    { id: 'calculator', label: 'Calculator', icon: Calculator },
    { id: 'resources', label: 'Resources', icon: BookOpen },
  ];

  return (
    <Card className="p-4 mb-6">
      <div className="flex flex-wrap gap-2 justify-center">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Button
              key={section.id}
              variant={activeSection === section.id ? 'default' : 'outline'}
              onClick={() => onSectionChange(section.id)}
              className="flex items-center gap-2"
            >
              <Icon className="w-4 h-4" />
              {section.label}
            </Button>
          );
        })}
      </div>
    </Card>
  );
}