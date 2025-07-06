
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Recycle, Users, Award, ArrowRight, Leaf, BookOpen, Share } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-green-600 p-4 rounded-2xl shadow-lg">
              <Book className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Re<span className="text-green-600">Libro</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            More than a bookstore
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            An eco-conscious book resale and study note sharing platform that connects students, 
            promotes sustainability, and rewards responsible learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/bookstore">
              <Button size="lg" variant="outline" className="px-8 py-3">
                Browse Books
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose ReLibro?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of students in creating a sustainable learning ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-green-100 dark:bg-green-900 p-3 rounded-full w-fit">
                  <Recycle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl">Eco-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Give your used books a second life and reduce waste in the education sector
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-fit">
                  <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">Quality Books</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Browse through carefully curated used books and new releases at affordable prices
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-purple-100 dark:bg-purple-900 p-3 rounded-full w-fit">
                  <Share className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl">Share Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Upload and share your study notes to help fellow students succeed
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full w-fit">
                  <Award className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <CardTitle className="text-xl">Earn Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get reward points for every sale and use them for future purchases
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Join Our Growing Community
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-green-100">Books Resold</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-green-100">Active Students</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">250+</div>
              <div className="text-green-100">Study Notes Shared</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Leaf className="h-16 w-16 text-green-600 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join ReLibro today and be part of the sustainable learning revolution
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
