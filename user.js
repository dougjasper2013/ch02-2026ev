"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    firstName = '';
    lastName = '';
    isActive = false;
    constructor(firstName, lastName, isActive = true) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.isActive = isActive;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getActive() {
        return this.isActive;
    }
}
exports.User = User;
