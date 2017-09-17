var express = require('express');
var router = express.Router();

const {Post, User, Comment, City} = require("../models");

// Get Homepage
router.get('/', ensureAuthenticated, (req, res) => {
  Post.findAll({ include: [{ all: true, nested: true }]}).then(posts => {
    res.render('index', {posts});
  });
});

router.get('/api/comment', ensureAuthenticated, (req, res) => {
  Post.findAll({ include: [{ all: true, nested: true }]}).then(posts => {
    res.json(posts);
  });
});

router.get('/comment', (req, res) => {
  res.send({id: req.user.dataValues.id, username: req.user.dataValues.username});
});

router.post('/comment', (req, res) => {
  Comment.create(req.body).then(() => {
    res.redirect('/')
  });
});

router.get('/search',function(req, res){
  console.log(req.query.key)
  City.findAll({where: {city: {$like: '%' + req.query.key + '%'}}}).then((city) => {
        var data=[];
    for(i=0;i<city.length;i++)
      {
        data.push(city[i].city +", " + city[i].state_code);
      }
      res.end(JSON.stringify(data));
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/users/signup');
  }
}

module.exports = router;