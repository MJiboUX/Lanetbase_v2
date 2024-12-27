// Add to existing auth.ts file
import { initializeUserWallet } from './wallet/initialize';
import { sendWelcomeEmail } from './email/service';

export const createUser = async (
  email: string, 
  password: string, 
  role: UserRole = 'user',
  additionalData: Partial<UserData> = {}
): Promise<UserData> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  
  const userData: UserData = {
    uid: user.uid,
    email: user.email!,
    role,
    createdAt: Date.now(),
    ...additionalData,
  };

  await setDoc(doc(db, 'users', user.uid), userData);
  
  // Initialize wallet with welcome bonus
  await initializeUserWallet(user.uid);
  
  // Send welcome email
  await sendWelcomeEmail({
    email: user.email!,
    fullName: additionalData.fullName || '',
    currentSkill: additionalData.currentSkill || '',
    recommendations: getSkillRecommendations(additionalData.currentSkill || '')
  });
  
  return userData;
};

const getSkillRecommendations = (skill: string): string[] => {
  const recommendations: Record<string, string[]> = {
    'web development': [
      'Join our Web Development community',
      'Check out coding challenges',
      'Browse development courses'
    ],
    'design': [
      'Connect with other designers',
      'Participate in design challenges',
      'Showcase your portfolio'
    ],
    // Add more skills and recommendations
  };

  return recommendations[skill.toLowerCase()] || [
    'Complete your profile',
    'Join our community discussions',
    'Explore available courses'
  ];
};