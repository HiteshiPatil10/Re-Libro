
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Navbar from "./components/layout/Navbar";

// Pages
import Index from "./pages/Index";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import EmailVerification from "./pages/auth/EmailVerification";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Bookstore from "./pages/user/Bookstore";
import BookDetails from "./pages/user/BookDetails";
import UploadBook from "./pages/user/UploadBook";
import UploadNotes from "./pages/user/UploadNotes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen bg-background">
              <Navbar />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/verify-email" element={<EmailVerification />} />
                
                {/* User Routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute requireEmailVerification>
                    <UserDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/bookstore" element={
                  <ProtectedRoute>
                    <Bookstore />
                  </ProtectedRoute>
                } />
                <Route path="/book/:id" element={
                  <ProtectedRoute>
                    <BookDetails />
                  </ProtectedRoute>
                } />
                <Route path="/upload-book" element={
                  <ProtectedRoute requireEmailVerification>
                    <UploadBook />
                  </ProtectedRoute>
                } />
                <Route path="/upload-notes" element={
                  <ProtectedRoute requireEmailVerification>
                    <UploadNotes />
                  </ProtectedRoute>
                } />
                
                {/* Admin Routes */}
                <Route path="/admin" element={
                  <ProtectedRoute requireAdmin requireEmailVerification>
                    <AdminDashboard />
                  </ProtectedRoute>
                } />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
