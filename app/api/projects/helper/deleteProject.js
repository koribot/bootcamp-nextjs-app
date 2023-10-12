import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function deleteProject(id) {
  const parsedID = parseInt(id, 10)
  try {
    const deletedProject = await prisma.projects.delete({
      where: {
        id: parsedID,
      },
    });
    if (!deletedProject) {
      return new NextResponse("Project not found or couldn't be deleted.", {
        status: 404,
      });
    }
    return new NextResponse(JSON.stringify(deletedProject), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    });
  } catch (error) {
    console.error('Error deleting project:', error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
