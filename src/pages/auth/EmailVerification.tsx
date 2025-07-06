
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mail, RefreshCw } from 'lucide-react';

const EmailVerification = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser, sendVerificationEmail } = useAuth();

  const handleResendEmail = async () => {
    setLoading(true);
    setMessage('');
    
    try {
      await sendVerificationEmail();
      setMessage('Verification email sent! Please check your inbox.');
    } catch (error: any) {
      setMessage(error.message || 'Failed to send verification email');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-fit mb-4">
              <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle>Verify Your Email</CardTitle>
            <CardDescription>
              We've sent a verification email to {currentUser?.email}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Please check your email and click the verification link to activate your account.
            </p>
            
            {message && (
              <Alert>
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-3">
              <Button
                onClick={handleRefresh}
                variant="outline"
                className="w-full"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                I've verified my email
              </Button>
              
              <Button
                onClick={handleResendEmail}
                variant="ghost"
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Resend verification email'}
              </Button>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              Didn't receive the email? Check your spam folder or try resending.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmailVerification;
