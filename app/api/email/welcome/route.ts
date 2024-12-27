'use server';

import { NextResponse } from 'next/server';
import { welcomeEmailTemplate } from '@/lib/email/templates';

export async function POST(request: Request) {
  try {
    const userData = await request.json();
    
    // In production, integrate with your email service provider here
    // For now, we'll log the email content
    console.log('Sending welcome email to:', userData.email);
    console.log('Email content:', welcomeEmailTemplate(userData));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}