const router = require("express").Router();

const articleRouter = require("./article")
const authorRouter = require("./author")
const reviewRouter = require("./review")


router.use("/article",articleRouter)
router.use("/author",authorRouter)
router.use("/review",reviewRouter)

module.exports = router