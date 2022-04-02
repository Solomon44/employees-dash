const User = require('../../models/user');

module.exports = {
  users: async () => {
    try {
      const users = await User.find();
      return users.map((user) => {
        return { ...user._doc, _id: user.id };
      });
    } catch (err) {
      throw err;
    }
  },

  createUser: async (args) => {
    const user = new User({
      name: args.userInput.name,
      email: args.userInput.email,
      mobile: args.userInput.mobile,
      company: args.userInput.company,
      jobTitle: args.userInput.jobTitle,
      department: args.userInput.department,
      joinDate: args.userInput.joinDate,
    });

    try {
      const result = await user.save();
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  },
};
