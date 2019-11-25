//user.js
let randomstring = require('randomstring');

module.exports = function(app,User){
    
    app.get('/api/users', function(req,res){
        User.find(function(err, users){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(users);
        })
    });

    app.post('/api/users', function(req,res){
        let user = new User();
        user.num = req.body.num;
        user.userid = req.body.userid;
        user.passwd = req.body.passwd;
        user.name = req.body.name;
        user.image = req.body.image;
        user.email = req.body.email;
        user.auth = req.body.auth;
        user.privatekey = randomstring.generate(10);

        user.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }

            res.json({result: 1});
        });
    });

}