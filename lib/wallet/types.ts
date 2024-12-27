export interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  currency: 'lanetcoin' | 'naira';
  description: string;
  timestamp: number;
}

export interface WalletData {
  lanetcoins: number;
  nairaBalance: number;
  transactions: Transaction[];
}