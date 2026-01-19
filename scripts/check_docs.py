import os
import sys

doc_file = "Documentation.md"

if not os.path.exists(doc_file):
    print("Error: Documentation.md does not exist")
    sys.exit(1)

if os.path.getsize(doc_file) == 0:
    print("Error: Documentation.md is empty")
    sys.exit(1)

print("Documentation.md check passed")
