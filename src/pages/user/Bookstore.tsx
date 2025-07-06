
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Book, FileText, Star, MapPin } from 'lucide-react';

const Bookstore = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - replace with actual API calls
  const usedBooks = [
    {
      id: 1,
      title: "Data Structures and Algorithms",
      author: "Robert Lafore",
      price: 450,
      originalPrice: 850,
      condition: "Good",
      seller: "John Doe",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
      rating: 4.5
    },
    {
      id: 2,
      title: "Introduction to Machine Learning",
      author: "Alpaydin Ethem",
      price: 600,
      originalPrice: 1200,
      condition: "Excellent",
      seller: "Jane Smith",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop",
      rating: 4.8
    },
    {
      id: 3,
      title: "Database Management Systems",
      author: "Raghu Ramakrishnan",
      price: 350,
      originalPrice: 750,
      condition: "Fair",
      seller: "Mike Johnson",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      rating: 4.2
    }
  ];

  const newBooks = [
    {
      id: 4,
      title: "Clean Code",
      author: "Robert C. Martin",
      price: 850,
      seller: "ReLibro Store",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop",
      rating: 4.9
    },
    {
      id: 5,
      title: "System Design Interview",
      author: "Alex Xu",
      price: 950,
      seller: "ReLibro Store",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=400&fit=crop",
      rating: 4.7
    }
  ];

  const studyNotes = [
    {
      id: 6,
      title: "Computer Networks Notes",
      subject: "Computer Science",
      author: "Sarah Wilson",
      downloads: 156,
      rating: 4.6,
      type: "PDF"
    },
    {
      id: 7,
      title: "Calculus Problem Sets",
      subject: "Mathematics",
      author: "Alex Chen",
      downloads: 243,
      rating: 4.8,
      type: "PDF"
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ReLibro Bookstore
          </h1>
          
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search books, notes, or authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="used-books" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="used-books">Used Books</TabsTrigger>
            <TabsTrigger value="new-books">New Books</TabsTrigger>
            <TabsTrigger value="study-notes">Study Notes</TabsTrigger>
          </TabsList>

          {/* Used Books */}
          <TabsContent value="used-books">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {usedBooks.map((book) => (
                <Card key={book.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge className={getConditionColor(book.condition)}>
                        {book.condition}
                      </Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                          {book.rating}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{book.title}</CardTitle>
                    <CardDescription>by {book.author}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-green-600">₹{book.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ₹{book.originalPrice}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% off
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-1" />
                      {book.location} • by {book.seller}
                    </div>
                    
                    <Link to={`/book/${book.id}`}>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* New Books */}
          <TabsContent value="new-books">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newBooks.map((book) => (
                <Card key={book.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        New
                      </Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                          {book.rating}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{book.title}</CardTitle>
                    <CardDescription>by {book.author}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        ₹{book.price}
                      </span>
                    </div>
                    
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Sold by {book.seller}
                    </div>
                    
                    <Link to={`/book/${book.id}`}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Buy Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Study Notes */}
          <TabsContent value="study-notes">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyNotes.map((note) => (
                <Card key={note.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="outline">{note.subject}</Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                          {note.rating}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{note.title}</CardTitle>
                    <CardDescription>by {note.author}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center text-gray-600 dark:text-gray-400">
                        <FileText className="h-4 w-4 mr-1" />
                        {note.type}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {note.downloads} downloads
                      </span>
                    </div>
                    
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Download Notes
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Bookstore;
