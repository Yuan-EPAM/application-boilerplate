module.exports = (sequelize, DataTypes) => {
  const UserTest = sequelize.define(
    'UserTest',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  return UserTest;
};
