import { PrismaClient } from '@prisma/client'

// const connectionString = `${process.env.DATABASE_URL}`

// const pool = new Pool({ connectionString })
// const adapter = new PrismaPg(pool)
const prisma = new PrismaClient()
export default prisma;

export async function connectDatabase() {
    try {
        await prisma.$connect();
        console.log(`Successfully connected to Database`);
    } catch (error) {
        console.log(`Error occurred while connecting to Database`);
        console.log(error);
    }
}