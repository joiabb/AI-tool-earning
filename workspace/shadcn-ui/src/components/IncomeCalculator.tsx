import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calculator, DollarSign, TrendingUp, PieChart } from 'lucide-react';

interface ServiceType {
  value: string;
  label: string;
  avgRate: number;
}

interface CalculationResults {
  weekly: number;
  monthly: number;
  yearly: number;
  hourlyFromProjects: number;
  marketRate: number;
  rateComparison: string;
  serviceName: string;
}

export default function IncomeCalculator() {
  const [serviceType, setServiceType] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [hoursPerWeek, setHoursPerWeek] = useState('');
  const [clientsPerMonth, setClientsPerMonth] = useState('');
  const [projectValue, setProjectValue] = useState('');
  const [results, setResults] = useState<CalculationResults | null>(null);

  const serviceTypes: ServiceType[] = [
    { value: 'content-writing', label: 'AI Content Writing', avgRate: 25 },
    { value: 'social-media', label: 'AI Social Media Management', avgRate: 30 },
    { value: 'chatbot', label: 'AI Chatbot Development', avgRate: 50 },
    { value: 'data-analysis', label: 'AI Data Analysis', avgRate: 60 },
    { value: 'image-generation', label: 'AI Image Generation', avgRate: 35 },
    { value: 'tutoring', label: 'AI-Enhanced Tutoring', avgRate: 40 },
    { value: 'consulting', label: 'AI Consulting', avgRate: 75 },
  ];

  const calculateIncome = () => {
    const rate = parseFloat(hourlyRate) || 0;
    const hours = parseFloat(hoursPerWeek) || 0;
    const clients = parseFloat(clientsPerMonth) || 0;
    const project = parseFloat(projectValue) || 0;

    const weeklyIncome = rate * hours;
    const monthlyHourly = weeklyIncome * 4.33; // Average weeks per month
    const monthlyProject = clients * project;
    const totalMonthly = monthlyHourly + monthlyProject;
    const yearlyIncome = totalMonthly * 12;

    const selectedService = serviceTypes.find(s => s.value === serviceType);
    const marketRate = selectedService?.avgRate || 0;
    const rateComparison = rate > marketRate ? 'above' : rate < marketRate ? 'below' : 'at';

    setResults({
      weekly: weeklyIncome,
      monthly: totalMonthly,
      yearly: yearlyIncome,
      hourlyFromProjects: monthlyProject / (hours * 4.33) || 0,
      marketRate,
      rateComparison,
      serviceName: selectedService?.label || 'Selected Service'
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-green-500" />
            AI Income Calculator
          </CardTitle>
          <CardDescription>
            Calculate your potential earnings from AI-powered services
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="service">Service Type</Label>
              <Select value={serviceType} onValueChange={setServiceType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your AI service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.label} (${service.avgRate}/hr avg)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="rate">Your Hourly Rate ($)</Label>
              <Input
                id="rate"
                type="number"
                placeholder="e.g., 50"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="hours">Hours per Week</Label>
              <Input
                id="hours"
                type="number"
                placeholder="e.g., 20"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="clients">Project Clients per Month</Label>
              <Input
                id="clients"
                type="number"
                placeholder="e.g., 3"
                value={clientsPerMonth}
                onChange={(e) => setClientsPerMonth(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="project-value">Average Project Value ($)</Label>
            <Input
              id="project-value"
              type="number"
              placeholder="e.g., 500"
              value={projectValue}
              onChange={(e) => setProjectValue(e.target.value)}
            />
          </div>

          <Button onClick={calculateIncome} className="w-full">
            Calculate Income Potential
          </Button>
        </CardContent>
      </Card>

      {results && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-500" />
                Weekly Income
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                ${results.weekly.toFixed(0)}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                Monthly Income
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                ${results.monthly.toFixed(0)}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <PieChart className="w-4 h-4 text-purple-500" />
                Yearly Potential
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">
                ${results.yearly.toFixed(0)}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Market Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold">
                ${results.marketRate}/hr
              </div>
              <div className={`text-sm ${
                results.rateComparison === 'above' ? 'text-green-600' : 
                results.rateComparison === 'below' ? 'text-red-600' : 'text-gray-600'
              }`}>
                You're {results.rateComparison} market rate
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {results && (
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="text-lg">Income Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>Hourly work income:</span>
              <span className="font-semibold">${(results.monthly - (parseFloat(clientsPerMonth) || 0) * (parseFloat(projectValue) || 0)).toFixed(0)}/month</span>
            </div>
            <div className="flex justify-between">
              <span>Project-based income:</span>
              <span className="font-semibold">${((parseFloat(clientsPerMonth) || 0) * (parseFloat(projectValue) || 0)).toFixed(0)}/month</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold">
              <span>Total Monthly Income:</span>
              <span className="text-green-600">${results.monthly.toFixed(0)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}