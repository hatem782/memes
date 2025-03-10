import os
import json

def generate_file_list_json():
    # Get the list of files in the current directory
    files = [f for f in os.listdir('.') if os.path.isfile(f)]
    
    # Create a dictionary to store the file names
    data = {"files": files}
    
    # Write the data to a JSON file
    with open("file_list.json", "w") as json_file:
        json.dump(data, json_file, indent=4)
    
    print("file_list.json has been created successfully.")

if __name__ == "__main__":
    generate_file_list_json()