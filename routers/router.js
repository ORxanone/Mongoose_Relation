const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Staff = require("../controllers/staffController");
const Right = require("../controllers/rightController");

router.post("/staff/create", Staff.create);
router.post("/right/create", Right.create);
router.post("/all-right", Right.staffByRight);

module.exports = router;
