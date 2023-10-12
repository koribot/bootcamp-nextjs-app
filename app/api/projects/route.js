
import { PrismaClient } from '@prisma/client';
import { addProject } from './helper/addProject';
import { getProject } from './helper/getProject';


const prisma = new PrismaClient()

export async function GET(req) {
	return await getProject(req, prisma)
}
export async function POST(req) {
	const requestBody = await req.json();
	console.log(requestBody)
	return await addProject(requestBody, prisma);
}

