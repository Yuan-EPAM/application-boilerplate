module.exports = (sequelize, Datatypes) => {
  const UserActivity = sequelize.define(
    'UserActivity',
    {
      userEmail: {
        type: Datatypes.STRING,
        unique: true,
        allowNull: false
      },
      token: {
        type: Datatypes.STRING,
        unique: true
      }
    },
    {}
  );

  UserActivity.associate = models => {
    UserActivity.belongsTo(models.User, {
      foreignKey: 'userEmail',
      onDelete: 'CASCADE'
    });
  };

  return UserActivity;
};
