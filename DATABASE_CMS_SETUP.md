# Database-Driven Portfolio with CMS

This application has been converted from hardcoded data to a database-driven architecture with a Content Management System (CMS).

## Features

- ✅ MongoDB database for storing projects
- ✅ RESTful API routes for CRUD operations
- ✅ Minimalistic CMS interface for managing projects
- ✅ Image upload to local `/public/images` folder
- ✅ Server-side data fetching with Next.js
- ✅ All existing projects seeded to database

## Setup Instructions

### 1. Install Dependencies

First, install the required `tsx` package for running TypeScript files:

```bash
npm install tsx dotenv --save-dev
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your MongoDB connection string:

```
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database
NEXT_PUBLIC_CMS_PASSWORD=your-secure-password
```

### 3. Seed the Database

Run the seed script to populate your database with existing project data:

```bash
npm run seed
```

This will:

- Connect to your MongoDB database
- Clear any existing projects
- Insert all 13 projects from your hardcoded data
- Set proper ordering and categorization (Quick Projects vs All Projects)

### 4. Run the Application

Start the development server:

```bash
npm run dev
```

## CMS Access

### Login to CMS

1. Navigate to: `http://localhost:3000/cms`
2. Enter password (default: `admin123`)
3. Access the projects dashboard

### Managing Projects

**View All Projects**: `/cms/projects`

- See all projects in a table format
- View thumbnails, titles, order, and quick project status

**Create New Project**: `/cms/projects/new`

- Fill in all project details
- Upload image (saves to `/public/images`)
- Set order and quick project status
- Choose color for quick projects

**Edit Project**: Click edit icon on any project

- Update any project field
- Replace image if needed
- Save changes

**Delete Project**: Click delete icon

- Confirms before deletion
- Removes from database

## API Endpoints

### GET `/api/projects`

Fetch all projects or quick projects only

```
Query params: ?type=quick (optional)
```

### GET `/api/projects/[slug]`

Fetch a single project by slug

### POST `/api/projects`

Create a new project

```json
{
  "title": "Project Title",
  "slug": "project-slug",
  "description": "Short description",
  "details": "Long description",
  "link": "https://project-url.com",
  "img": "/images/project.png",
  "type": "Full Stack",
  "tech": "Next.js, React, MongoDB",
  "color": "#EC4889",
  "order": 1,
  "isQuickProject": true
}
```

### PUT `/api/projects`

Update an existing project

```json
{
  "id": "project-id",
  "title": "Updated Title",
  ...
}
```

### DELETE `/api/projects?id=project-id`

Delete a project

### POST `/api/upload`

Upload image file

- Saves to `/public/images`
- Returns image URL path

## Database Schema

### Project Model

```typescript
{
  title: String (required)
  type: String (optional)
  tech: String (optional)
  slug: String (required, unique)
  img: String (required)
  description: String (required)
  details: String (optional)
  link: String (required)
  order: Number (required)
  isQuickProject: Boolean (default: false)
  color: String (optional)
  createdAt: Date
  updatedAt: Date
}
```

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── projects/
│   │   │   ├── route.ts          # CRUD operations
│   │   │   └── [slug]/route.ts   # Get by slug
│   │   └── upload/
│   │       └── route.ts          # Image upload
│   ├── cms/
│   │   ├── page.tsx              # CMS login
│   │   └── projects/
│   │       ├── page.tsx          # Projects list
│   │       ├── new/page.tsx      # Create project
│   │       └── edit/[id]/page.tsx # Edit project
│   └── portfolio/
│       └── page.tsx              # Main portfolio (now fetches from DB)
├── models/
│   └── project.ts                # Mongoose schema
├── services/
│   └── projects.ts               # Database service functions
├── scripts/
│   └── seed-projects.ts          # Database seeding
└── components/
    ├── portfolio/
    │   └── QuickProjects.tsx     # Now receives props
    └── portfolioProjects/
        └── AllProjects.tsx       # Now receives props
```

## Notes

- Images are stored locally in `/public/images/` with timestamp prefixes
- CMS authentication uses sessionStorage (simple implementation)
- For production, consider implementing proper authentication (NextAuth, etc.)
- The seed script can be run multiple times - it clears existing data first
- All frontend components now fetch data from the database via server components

## Security Recommendations

1. Change the default CMS password in `.env.local`
2. For production, implement proper authentication (JWT, OAuth, etc.)
3. Add rate limiting to API routes
4. Validate and sanitize all user inputs
5. Consider adding image optimization/compression
6. Add CORS protection to API routes if needed

## Troubleshooting

**Can't connect to MongoDB**:

- Check your connection string in `.env.local`
- Ensure your IP is whitelisted in MongoDB Atlas
- Verify database user has proper permissions

**Seed script fails**:

- Make sure MongoDB is running
- Check `.env.local` configuration
- Run: `npm install tsx dotenv --save-dev`

**Images not uploading**:

- Ensure `/public/images/` directory exists (created automatically)
- Check file permissions
- Verify image size limits

**CMS redirects to login**:

- Clear your browser's sessionStorage
- Check password in `.env.local`
