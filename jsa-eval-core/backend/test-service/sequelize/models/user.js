module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        unique: true,
        type: Datatypes.STRING
      },
      email: {
        unique: true,
        type: Datatypes.STRING
      },
      password: Datatypes.STRING
    },
    {}
  );

  User.associate = models => {
    User.hasone(models.userActive, {
      foreignKey: 'userEmail'
    });
  };

  return User;
};
