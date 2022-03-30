const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next){

res.render('home', req.context);

});

router.get('/blog', (req, res) => {
   
        res.render('blog', req.context)
});


module.exports = router;  