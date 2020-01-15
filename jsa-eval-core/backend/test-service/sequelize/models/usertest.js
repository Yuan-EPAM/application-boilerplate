module.exports = (sequelize, DataTypes) => {
  const UserTest = sequelize.define(
    'UserTest',
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      password: DataTypes.STRING,
      hashedPwd: DataTypes.STRING
    },
    {
      freezeTableName: true
    }
  );

  return UserTest;
};
