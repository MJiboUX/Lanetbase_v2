import { doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../firebase';

export const REWARD_RULES = {
  PROFILE_COMPLETION: 50,
  DAILY_LOGIN: 10,
  POST_CREATION: 5,
  COMMENT: 2,
  POST_LIKE: 1,
  SKILL_VERIFICATION: 100,
  COURSE_COMPLETION: 200
} as const;

export const awardLanetcoins = async (
  userId: string, 
  amount: number, 
  reason: string
): Promise<void> => {
  const walletRef = doc(db, 'wallets', userId);
  
  await updateDoc(walletRef, {
    lanetcoins: increment(amount),
    transactions: increment([{
      id: Date.now().toString(),
      type: 'credit',
      amount,
      currency: 'lanetcoin',
      description: reason,
      timestamp: Date.now()
    }])
  });
};