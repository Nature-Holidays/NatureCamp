import os

# Define folder and file structure
structure = {
    "app": [
        "__init__.py",
        "routes/admin.py",
        "models/user_model.py",
        "db/mongo.py"
    ],
    ".": ["main.py", "requirements.txt"]
}

# Function to create folders and files
def create_structure():
    for folder, files in structure.items():
        for file in files:
            full_path = os.path.join(folder, file)
            os.makedirs(os.path.dirname(full_path), exist_ok=True)
            if not os.path.exists(full_path):
                with open(full_path, "w", encoding="utf-8") as f:
                    # Add initial line to __init__.py to avoid empty module warning
                    if file.endswith("__init__.py"):
                        f.write("# Package initializer\n")
                    elif file.endswith(".py"):
                        f.write("# " + file + "\n")
                    else:
                        pass
    print("✅ FastAPI folder structure created successfully!")

if __name__ == "__main__":
    create_structure()
