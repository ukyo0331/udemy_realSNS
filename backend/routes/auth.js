const User = require("../models/User");
const router = require('express').Router();
//パスワードのハッシュ化用ライブラリー
const bcrypt = require('bcrypt');

//ユーザー登録
router.post("/register",async (req, res) => {
    try {
        const password = req.body.password;
        //passのハッシュ化
        bcrypt.hash(password, 10)
            .then(async hashedPassword => {
                const newUser = await new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPassword,
                });
                const user = await newUser.save();
                return res.status(200).json(user)
            })
    } catch(err) {
        return res.status(500).json(err)
    }
});

//ログイン機能
router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        console.log(user)
        if(!user) return res.status(404).send("user  not found");
        //ハッシュ化したpassと入力が一致することの認証（true or false）
        const comparedPassword = await bcrypt.compare(req.body.password, user.password);
        if(!comparedPassword) {
            return res.status(400).json("passwordが違います")
        }
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router;

// //ユーザー登録
// router.post("/register",async (req, res) => {
//     try {
//         const newUser = await new User({
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password,
//         });
//         const user = await newUser.save();
//         return res.status(200).json(user)
//     } catch(err) {
//         return res.status(500).json(err)
//     }
// });
//
// //ログイン機能
// router.post("/login", async(req, res) => {
//     try {
//         const user = await User.findOne({email: req.body.email});
//         if(!user) return res.status(404).send("user  not found");
//
//         const availedPassword = req.body.password === user.password;
//         if(!availedPassword) {
//                 return res.status(400).json("passwordが違います")
//             }
//             return res.status(200).json(user);
//     } catch (err) {
//         return res.status(500).json(wee)
//     }
// })
//
// module.exports = router;