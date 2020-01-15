const encodeService = require('../../src/services/encodeService');

module.exports = {
  up: async queryInterface => {
    return queryInterface.bulkInsert(
      'UserTest',
      [
        {
          name: 'Test',
          email: 'test@test.com',
          password: 'testpwd',
          hashedPwd: await encodeService.hashPwd('testpwd'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'test1',
          email: 'test1@test.com',
          password: '123456',
          hashedPwd: await encodeService.hashPwd('123456'),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('UserTest', null, {});
  }
};
