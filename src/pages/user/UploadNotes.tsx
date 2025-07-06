
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Upload, FileText, File } from 'lucide-react';

const UploadNotes = () => {
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    topic: '',
    description: '',
    semester: '',
    university: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSuccess(true);
      // Reset form
      setFormData({
        title: '',
        subject: '',
        topic: '',
        description: '',
        semester: '',
        university: ''
      });
      setFile(null);
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getFileIcon = (file: File) => {
    if (file.type.includes('pdf')) return <File className="h-8 w-8 text-red-500" />;
    if (file.type.includes('image')) return <FileText className="h-8 w-8 text-blue-500" />;
    return <FileText className="h-8 w-8 text-gray-500" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-purple-600 p-2 rounded-lg mr-3">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Share Your Notes
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Upload your study notes to help fellow students and earn reward points
          </p>
        </div>

        {success && (
          <Alert className="mb-6 border-green-200 bg-green-50 dark:bg-green-900/20">
            <AlertDescription className="text-green-800 dark:text-green-300">
              Your notes have been uploaded successfully! They will be reviewed and published shortly.
            </AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Notes Information</CardTitle>
            <CardDescription>
              Provide detailed information about your study notes to help other students find them easily
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload */}
              <div className="space-y-2">
                <Label>Upload Notes File</Label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  {file ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        {getFileIcon(file)}
                        <div className="text-left">
                          <p className="font-medium text-gray-900 dark:text-white">{file.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setFile(null)}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div>
                        <Label htmlFor="file-upload" className="cursor-pointer">
                          <span className="text-purple-600 hover:text-purple-500">Upload a file</span>
                          <span className="text-gray-600 dark:text-gray-400"> or drag and drop</span>
                        </Label>
                        <Input
                          id="file-upload"
                          type="file"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX, JPG, PNG up to 25MB</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Basic Information */}
              <div className="space-y-2">
                <Label htmlFor="title">Notes Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="e.g., Data Structures Lecture Notes - Trees and Graphs"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select onValueChange={(value) => handleInputChange('subject', value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-science">Computer Science</SelectItem>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="chemistry">Chemistry</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="economics">Economics</SelectItem>
                      <SelectItem value="literature">Literature</SelectItem>
                      <SelectItem value="biology">Biology</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="topic">Specific Topic</Label>
                  <Input
                    id="topic"
                    value={formData.topic}
                    onChange={(e) => handleInputChange('topic', e.target.value)}
                    placeholder="e.g., Binary Trees, Graph Algorithms"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="semester">Semester/Year</Label>
                  <Select onValueChange={(value) => handleInputChange('semester', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1st-sem">1st Semester</SelectItem>
                      <SelectItem value="2nd-sem">2nd Semester</SelectItem>
                      <SelectItem value="3rd-sem">3rd Semester</SelectItem>
                      <SelectItem value="4th-sem">4th Semester</SelectItem>
                      <SelectItem value="5th-sem">5th Semester</SelectItem>
                      <SelectItem value="6th-sem">6th Semester</SelectItem>
                      <SelectItem value="7th-sem">7th Semester</SelectItem>
                      <SelectItem value="8th-sem">8th Semester</SelectItem>
                      <SelectItem value="1st-year">1st Year</SelectItem>
                      <SelectItem value="2nd-year">2nd Year</SelectItem>
                      <SelectItem value="3rd-year">3rd Year</SelectItem>
                      <SelectItem value="4th-year">4th Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="university">University/College</Label>
                  <Input
                    id="university"
                    value={formData.university}
                    onChange={(e) => handleInputChange('university', e.target.value)}
                    placeholder="e.g., Mumbai University, IIT Delhi"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe what topics are covered, the format of notes, and any special features..."
                  rows={4}
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-medium text-blue-900 dark:text-blue-300 mb-2">
                  Guidelines for Quality Notes
                </h3>
                <ul className="text-sm text-blue-800 dark:text-blue-400 space-y-1">
                  <li>• Ensure notes are clear and legible</li>
                  <li>• Include diagrams and examples where helpful</li>
                  <li>• Organize content with proper headings</li>
                  <li>• Remove any personal information before sharing</li>
                  <li>• Only upload original work or properly credited content</li>
                </ul>
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700"
                disabled={loading || !file}
              >
                {loading ? (
                  <>
                    <Upload className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Share Notes
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UploadNotes;
