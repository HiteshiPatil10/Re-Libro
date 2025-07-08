import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { 
  Book, 
  Users, 
  ShoppingCart, 
  AlertTriangle, 
  Shield, 
  Search, 
  Check, 
  X, 
  Eye, 
  Trash2,
  UserX,
  Ban,
  Activity,
  Calendar,
  TrendingUp,
  FileText,
  BarChart3
} from 'lucide-react';

const AdminDashboard = () => {
  const { currentUser, userData } = useAuth();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [userFilter, setUserFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  // Security check - only allow admin users
  if (!currentUser || !userData?.isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  // Mock data - replace with your Firebase/database calls
  const stats = [
    { 
      title: 'Total Books', 
      value: '1,234', 
      icon: Book, 
      color: 'text-blue-600', 
      bgColor: 'bg-blue-100 dark:bg-blue-900/20', 
      change: '+12%',
      description: 'Books uploaded this month'
    },
    { 
      title: 'Active Users', 
      value: '456', 
      icon: Users, 
      color: 'text-green-600', 
      bgColor: 'bg-green-100 dark:bg-green-900/20', 
      change: '+5%',
      description: 'Verified users this week'
    },
    { 
      title: 'Pending Reviews', 
      value: '89', 
      icon: ShoppingCart, 
      color: 'text-orange-600', 
      bgColor: 'bg-orange-100 dark:bg-orange-900/20', 
      change: '+3%',
      description: 'Books awaiting approval'
    },
    { 
      title: 'Active Reports', 
      value: '12', 
      icon: AlertTriangle, 
      color: 'text-red-600', 
      bgColor: 'bg-red-100 dark:bg-red-900/20', 
      change: '-2%',
      description: 'Reports to review'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': case 'completed': case 'active': case 'resolved':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'rejected': case 'suspended': case 'blocked':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  const handleBookAction = async (action: string, bookId: number) => {
    setLoading(true);
    try {
      // Replace with your Firebase/database operations
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Action Completed",
        description: `Book ${action} successfully.`,
      });
      
      console.log(`${action} book with id ${bookId}`);
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to ${action} book. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-red-600 p-3 rounded-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Manage books, users, orders, and platform analytics
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                      </span>
                      <span className="text-xs text-gray-500">{stat.description}</span>
                    </div>
                  </div>
                  <div className={`p-4 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="books" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white dark:bg-gray-800 p-1 rounded-lg">
            <TabsTrigger value="books" className="flex items-center space-x-2">
              <Book className="h-4 w-4" />
              <span className="hidden sm:inline">Books</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Users</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center space-x-2">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Orders</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
          </TabsList>

          {/* Books Management */}
          <TabsContent value="books">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Book className="h-5 w-5" />
                  <span>Manage All Books</span>
                </CardTitle>
                <CardDescription>View, approve, reject, and manage all book listings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search books..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="text-center py-8 text-gray-500">
                  <Book className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Book management interface ready - connect to your database</p>
                  <p className="text-sm">Replace mock data with real Firebase queries</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Management */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Manage Users</span>
                </CardTitle>
                <CardDescription>View and manage all registered users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>User management interface ready</p>
                  <p className="text-sm">Connect to your user database to display real data</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Management */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Orders & Exchanges</span>
                </CardTitle>
                <CardDescription>Manage all book purchase and exchange requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Order management interface ready</p>
                  <p className="text-sm">Integrate with your order/transaction system</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Platform Analytics Overview</CardTitle>
                <CardDescription>Daily user activity and book uploads</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 border rounded-lg">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <p className="text-2xl font-bold">+12%</p>
                    <p className="text-sm text-gray-500">Daily Growth</p>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <p className="text-2xl font-bold">₹12,345</p>
                    <p className="text-sm text-gray-500">Monthly Revenue</p>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <Activity className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                    <p className="text-2xl font-bold">89%</p>
                    <p className="text-sm text-gray-500">User Satisfaction</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
