import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("This is Auth")
})
router.post('/register', (req, res) => {
    res.send("This is Auth -  Register")
})
export default router;