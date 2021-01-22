const router = require("express").Router();
const { query } = require("../../utils/db");
const db = require("../../utils/db");

router.get("/", async (req, res, next) => {
    try {
        const { rows } = await db.query("SELECT * FROM article;");
        res.send(rows);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const { rows } = await db.query(
            `SELECT * FROM article WHERE article_id=${parseInt(req.params.id, 10)}`
        );
        res.send(rows);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});

router.post("/", async (req, res, next) => {
    try {
      const { article_headline,article_subhead,article_category,author,article_cover,article_content } = req.body;
      const query = `INSERT INTO article (article_headline,article_subhead,article_category,author,article_cover,article_content) VALUES ('${article_headline}','${article_subhead}','${article_category}','${author}','${article_cover}','${article_content}');`;
      const result = await db.query(query);
      res.send(result);
    } catch (e) {
      res.status(500).send(e);
    }
  });


  router.put("/:id", async (req, res, next) => {
    try {
        const { article_headline,article_subhead,article_category,author,article_cover,article_content } = req.body;
  
      const id = parseInt(req.params.id);
  
      const query = `UPDATE article SET article_headline='${article_headline}', article_subhead='${article_subhead}', article_category='${article_category}',author='${author}',article_cover='${article_cover}',article_content='${article_content}' WHERE article_id=${id}`;
  
      const result = await db.query(query);
      res.send(result);
    } catch (e) {
      res.status(500).send(e);
    }
  });

  router.delete("/:id", async (req, res, next) => {
    try {
      const { rows } = await db.query(
        `DELETE FROM article WHERE article_id=${parseInt(req.params.id, 10)}`
      );
      res.send(rows);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });


module.exports = router;