const { Router } = require('express');
const tabla =require("./tablas")

const router = Router();
// tablas
router.use('/tabla', tabla);


module.exports = router;
