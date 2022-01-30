const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.get("/logout", async (req, res) => {
    // console.log("logout")
    res.json({ message: true });
    // console.log("/logout" + req.sessionID);
    // console.log(req.session)
    // // 세션을 삭제하기 위해서.
    // req.session.destroy(() => {
    //     
    // });
});

router.post('/signin', async (req, res) => {
    try {
        console.log(req.body.username)
        console.log(req.body.password)
        const obj = {
            username: req.body.username,
            password: req.body.password
        };
        // console.log(obj)
        let user = await User.find(obj);
        // console.log("HEY" + user[0]);
        console.log("user" + user[0])
        console.log("username" + user[0].username)
        if (user[0]) {
            // console.log(user[0]);
            res.json({ message: "로그인 되었습니다!", username: user[0].username });
        } else {
            res.json({ message: false });
        }
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
    // console.log("HHH")
    // User.findOne({ username: req.body.username, password: req.body.password }, (err, user) => {
    //     console.log(err)
    //     console.log(!user)
    //     if (err) return res.status(500).json('에러!');
    //     else if (user) return res.status(200).json('로그인 성공');
    //     else if (user == null) return res.status(404).json('존재하지 않는 회원');
    // });
})

// router.route('/signin').post((req, res) => {
//   User.findOne({ username: req.body.username, password: req.body.password })
//   .then(() => res.json('로그인 성공'))
//   .catch(err => res.status(404).json('Error: ' + err));




router.route('/add').post((req, res) => {
    console.log("WHY")
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    console.log(username)
    console.log(password)
    console.log(email)

    const newUser = new User({ username, password, email });

    newUser.save()
        .then(() => res.json('회원 가입 성공하였습니다.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;