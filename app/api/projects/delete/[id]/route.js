import { NextResponse } from "next/server";
import { deleteProject } from "../../helper/deleteProject";


export async function DELETE(req, _params) {
  // const { id } = req.query;
  const projectId = _params.params.id
  return await deleteProject(projectId);

}
