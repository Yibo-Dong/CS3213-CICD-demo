import os
import sys

required_prefix = "NextBus"
directory_to_check = "src"

for file in os.listdir(directory_to_check):
    if file.endswith(".js") and not file.startswith(required_prefix):
        print(f"Error: File {file} in {directory_to_check} does not start with prefix '{required_prefix}'")
        sys.exit(1)

print("Filename prefix check passed")
