const {PrismaClient} = require('@prisma/client')
const {hash} = require('bcrypt')

const prisma = new PrismaClient()


async function main(){

    const password = await hash('koribot24', 12)
    const user = await prisma.user.upsert({
        where:{email:'w.cawasa@gmail.com'},
        update:{},
        create:{
            email:'w.cawasa@gmail.com',
            name:'walid',
            password,
        }
    })
    console.log(user)
}

main()
    .then(()=>prisma.$disconnect())
    .catch(async(e)=>{
        console.log(e);
        await prisma.$disconnect()
        process.exit(1)
    })