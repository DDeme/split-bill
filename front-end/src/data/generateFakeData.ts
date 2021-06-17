import { IContact } from "@/models/Contacts";
import faker from "faker";
import { v4 as uuidv4 } from "uuid";

export const generateContacts = (n = 1000): IContact[] => {
  const fakeData: IContact[] = [];
  for (let i = 0; i < n; i++) {
    const contact: IContact = {
      id: uuidv4(),
      emails: [faker.internet.email()],
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phones: [faker.phone.phoneNumber()],
      adressses: [],
    };
    fakeData.push(contact);
  }
  return fakeData;
};
