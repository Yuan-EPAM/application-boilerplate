const encodeService = require('../../src/services/encodeService');

module.exports = {
  up: async queryInterface => {
    return queryInterface.bulkInsert(
      'UserTest',
      [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'test@test.com',
          password: 'testpwd',
          hashedPwd: await encodeService.hashPwd('testpwd'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'test1',
          lastName: 'test1.1',
          email: 'test1@test1.com',
          password: '1234',
          hashedPwd: await encodeService.hashPwd('1234'),
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
