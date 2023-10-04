// // pages/api/addProject.js

import { PrismaClient } from '@prisma/client';

// export default async function AddProject(req, res) {
//     if (req.method === 'POST') {
//         const prisma = new PrismaClient();

//         try {
//             const { name, description, link, repoLink, imageLink } = req.body;

//             // Create a new project using Prisma
//             const newProject = await prisma.projects.create({
//                 data: {
//                     name,
//                     description,
//                     link,
//                     repoLink,
//                     imageLink,
//                 },
//             });

//             res.status(201).json(newProject);
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ error: 'Error adding project' });
//         } finally {
//             await prisma.$disconnect();
//         }
//     } else {
//         res.status(405).json({ error: 'Method not allowed' });
//     }
// }


import { NextResponse, NextRequest } from "next/server";


export function GET(NextRequest) {
    console.log(NextRequest.method)
    return new NextResponse(NextRequest.method)
}
export async function POST(req) {
    const requestBody = await req.text();
    const jsonData = JSON.parse(requestBody);


    const prisma = new PrismaClient();

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

