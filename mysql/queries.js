module.exports = {
  getAllUsers: `SELECT * FROM users`,
  getUserProfileByID: function (userId) {
    if (!userId || typeof userId !== "number") return "";
    return `SELECT user_name,password FROM users Where id=${userId}`;
  },
  addUser: function (password, user_name) {
    return `INSERT IGNORE users (password,user_name) VALUE ('${password}','${user_name}');`;
  },
};
