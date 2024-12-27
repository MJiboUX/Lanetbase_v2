import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import { UserData } from './auth';

const SKILL_RECOMMENDATIONS = {
  'web development': [
    'Check out our Hub for collaborative coding projects',
    'Join our Web Development community in the Social Network',
    'Browse web development courses in our Marketplace'
  ],
  'design': [
    'Connect with other designers in our Social Network',
    'Showcase your portfolio in the Marketplace',
    'Participate in design challenges for Lanetcoins'
  ],
  // Add more skill-based recommendations
};

export const sendWelcomeEmail = async (userId: string) => {
  const userDoc = await getDoc(doc(db, 'users', userId));
  const userData = userDoc.data() as UserData;
  
  const recommendations = SKILL_RECOMMENDATIONS[userData.currentSkill?.toLowerCase()] || [];
  
  // Here you would integrate with your email service provider
  // For now, we'll console.log the email content
  console.log(`
    Welcome to LanetBase, ${userData.fullName}!
    
    Thank you for joining our platform. Based on your ${userData.currentSkill} skills,
    here are some ways to get started:
    
    ${recommendations.map(rec => `- ${rec}`).join('\n')}
    
    Start earning Lanetcoins by:
    - Completing your profile
    - Participating in community discussions
    - Sharing your knowledge
    
    Best regards,
    The LanetBase Team
  `);
};