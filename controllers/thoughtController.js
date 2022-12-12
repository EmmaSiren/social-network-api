const { Thought, User} = require('../models');

module.exports = {
  // GETs all thoughts using find method
  getThoughts(req,res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // GETs a single thought using findOne method and thoughtId in url
  getSingleThought(req,res) {
    Thought.findOne({ _id: req.params.thoughtId})
      .then((thought) => 
        !thought
          ? res.status(404).json({message: 'No thought with that ID'})
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // POSTs a new thought using create method and JSON body
  createThought(req,res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          {_id: req.body.userId},
          {$push: {thoughts: thought._id}},
          {new: true}
        );
      })
      .then((user) =>
        !user 
          ? res.status(404).json({message: 'Thought created, but found no user with that ID'})
          : res.json('Created the thought')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // PUTs updated thought using findOneAndUpdate method and thoughtId in url
  updateThought(req,res) {
    Thought.findOneAndUpdate(
      {_id: req.params.thoughtId},
      {$set: req.body},
      {runValidators: true, new: true}
    )
      .then((thought) => 
        !thought
          ? res.status(404).json({message: 'No thought with this id!'})
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // DELETEs thought using findOneAndRemove method and thoughtId in url
  deleteThought(req,res) {
    Thought.findOneAndRemove({_id: req.params.thoughtId})
      .then((thought) => 
        !thought 
          ? res.status(404).json({message: 'No thought with this id!'})
          : User.findOneAndUpdate(
            {thoughts: req.params.thoughtId},
            {$pull: {thoughts: req.params.thoughtId}},
            {new: true}
          )
      )
      .then((user) =>
        !user
          ? res.status(404).json({message: 'Thought deleted but no user with this id!'})
          : res.json({message: 'Thought successfully deleted!'})
      )
      .catch((err) => res.status(500).json(err));
  },

  // POSTs reaction using findOneAndUpdate method and thoughtId in url and JSON body
  // Updates thought to include the reaction
  addReaction(req,res) {
    Thought.findOneAndUpdate(
      {_id: req.params.thoughtId},
      {$addToSet: {reactions: req.body}},
      {runValidators: true, new: true}
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({message: 'No thought with this id!'})
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // DELETEs reaction using findOneAndUpdate method and thoughtId and reactionId in url
  removeReaction(req,res) {
    Thought.findOneAndUpdate(
      {_id: req.params.thoughtId},
      {$pull: {reactions: {reactionId: req.params.reactionId}}},
      {runValidators: true, new: true}
    )
      .then((thought) => 
        !thought
          ? res.status(404).json({message: 'No thought with this id!'})
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};