import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { existsSync, mkdirSync } from "fs";

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename with timestamp
    const timestamp = Date.now();
    const filename = `${timestamp}-${file.name.replace(/\s+/g, "-")}`;
    const publicDir = join(process.cwd(), "public", "images");

    // Ensure images directory exists
    if (!existsSync(publicDir)) {
      mkdirSync(publicDir, { recursive: true });
    }

    const path = join(publicDir, filename);
    await writeFile(path, buffer);

    // Return the public URL path
    const imageUrl = `/images/${filename}`;

    return NextResponse.json({ imageUrl }, { status: 201 });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}
