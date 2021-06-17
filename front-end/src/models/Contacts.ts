interface Address {
  country: string;
  city: string;
  street: string,
  streetNumber: string;
  postal: number,
}


export enum BalanceChange {
  POSITIVE,
  UNCHANGED,
  NEGATIVE,
}


export interface IContact {
  id: string | null;
  emails: string[];
  phones: string[];
  firstName: string;
  lastName: string;
  adressses: Address[],
  balanceChange?: BalanceChange,
}