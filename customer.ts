import { User } from './user';

class Customer extends User {
    taxNumber: number = 0;

    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}

var myCustomer = new Customer("Bugs", "Bunny");

const account: User | Customer = myCustomer;

if (account instanceof Customer) {
    const taxNo = account.taxNumber;
}
else {
    const name = account. getFullName();
}