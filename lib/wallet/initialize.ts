import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { WalletData } from './types';

export const initializeUserWallet = async (userId: string): Promise<void> => {
  const initialWallet: WalletData = {
    lanetcoins: 100, // Welcome bonus
    nairaBalance: 0,
    transactions: [{
      id: Date.now().toString(),
      type: 'credit',
      amount: 100,
      currency: 'lanetcoin',
      description: 'Welcome bonus',
      timestamp: Date.now()
    }]
  };

  await setDoc(doc(db, 'wallets', userId), initialWallet);
};