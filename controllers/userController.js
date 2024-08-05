// user controller file - controllers/userController.js

const asyncHandler = require('express-async-handler')

const getUserById = asyncHandler(async (req, res) => {
  const userId = req.params.id

  const user = await someDBQueryToGetUser(userId)

  if (!user) {
    throw new CustomNotFoundError('User not found')
  }

  res.send(`User found: ${user.name}`)
})

const getUsers = asyncHandler(async (req, res) => {
  // code
})

const createUser = asyncHandler(async (req, res) => {
  // code
})

module.exports = { getUserById, getUsers, createUser }
