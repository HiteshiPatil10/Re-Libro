
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Upload, FileText, Award, Plus, TrendingUp, Store, User } from 'lucide-react';

const UserDashboard = () => {
  const { userData, currentUser } = useAuth();

  const stats = [
    { title: 'Books Listed', value: '12', icon: Book, color: 'text-blue-600' },
    { title: 'Notes Shared', value: '8', icon: FileText, color: 'text-green-600' },
    { title: 'Total Sales', value: '₹1,250', icon: TrendingUp, color: 'text-purple-600' },
    { title: 'Reward Points', value: userData?.rewardPoints || 0, icon: Award, color: 'text-yellow-600' },
  ];

  const quickActions = [
    { title: 'Upload Book', description: 'List your used books for sale', icon: Book, link: '/upload-book', color: 'bg-blue-500' },
    { title: 'Share Notes', description: 'Upload study notes to help others', icon: FileText, link: '/upload-notes', color: 'bg-green-500' },
    { title: 'Browse Store', description: 'Find books and notes you need', icon: Store, link: '/bookstore', color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Quick Access */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Welcome back, {userData?.displayName || currentUser?.displayName || 'Student'}!
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Here's what's happening with your ReLibro account
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex gap-2">
              <Link to="/bookstore">
                <Button variant="outline" className="flex items-center gap-2">
                  <Store className="h-4 w-4" />
                  Bookstore
                </Button>
              </Link>
              <Link to="/upload-book">
                <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Upload Book
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Email Verification Notice */}
        {currentUser && !currentUser.emailVerified && (
          <Card className="mb-6 border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-full">
                  <User className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="font-medium text-yellow-800 dark:text-yellow-200">
                    Email Verification Required
                  </p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Please verify your email to access all features. Check your inbox for verification link.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

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
                  <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{action.title}</CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={action.link}>
                    <Button className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest transactions and uploads</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                  <Book className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">Book sold: "Data Structures & Algorithms"</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Earned 50 reward points • 2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                  <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">Notes uploaded: "Machine Learning Basics"</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Shared in Computer Science • 1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
