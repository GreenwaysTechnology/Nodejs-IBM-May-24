const userRouter = require('express').Router();
const { PrismaClient } = require('@prisma/client')

//create prisma object 
const prisma = new PrismaClient()

//expose api
userRouter.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany()

        res.status(200).json(users)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }

})
userRouter.get('/:id', async (req, res) => {
    const id = Number(req.params.id)
    try {
        const user = await prisma.user.findUnique({
            where: {
                //id: id
                id
            },
        })
        if (user == null) {
            res.status(401).json({ message: `User not found for ID ${id}` })
        }
        res.status(200).json(user)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})
//insert row :
userRouter.post('/', async (req, res) => {
    try {
        const newUser = req.body
        if (newUser) {
            const user = await prisma.user.create({
                data: {
                    email: newUser.email,
                    name: newUser.name
                }
            })
            res.status(201).location("/api/users/save").json(user)
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

userRouter.put('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const user = req.body
        //update 
        const updateUser = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                name: user.name,
                email: user.email
            }
        })
        if (updateUser) {
            res.status(200).json(updateUser)
        } else {
            res.status(401).json({ message: `Update failed for ${id}` })
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//delete 
userRouter.delete('/:id', async (req, res) => {
    const id = Number(req.params.id)
    try {
        await prisma.user.delete({
            where: {
                id
            },
        })
        res.status(204).end()
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = userRouter