// // pages/api/addProject.js

import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
import { addProject } from './helper/addProject';
import { deleteProject } from './helper/deleteProject';


const prisma = new PrismaClient()

export async function GET() {
	try {
		const projects = await prisma.projects.findMany();
		return new NextResponse(JSON.stringify(projects), {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		console.error('Error fetching data:', error);

		return new NextResponse('Error fetching data', {
			status: 500,
		});
	} finally {
		await prisma.$disconnect();
	}
}
export async function POST(req) {
	const requestBody = await req.json();
	switch (requestBody.purpose) {
		case 'ADD-PROJECT':
			return await addProject(requestBody.formData, prisma);
		case 'DELETE-PROJECT':
			return await deleteProject(requestBody.id, prisma);
		default:
			return new NextResponse(JSON.stringify({ error: 'Error adding project, purpose not found' }));
	}
}

