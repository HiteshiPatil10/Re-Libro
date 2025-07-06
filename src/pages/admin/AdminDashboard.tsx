
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Book, FileText, Users, Award, Search, Filter, Check, X, Eye } from 'lucide-react';

const AdminDashboard = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { title: 'Pending Books', value: '23', icon: Book, color: 'text-orange-600', bgColor: 'bg-orange-100 dark:bg-orange-900' },
    { title: 'Pending Notes', value: '12', icon: FileText, color: 'text-blue-600', bgColor: 'bg-blue-100 dark:bg-blue-900' },
    { title: 'Active Users', value: '1,234', icon: Users, color: 'text-green-600', bgColor: 'bg-green-100 dark:bg-green-900' },
    { title: 'Total Points Awarded', value: '45,678', icon: Award, color: 'text-purple-600', bgColor: 'bg-purple-100 dark:bg-purple-900' },
  ];

  const pendingBooks = [
    {
      id: 1,
      title: "Introduction to Algorithms",
      author: "Thomas Cormen",
      seller: "John Doe",
      price: 650,
      condition: "Good",
      uploadDate: "2024-01-15",
      status: "pending"
    },
    {
      id: 2,
      title: "Database Systems",
      author: "Ramez Elmasri",
      seller: "Jane Smith", 
      price: 450,
      condition: "Excellent",
      uploadDate: "2024-01-14",
      status: "pending"
    }
  ];

  const pendingNotes = [
    {
      id: 1,
      title: "Machine Learning Algorithms Notes",
      subject: "Computer Science",
      author: "Alice Johnson",
      uploadDate: "2024-01-15",
      fileType: "PDF",
      status: "pending"
    },
    {
      id: 2,
      title: "Calculus Problem Solutions",
      subject: "Mathematics",
      author: "Bob Wilson",
      uploadDate: "2024-01-14",
      fileType: "PDF",
      status: "pending"
    }
  ];

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Excellent': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Good': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Fair': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const handleApprove = (type: string, id: number) => {
    console.log(`Approving ${type} with id ${id}`);
    // Implement approval logic
  };

  const handleReject = (type: string, id: number) => {
    console.log(`Rejecting ${type} with id ${id}`);
    // Implement rejection logic
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage books, notes, and users on the ReLibro platform
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="books" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="books">Pending Books</TabsTrigger>
            <TabsTrigger value="notes">Pending Notes</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="points">Points Management</TabsTrigger>
          </TabsList>

          {/* Pending Books */}
          <TabsContent value="books" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle>Pending Book Approvals</CardTitle>
                    <CardDescription>Review and approve book listings from users</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search books..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Select value={filter} onValueChange={setFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingBooks.map((book) => (
                    <div key={book.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                            {book.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">by {book.author}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-gray-600 dark:text-gray-400">
                              Seller: {book.seller}
                            </span>
                            <span className="text-green-600 font-medium">₹{book.price}</span>
                            <Badge className={getConditionColor(book.condition)}>
                              {book.condition}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500">
                            Uploaded on {new Date(book.uploadDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleApprove('book', book.id)}
                          >
                            <Check className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleReject('book', book.id)}
                          >
                            <X className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pending Notes */}
          <TabsContent value="notes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Note Approvals</CardTitle>
                <CardDescription>Review and moderate study notes shared by users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingNotes.map((note) => (
                    <div key={note.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                            {note.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm">
                            <Badge variant="outline">{note.subject}</Badge>
                            <span className="text-gray-600 dark:text-gray-400">
                              by {note.author}
                            </span>
                            <span className="text-blue-600">{note.fileType}</span>
                          </div>
                          <p className="text-sm text-gray-500">
                            Uploaded on {new Date(note.uploadDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            Preview
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleApprove('note', note.id)}
                          >
                            <Check className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleReject('note', note.id)}
                          >
                            <X className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Management */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage user accounts and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  User management features will be implemented here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Points Management */}
          <TabsContent value="points" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Points Management</CardTitle>
                <CardDescription>Assign and manage reward points for users</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Points management system will be implemented here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
