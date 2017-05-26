// importing bcrypt node moduls and the user model
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// creating the controller object
const userController = {};

// defining the action once the find all books belonging to a user promise is complete
userController.index = (req, res) => {
    User.findAll(req.params.id)
    .then(usersBooks => {
        res.json({
            message: 'ok',
            data: { usersBooks },
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({message: '400', err});
    });
};

// defining the action once the findByIsbn promise is complete
userController.show = (req, res) => {
    User.findIndividBook(req.params.id, req.params.isbn)
    .then(usersBook => {
        res.json({
            message: 'ok',
            data: { usersBook },
        });
    })
    .catch(err => {
        res.status(400).json({ message: '400', err});
    });
};

// defining the action once the create new book promise is complete
userController.create = (req, res) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    User.create({
        username: req.body.username, 
        email: req.body.email, 
        password: hash, 
    })
    .then(user => {
        req.login(user, err => {
            if (err) return next(err);
            res.json({ message: 'ok', data: { user }});
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({message: '400, err'});
    });
};

// defining the action once the update book entry promise is complete
userController.update = (req, res) => {
  User.update({
    users_book: req.body.book,
  }, req.params.id)
    .then(users_book => {
      res.json({
        message: 'ok',
        data: { users_book },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
};

userController.destroy = (req, res) => {
  User.destroy(req.params.id)
    .then(() => {
      res.json({message: 'book entry deleted'});
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
};

// exporting the user controller
module.exports = userController;