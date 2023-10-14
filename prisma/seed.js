const { PrismaClient } = require('@prisma/client')
const { hash } = require('bcrypt')

const prisma = new PrismaClient()


async function main() {

    const password = await hash('awaw', 12)
    const user = await prisma.user.upsert({
        where: { email: 'wwaw@gmail.com' },
        update: {},
        create: {
            email: 'wwaw@gmail.com',
            name: 'walid',
            password,
        }
    })
    console.log(user)
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect()
        process.exit(1)
    })