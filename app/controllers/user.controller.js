const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const express = require('express');

// users hardcoded for simplicity, store in a db for production applications
const users = [{ id: 1, username: 'meushanadmin', password: 'q2EwsNB~?HJ=3jYp' }];

exports.authenticate = (req, res, next) => {
    authenticateUser(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'שם משתמש או סיסמה לא תקינים' }))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    getAllUsers()
        .then(users => res.json(users))
        .catch(err => next(err));
};

async function authenticateUser({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ sub: user.id }, config.secret);
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
};

async function getAllUsers() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
};