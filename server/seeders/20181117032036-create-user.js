const { User } = require('../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await User.create({
            name: 'John Smith',
            email: 'user@email.com',
            password: 'password',
            confirmed: true
        })

        return
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('User', null, {})
    },
}
