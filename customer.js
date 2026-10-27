"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
class Customer extends user_1.User {
    taxNumber = 0;
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
}
var myCustomer = new Customer("Bugs", "Bunny");
const account = myCustomer;
if (account instanceof Customer) {
    const taxNo = account.taxNumber;
}
else {
    const name = account.getFullName();
}
