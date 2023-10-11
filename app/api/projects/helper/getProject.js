export async function getProject() {
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