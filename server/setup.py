import os

# Define folder and file structure
structure = {
    "app": [
        "__init__.py",
        "routes/admin.py",
        "models/user_model.py",
        "db/mongo.py"
    ],
    ".": ["main.py", "requirements.txt", ".env"]
}

# Function to create folders and files
def create_structure():
    for folder, files in structure.items():
        for file in files:
            full_path = os.path.join(folder, file)
            os.makedirs(os.path.dirname(full_path), exist_ok=True)
            if not os.path.exists(full_path):
                with open(full_path, "w", encoding="utf-8") as f:
                    if file.endswith("__init__.py"):
                        f.write("# Package initializer\n")
                    elif file == ".env":
                        f.write('MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/nature_camp?retryWrites=true&w=majority\n')
                    elif file.endswith(".py"):
                        f.write("# " + file + "\n")
    print("✅ FastAPI folder structure (with .env) created successfully!")

if __name__ == "__main__":
    create_structure()
