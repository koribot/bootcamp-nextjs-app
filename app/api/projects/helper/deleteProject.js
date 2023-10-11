import { NextResponse } from "next/server";

export async function deleteProject(id, prisma) {
  try {
    const deletedProject = await prisma.projects.delete({
      where: {
        id: id,
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
