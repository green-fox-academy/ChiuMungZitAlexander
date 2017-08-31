'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account

// Create function that transfers an balance of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - balance
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function list(name) {
    accounts.forEach(function(obj) {
        if (obj.client_name === name) {
            console.log("Client Name: " + obj.client_name + " | Balance: " + obj.balance);
        }
    }, this);
}

function transfer(from, to, blc) {
    if (accounts.some(function(value, index, array) {
        return value.account_number === from
    }) && accounts.some(function(value, index, array) {
        return value.account_number === to
    })) {
        accounts.forEach(function(obj) {
            obj.account_number === from ? obj.balance -= blc : "";
            obj.account_number === to ? obj.balance += blc : "";
        }, this);
        console.log("Transfer done.")
    } else {
        console.log("404 - account not found.")
    }
}

list("Igor");

transfer(11234543, 23456311, 100);
list("Igor");

transfer(11234543, 123, 100);