export interface Split {
  ContactId: string;
  TransactionId: string;
  total: number;
  reminder: number;
}

export interface ITransaction {
  id: string;
  total: number;
  name: string;
  note?: string;
  reminder: number;
  splitWith: Split[];
}
