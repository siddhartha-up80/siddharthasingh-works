"use server";

import dbConnect from "@/database/dbconnect";
import Project, { ProjectT } from "@/models/project";

export async function getAllProjects() {
  try {
    await dbConnect();
    const projects = await Project.find({}).sort({ order: 1 }).lean();
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getQuickProjects() {
  try {
    await dbConnect();
    const projects = await Project.find({ isQuickProject: true })
      .sort({ order: 1 })
      .lean();
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.error("Error fetching quick projects:", error);
    return [];
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    await dbConnect();
    const project = await Project.findOne({ slug }).lean();
    return JSON.parse(JSON.stringify(project));
  } catch (error) {
    console.error("Error fetching project by slug:", error);
    return null;
  }
}

export async function createProject(data: Partial<ProjectT>) {
  try {
    await dbConnect();
    const project = await Project.create(data);
    return JSON.parse(JSON.stringify(project));
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
}

export async function updateProject(id: string, data: Partial<ProjectT>) {
  try {
    await dbConnect();
    const project = await Project.findByIdAndUpdate(id, data, {
      new: true,
    }).lean();
    return JSON.parse(JSON.stringify(project));
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
}

export async function deleteProject(id: string) {
  try {
    await dbConnect();
    await Project.findByIdAndDelete(id);
    return { success: true };
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
}
