
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Server, DollarSign, Activity, Ban, Check, X, Search } from "lucide-react";

const AdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data
  const mockUsers = [
    { id: 1, username: "user123", email: "user@example.com", plan: "Pro", status: "Active", usage: "23.4 GB" },
    { id: 2, username: "dev_tools", email: "dev@tools.com", plan: "Enterprise", status: "Active", usage: "187.2 GB" },
    { id: 3, username: "scraper_pro", email: "scraper@email.com", plan: "Starter", status: "Suspended", usage: "4.1 GB" },
  ];

  const mockServers = [
    { id: 1, location: "US East", endpoint: "proxy-us-east.voidix.com", status: "Online", load: 34 },
    { id: 2, location: "EU West", endpoint: "proxy-eu-west.voidix.com", status: "Online", load: 67 },
    { id: 3, location: "AP Southeast", endpoint: "proxy-ap-southeast.voidix.com", status: "Maintenance", load: 0 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="text-xl font-bold text-red-400">Admin Panel</span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30">
              Admin Access
            </Badge>
            <Button variant="ghost" className="text-white hover:text-red-400">
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Users</CardTitle>
              <Users className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1,247</div>
              <p className="text-xs text-gray-400">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Active Servers</CardTitle>
              <Server className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">47</div>
              <p className="text-xs text-gray-400">across 12 regions</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$84,231</div>
              <p className="text-xs text-gray-400">+8% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">System Load</CardTitle>
              <Activity className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">42%</div>
              <p className="text-xs text-gray-400">average across all servers</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="bg-gray-900/50 border-gray-800">
            <TabsTrigger value="users" className="text-white data-[state=active]:bg-red-600">
              User Management
            </TabsTrigger>
            <TabsTrigger value="servers" className="text-white data-[state=active]:bg-red-600">
              Server Status
            </TabsTrigger>
            <TabsTrigger value="billing" className="text-white data-[state=active]:bg-red-600">
              Billing Overview
            </TabsTrigger>
            <TabsTrigger value="settings" className="text-white data-[state=active]:bg-red-600">
              System Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-white">User Management</CardTitle>
                    <CardDescription className="text-gray-400">
                      Manage user accounts and their access
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700">
                      <TableHead className="text-gray-300">Username</TableHead>
                      <TableHead className="text-gray-300">Email</TableHead>
                      <TableHead className="text-gray-300">Plan</TableHead>
                      <TableHead className="text-gray-300">Status</TableHead>
                      <TableHead className="text-gray-300">Usage</TableHead>
                      <TableHead className="text-gray-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.map((user) => (
                      <TableRow key={user.id} className="border-gray-700">
                        <TableCell className="text-white">{user.username}</TableCell>
                        <TableCell className="text-gray-300">{user.email}</TableCell>
                        <TableCell>
                          <Badge className={
                            user.plan === "Enterprise" ? "bg-purple-600/20 text-purple-400 border-purple-600/30" :
                            user.plan === "Pro" ? "bg-blue-600/20 text-blue-400 border-blue-600/30" :
                            "bg-gray-600/20 text-gray-400 border-gray-600/30"
                          }>
                            {user.plan}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={
                            user.status === "Active" ? "bg-green-600/20 text-green-400 border-green-600/30" :
                            "bg-red-600/20 text-red-400 border-red-600/30"
                          }>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">{user.usage}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="ghost" className="text-green-400 hover:bg-green-600/20">
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-400 hover:bg-red-600/20">
                              <Ban className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="servers" className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Server Status</CardTitle>
                <CardDescription className="text-gray-400">
                  Monitor and manage proxy server infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700">
                      <TableHead className="text-gray-300">Location</TableHead>
                      <TableHead className="text-gray-300">Endpoint</TableHead>
                      <TableHead className="text-gray-300">Status</TableHead>
                      <TableHead className="text-gray-300">Load</TableHead>
                      <TableHead className="text-gray-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockServers.map((server) => (
                      <TableRow key={server.id} className="border-gray-700">
                        <TableCell className="text-white">{server.location}</TableCell>
                        <TableCell className="text-gray-300">{server.endpoint}</TableCell>
                        <TableCell>
                          <Badge className={
                            server.status === "Online" ? "bg-green-600/20 text-green-400 border-green-600/30" :
                            "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
                          }>
                            {server.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">{server.load}%</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="ghost" className="text-blue-400 hover:bg-blue-600/20">
                              Restart
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-400 hover:bg-red-600/20">
                              Shutdown
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Billing Overview</CardTitle>
                <CardDescription className="text-gray-400">
                  Revenue and payment analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">$84,231</div>
                    <div className="text-gray-400">This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">$75,192</div>
                    <div className="text-gray-400">Last Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">+12%</div>
                    <div className="text-gray-400">Growth</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">System Settings</CardTitle>
                <CardDescription className="text-gray-400">
                  Configure system-wide settings and parameters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="max-connections" className="text-white">Max Connections per User</Label>
                    <Input
                      id="max-connections"
                      type="number"
                      defaultValue="100"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rate-limit" className="text-white">Rate Limit (req/min)</Label>
                    <Input
                      id="rate-limit"
                      type="number"
                      defaultValue="1000"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </div>
                <Button className="bg-red-600 hover:bg-red-700">
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
