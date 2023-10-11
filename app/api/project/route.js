// // pages/api/addProject.js

import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";


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
    const requestBody = await req.text();
    const jsonData = JSON.parse(requestBody);
    try {
        const { name, description, link, repoLink, imageLink } = jsonData;

        const newProject = await prisma.projects.create({
            data: {
                name,
                description,
                link,
                repoLink,
                imageLink,
            },
        });

        const response = new NextResponse(JSON.stringify(newProject), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 201,
        });

        return response;
    } catch (error) {
        console.error(error);
        const errorResponse = new NextResponse(JSON.stringify({ error: 'Error adding project' }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 500,
        });

        return errorResponse;
    } finally {
        await prisma.$disconnect();
    }
}

