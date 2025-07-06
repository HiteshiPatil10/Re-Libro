
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Star, MapPin, User, ArrowLeft, Heart, Share2 } from 'lucide-react';

const BookDetails = () => {
  const { id } = useParams();

  // Mock data - replace with actual API call
  const book = {
    id: 1,
    title: "Data Structures and Algorithms",
    author: "Robert Lafore",
    price: 450,
    originalPrice: 850,
    condition: "Good",
    seller: "John Doe",
    sellerRating: 4.8,
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&h=600&fit=crop",
    rating: 4.5,
    reviews: 23,
    description: "This comprehensive book covers all fundamental data structures and algorithms with clear explanations and practical examples. Perfect for computer science students and software developers.",
    features: [
      "Comprehensive coverage of data structures",
      "Step-by-step algorithm explanations", 
      "Practical coding examples",
      "Exercise problems with solutions"
    ],
    publishedYear: 2019,
    pages: 720,
    language: "English",
    isbn: "978-0134494067"
  };

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
        {/* Back Button */}
        <Link to="/bookstore" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Bookstore
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Book Image */}
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-white p-4">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge className={getConditionColor(book.condition)}>
                  {book.condition} Condition
                </Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                    {book.rating} ({book.reviews} reviews)
                  </span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {book.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                by {book.author}
              </p>

              <div className="flex items-baseline space-x-3 mb-4">
                <span className="text-3xl font-bold text-green-600">₹{book.price}</span>
                <span className="text-lg text-gray-500 line-through">₹{book.originalPrice}</span>
                <Badge variant="secondary">
                  {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
                </Badge>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {book.description}
              </p>
            </div>

            {/* Seller Info */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Seller Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
                      <User className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{book.seller}</p>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                          {book.sellerRating} seller rating
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4 mr-1" />
                    {book.location}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                Buy Now - ₹{book.price}
              </Button>
              <Button variant="outline" className="w-full py-3">
                Add to Cart
              </Button>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Use reward points at checkout for additional discounts
              </p>
            </div>
          </div>
        </div>

        {/* Book Specifications */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Book Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Published Year</p>
                <p className="font-medium text-gray-900 dark:text-white">{book.publishedYear}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pages</p>
                <p className="font-medium text-gray-900 dark:text-white">{book.pages}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Language</p>
                <p className="font-medium text-gray-900 dark:text-white">{book.language}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">ISBN</p>
                <p className="font-medium text-gray-900 dark:text-white">{book.isbn}</p>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Key Features</h3>
              <ul className="space-y-2">
                {book.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookDetails;
