const Right = require("../model/rightModel");

module.exports = {
  create: async (req, res) => {
    const right = await Right.create({
      staff_id: req.body.staff_id,
      right: req.body.right,
    });

    const rightData = await right.save();

    return res.send(rightData);
  },
  staffByRight: async (req, res) => {
    const rightData = await Right.find({ _id: req.body.right_id })
      .populate({
        path: 'staff_id',
        match: { $regex: '.*GMAIL*.', $options: "i"}
      });

    console.log(rightData);

    res.send(rightData);
  },
};
