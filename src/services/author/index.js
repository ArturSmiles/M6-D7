const router = require("express").Router();
const { query } = require("../../utils/db");
const db = require("../../utils/db");

router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query("SELECT * FROM author;");
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `SELECT * FROM author WHERE author_id=${parseInt(req.params.id, 10)}`
    );
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { author_name, author_img } = req.body;
    const query = `INSERT INTO author (author_name,author_img) VALUES ('${author_name}','${author_img}');`;
    const result = await db.query(query);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});


router.put("/:id", async (req, res, next) => {
  try {
    const { author_name, author_img } = req.body;

    const id = parseInt(req.params.id);

    const query = `UPDATE author SET author_name='${author_name}', author_img='${author_img}' WHERE author_id=${id}`;

    const result = await db.query(query);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `DELETE FROM author WHERE author_id=${parseInt(req.params.id, 10)}`
    );
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});


module.exports = router;