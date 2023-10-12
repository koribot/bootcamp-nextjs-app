import { NextResponse } from "next/server";


export async function GET(req) {
  // const { id } = req.query;
  console.log(req)
	return new NextResponse(JSON.stringify({ okay:'okay'}));
	
}
