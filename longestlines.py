import sys

inFile = open(sys.argv[1], 'r')
output = ""
count = -1
lines = list()
for line in inFile:
    tmp = line.strip()
    if len(tmp) > 0:
        if tmp.isdigit() and count == -1:
            count = int(tmp)
            continue
        if len(lines) < count:
            lines.append(tmp)
        else:
            if len(tmp) > len(lines[0]):
                lines[0] = tmp;
        
        lines = sorted(lines, key=lambda x: len(x))
    
lines.reverse()
for l in lines:
    print(l)