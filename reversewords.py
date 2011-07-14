import sys

inFile = open(sys.argv[1], 'r')
output = ""
for line in inFile:
    words = line.strip().split(" ")
    if len(words[0].strip()) > 0:
        words.reverse()
        output += " ".join(words) + "\n"
    
print(output.rstrip())
