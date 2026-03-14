"use server";

import dbConnect from "@/database/dbconnect";
import Project, { ProjectT } from "@/models/project";
import fallbackList from "@/app/portfolio/projects/list";

const DB_RETRY_COOLDOWN_MS = 30_000;
const DB_ERROR_LOG_COOLDOWN_MS = 5 * 60_000;

type ProjectsServiceState = {
  dbRetryAfter: number;
  lastErrorLogAt: number;
};

declare global {
  // eslint-disable-next-line no-var
  var __projectsServiceState: ProjectsServiceState | undefined;
}

const serviceState: ProjectsServiceState =
  global.__projectsServiceState ??
  (global.__projectsServiceState = {
    dbRetryAfter: 0,
    lastErrorLogAt: 0,
  });

const isInDbCooldown = () => Date.now() < serviceState.dbRetryAfter;

const setDbCooldown = () => {
  serviceState.dbRetryAfter = Date.now() + DB_RETRY_COOLDOWN_MS;
};

const logDbError = (label: string, error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  const isKnownNetworkIssue =
    /querySrv|ECONNREFUSED|ENOTFOUND|ETIMEOUT|buffering timed out|server selection timed out|topology/i.test(
      message,
    );

  if (isKnownNetworkIssue) {
    // Expected in local/dev or temporary network outages.
    // We return fallback data without noisy repeated logs.
    return;
  }

  console.error(`${label}: ${message}`);
};

const mapFallbackProjects = () =>
  fallbackList.map((project, index) => ({
    ...project,
    _id: project.slug,
    order: index + 1,
    isQuickProject: index < 5,
  }));

const getFallbackQuickProjects = () => mapFallbackProjects().slice(0, 5);

const getFallbackProjectBySlug = (slug: string) =>
  mapFallbackProjects().find((project) => project.slug === slug) || null;

const ensureDbConnection = async (label: string) => {
  if (isInDbCooldown()) {
    return false;
  }

  try {
    await dbConnect();
    return true;
  } catch (error) {
    setDbCooldown();
    logDbError(label, error);
    return false;
  }
};

export async function getAllProjects() {
  const connected = await ensureDbConnection("Error fetching projects");
  if (!connected) {
    return mapFallbackProjects();
  }

  try {
    const projects = await Project.find({}).sort({ order: 1 }).lean();
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    logDbError("Error fetching projects", error);
    return mapFallbackProjects();
  }
}

export async function getQuickProjects() {
  const connected = await ensureDbConnection("Error fetching quick projects");
  if (!connected) {
    return getFallbackQuickProjects();
  }

  try {
    const projects = await Project.find({ isQuickProject: true })
      .sort({ order: 1 })
      .lean();
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    logDbError("Error fetching quick projects", error);
    return getFallbackQuickProjects();
  }
}

export async function getProjectBySlug(slug: string) {
  const connected = await ensureDbConnection("Error fetching project by slug");
  if (!connected) {
    return getFallbackProjectBySlug(slug);
  }

  try {
    const project = await Project.findOne({ slug }).lean();
    return JSON.parse(JSON.stringify(project));
  } catch (error) {
    logDbError("Error fetching project by slug", error);
    return getFallbackProjectBySlug(slug);
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
