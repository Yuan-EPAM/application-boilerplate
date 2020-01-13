const { UserTest } = require('../../sequelize/models');

const getUserByEmail = async target => {
  try {
    const user = await UserTest.findOne({
      where: {
        email: target
      }
    });
    return user;
  } catch (err) {
    throw Error('Error when retrieving user data by email!');
  }
};

const insertNewUser = async newUser => {
  try {
    await UserTest.create(newUser);
  } catch (err) {
    throw Error('Error when inserting a user data into DB!');
  }
};

module.exports = { getUserByEmail, insertNewUser };
