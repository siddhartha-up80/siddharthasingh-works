import { NextRequest, NextResponse } from "next/server";
import {
  getAllProjects,
  getQuickProjects,
  createProject,
  updateProject,
  deleteProject,
} from "@/services/projects";

// GET all projects or quick projects
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get("type");

    if (type === "quick") {
      const projects = await getQuickProjects();
      return NextResponse.json({ projects });
    }

    const projects = await getAllProjects();
    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Error in GET /api/projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

// POST - Create a new project
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const project = await createProject(body);
    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/projects:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}

// PUT - Update a project
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...data } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Project ID is required" },
        { status: 400 }
      );
    }

    const project = await updateProject(id, data);
    return NextResponse.json({ project });
  } catch (error) {
    console.error("Error in PUT /api/projects:", error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a project
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Project ID is required" },
        { status: 400 }
      );
    }

    await deleteProject(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in DELETE /api/projects:", error);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
