const { User, Thought } = require('../models');

module.exports = {
  // GETs all users using find method
  getUsers( req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // GETs a single user using findOne method and userId in url
  getSingleUser(req,res) {
    User.findOne({_id: req.params.userId})
      .select('-__v')
      .then((user) => 
        !user
          ? res.status(404).json({message: 'No user with that ID'})
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // POSTs a new user using create method and JSON body
  createUser(req,res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // PUTs updated user using findOneAndUpdate method and userId in url
  updateUser(req,res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) => 
        !user
          ? res.status(404).json({message: 'No user with that ID'})
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // DELETEs user using findOneAndRemove method and userId in url
  deleteUser(req,res) {
    User.findOneAndDelete({_id: req.params.userId})
      .then((user) => 
        !user
          ? res.status(404).json({message: 'No user with that ID'})
          : Thought.deleteMany({_id: { $in: user.thoughts} })
      )
      .then(() => res.json({message: 'User and associated thoughts deleted!'}))
      .catch((err) => res.status(500).json(err));
  },

  // POSTs friend using findOneAndUpdate method and userId in url and JSON body
  // Updates user to include the friend
  addFriend(req,res) {
    User.findOneAndUpdate(
      {_id: req.params.userId},
      {$addToSet: {friends: req.params.friendId}},
      {runValidators: true, new: true}
    )
      .then((friend) =>
        !friend
          ? res.status(404).json({message: 'No user with this id!'})
          : res.json(friend)
      )
      .catch((err) => res.status(500).json(err));
  },

  // DELETEs friend using findOneAndUpdate method and userId and friendId in url
  removeFriend(req,res) {
    User.findOneAndUpdate(
      {_id: req.params.userId},
      {$pull: {friends: req.params.friendId}},
      {runValidators: true, new: true}
    )
      .then((friend) => 
        !friend
          ? res.status(404).json({message: 'No user with this id!'})
          : res.json(friend)
      )
      .catch((err) => res.status(500).json(err));
  },
};