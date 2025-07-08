
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Activity, Globe, Zap, Users, Download, Upload, Clock, Shield } from "lucide-react";

const Dashboard = () => {
  // Mock data for charts
  const usageData = [
    { name: "Mon", usage: 2.1 },
    { name: "Tue", usage: 3.2 },
    { name: "Wed", usage: 2.8 },
    { name: "Thu", usage: 1.9 },
    { name: "Fri", usage: 4.1 },
    { name: "Sat", usage: 3.7 },
    { name: "Sun", usage: 2.3 },
  ];

  const locationData = [
    { name: "US", value: 45, color: "#3b82f6" },
    { name: "UK", value: 25, color: "#8b5cf6" },
    { name: "DE", value: 20, color: "#06b6d4" },
    { name: "Other", value: 10, color: "#10b981" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <span className="text-xl font-bold text-blue-400">Voidix Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
              Pro Plan
            </Badge>
            <Button variant="ghost" className="text-white hover:text-blue-400">
              Profile
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Data Used</CardTitle>
              <Download className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">23.4 GB</div>
              <p className="text-xs text-gray-400">of 50 GB limit</p>
              <Progress value={47} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Active IPs</CardTitle>
              <Globe className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">847</div>
              <p className="text-xs text-gray-400">across 12 countries</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Success Rate</CardTitle>
              <Shield className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">99.7%</div>
              <p className="text-xs text-gray-400">last 24 hours</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Avg Response</CardTitle>
              <Zap className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">142ms</div>
              <p className="text-xs text-gray-400">global average</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-gray-900/50 border-gray-800">
            <TabsTrigger value="overview" className="text-white data-[state=active]:bg-blue-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="usage" className="text-white data-[state=active]:bg-blue-600">
              Usage Stats
            </TabsTrigger>
            <TabsTrigger value="endpoints" className="text-white data-[state=active]:bg-blue-600">
              Endpoints
            </TabsTrigger>
            <TabsTrigger value="billing" className="text-white data-[state=active]:bg-blue-600">
              Billing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Weekly Usage</CardTitle>
                  <CardDescription className="text-gray-400">
                    Data consumption over the past week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={usageData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1f2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="usage" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Traffic by Location</CardTitle>
                  <CardDescription className="text-gray-400">
                    Distribution of proxy usage by region
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={locationData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {locationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Detailed Usage Statistics</CardTitle>
                <CardDescription className="text-gray-400">
                  Comprehensive breakdown of your proxy usage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Total Requests</span>
                    <span className="text-white font-bold">1,247,831</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Successful Requests</span>
                    <span className="text-white font-bold">1,243,901</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Failed Requests</span>
                    <span className="text-white font-bold">3,930</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Peak Concurrent</span>
                    <span className="text-white font-bold">87</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="endpoints" className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Proxy Endpoints</CardTitle>
                <CardDescription className="text-gray-400">
                  Your active proxy server endpoints
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
                    <div>
                      <div className="text-white font-medium">US East (Virginia)</div>
                      <div className="text-gray-400 text-sm">proxy-us-east.voidix.com:8080</div>
                    </div>
                    <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                      Active
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
                    <div>
                      <div className="text-white font-medium">Europe (London)</div>
                      <div className="text-gray-400 text-sm">proxy-eu-west.voidix.com:8080</div>
                    </div>
                    <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                      Active
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
                    <div>
                      <div className="text-white font-medium">Asia Pacific (Singapore)</div>
                      <div className="text-gray-400 text-sm">proxy-ap-southeast.voidix.com:8080</div>
                    </div>
                    <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                      Active
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Billing & Payments</CardTitle>
                <CardDescription className="text-gray-400">
                  Manage your subscription and payment methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">Current Plan: Professional</div>
                    <div className="text-gray-400 text-sm">Next billing: Dec 15, 2024</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">$99.00</div>
                    <div className="text-gray-400 text-sm">/month</div>
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-white font-medium mb-3">Payment Methods</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Bitcoin (BTC)</span>
                      <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                        Primary
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Ethereum (ETH)</span>
                      <Button variant="ghost" size="sm" className="text-blue-400">
                        Set as Primary
                      </Button>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
