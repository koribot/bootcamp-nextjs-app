// // pages/api/addProject.js

import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from "next/server";


const prisma = new PrismaClient()

export async function GET() {
    try {
        const projects = await prisma.Projects.findMany();

        // Respond with a JSON object   
        return new NextResponse(JSON.stringify(projects), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching data:', error);

        // Respond with an error message and a 500 status code
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

        // Create a new project using Prisma
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
            status: 201, // Set the status code to 201 Created
        });

        return response;
    } catch (error) {
        console.error(error);
        const errorResponse = new NextResponse(JSON.stringify({ error: 'Error adding project' }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 500, // Set the status code to 500 Internal Server Error
        });

        return errorResponse;
    } finally {
        await prisma.$disconnect();
    }
}

