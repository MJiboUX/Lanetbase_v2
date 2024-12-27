import { db } from './firebase';
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';

export interface WalletData {
  lanetcoins: number;
  nairaBalance: number;
  transactions: Transaction[];
}

interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  currency: 'lanetcoin' | 'naira';
  description: string;
  timestamp: number;
}

export const initializeWallet = async (userId: string) => {
  const walletRef = doc(db, 'wallets', userId);
  await updateDoc(walletRef, {
    lanetcoins: 0,
    nairaBalance: 0,
    transactions: []
  });
};

export const getWalletBalance = async (userId: string): Promise<WalletData> => {
  const walletRef = doc(db, 'wallets', userId);
  const wallet = await getDoc(walletRef);
  return wallet.data() as WalletData;
};

export const addLanetcoins = async (userId: string, amount: number, reason: string) => {
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