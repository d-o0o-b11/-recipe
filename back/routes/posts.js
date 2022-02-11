const router = require("express").Router();

const Post = require("../models/Post");

//CREATE POST
router.post("/", async (req, res) => {
    console.log(req.body)
    // {
    //     username: 'zzz',
    //     title: 'dadada',
    //     desc: 'czczczㅇㅁㅇ',
    //     photo: '164416056547420211221_001404.png'
    //   }
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        // console.log(savedPost)
        // {
        //     title: 'dadadaㅇㅁㅇㅁ',
        //     desc: 'czczczㅇㅁㅇㅇㅁㅇㅁ',
        //     photo: '164416072119320211221_001404.png',
        //     username: 'zzz',
        //     categories: [],
        //     _id: new ObjectId("61ffe6d13c9072b2a425c16f"),
        //     createdAt: 2022-02-06T15:18:41.538Z,
        //     updatedAt: 2022-02-06T15:18:41.538Z,
        //     __v: 0
        //   }
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName],
                },
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;