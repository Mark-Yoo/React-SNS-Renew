const express = require('express');
const { User } = require('../models');

const router = express.Router();

// 비동기 함수의 순서를 맞춰주기 위한 async/await 사용
router.post('/', async (req, res) => {
  await User.create({
    email: req.body.email,
    nickname: req.body.nickname,
    password: req.body.password,
  });
  res.json();
});

module.exports = router;