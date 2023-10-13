import { NextResponse } from "next/server";


export async function addProject(requestBody, prisma) {
  try {
    const { name, description, link, repoLink, imageLink } = requestBody;

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
