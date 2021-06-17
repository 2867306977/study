const express = require("express");

const Users = require("../db/models/users");

const router = new express.Router();

// 查询数据
// 分页查询
router.get("/:page/:limit", async (req, res) => {
  // limit 每页多少条
  // page 第几页
  const limit = +req.params.limit;
  const page = +req.params.page;

  if (!limit || !page) {
    res.json({
      code: 201,
      message: "数据不能为空",
    });
    return;
  }

  const users = await Users.find({}, { password: 0, __v: 0 })
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await Users.count();

  res.json({
    code: 200,
    data: {
      total: total,
      data: users,
    },
  });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.json({
      code: 201,
      message: "数据不能为空",
    });
    return;
  }

  const user = await Users.findOne({ _id: id }, { password: 0, __v: 0 });

  res.json({
    code: 200,
    data: user,
  });
});
// 新增数据
router.post("/", async (req, res) => {
  const { username, nickname, password } = req.body;

  console.log(req.body);

  if (!username || !nickname || !password) {
    res.json({
      code: 201,
      message: "数据不能为空",
    });
    return;
  }

  try {
    await Users.create({
      username,
      nickname,
      password,
    });

    res.json({
      code: 200,
      data: null,
    });
  } catch (e) {
    console.log(e);
    // 用户名已存在
    res.json({
      code: 202,
      message: "用户名已存在",
    });
  }
});
// 修改数据
router.put("/:id", async (req, res) => {
  const { username, nickname, password } = req.body;
  const { id } = req.params;

  if (!id || !username || !nickname || !password) {
    res.json({
      code: 201,
      message: "数据不能为空",
    });
    return;
  }

  await Users.updateOne(
    {
      _id: id,
    },
    {
      username,
      nickname,
      password,
    }
  );

  res.json({
    code: 200,
    data: null,
  });
});
// 删除数据
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.json({
      code: 201,
      message: "数据不能为空",
    });
    return;
  }

  await Users.deleteOne({
    _id: id,
  });

  res.json({
    code: 200,
    data: null,
  });
});

module.exports = router;
