# Backend Setup

## Step 1: Navigate to the Backend Folder

```bash
cd NatureCamp/server
```

## Step 2: Activate Virtual Environment

If you haven't created a virtual environment yet, run:

```bash
python -m venv venv
```

Then activate it:

**On Windows:**
```bash
venv\Scripts\activate
```

**On macOS/Linux:**
```bash
source venv/bin/activate
```

## Step 3: Run Setup Script (Optional Folder Initialization)

This will create necessary folders like `app/models`, `app/routes`, etc., and a default `.env` file:

```bash
python setup.py
```

**Important:** After running the script, open the generated `.env` file and update the MongoDB URI:

```env
MONGO_URI=mongodb+srv://naturecamp_user:<password>@naturecamp.oyvydke.mongodb.net/?retryWrites=true&w=majority&appName=NatureCamp
```

## Step 4: Install Dependencies

Install all required packages from `requirements.txt`:

```bash
pip install -r requirements.txt
```

## Step 5: Run the FastAPI Server

Start the server using Uvicorn:

```bash
uvicorn main:app --reload
```

By default, the server will run at:
- **Main API**: http://localhost:8000
- **Swagger Docs**: http://localhost:8000/docs

## Connected Frontend

The backend is CORS-enabled for `http://localhost:5173`, so the frontend can make API calls without issues.