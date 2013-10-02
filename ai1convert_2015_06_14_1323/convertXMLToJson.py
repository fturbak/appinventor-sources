#!/usr/bin/env python
import xmltodict
import json

def convertXMLFileToJsonFile(xmlFilename, jsonFilename): 
    with open(xmlFilename, 'r') as xmlFile:
        xmlString = xmlFile.read()
        print('String from XML file ' + xmlFilename + ' has ' + str(len(xmlString)) + ' characters')
        jsonString = xmltodict.parse(xmlString)
        with open(jsonFilename, 'w') as jsonFile:
            jsonFile.write(json.dumps(jsonString, 
                                      sort_keys=True,
                                      indent=2, 
                                      separators=(',', ':')))

if __name__ == '__main__':  # pragma: no cover
    import sys
    infile = sys.argv[1]
    outfile = sys.argv[2]
    print('Reading XML from input file', infile, ' and writing corresponding JSON to output file ', outfile)
    convertXMLFileToJsonFile(infile, outfile)

