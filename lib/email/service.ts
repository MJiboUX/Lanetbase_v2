// Using Next.js API routes for email sending
export const sendWelcomeEmail = async (userData: {
  email: string;
  fullName: string;
  currentSkill: string;
  recommendations: string[];
}) => {
  try {
    const response = await fetch('/api/email/welcome', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Failed to send welcome email');
    }
  } catch (error) {
    console.error('Error sending welcome email:', error);
    // Don't throw - we don't want to break the registration flow
  }
};