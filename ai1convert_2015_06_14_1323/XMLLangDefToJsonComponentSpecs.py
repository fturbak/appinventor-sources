#!/usr/bin/env python
'''Read in an OpenBlocks lang_def.xml file for App Inventor Classic, and extract
   specs of the following form: 

   { "Button-Click": {"kind": "componentEvent", "type":"component_event", "paramNames":[]}, 
     "Clock-AddDays": {"kind": "componentMethod", "type":"component_method", "paramNames":["instant", "days"], "isExpression":true}, 
     "Canvas-DrawCircle": {"kind": "componentMethodl", "type":"component_method"}
                           "paramNames":["centerX", "centerY", "radius"], "isExpression":false}
     ...}
'''

import os     
import json
import xml.etree.ElementTree as ET

def XMLLangDefFileToJsonComponentSpecsFile(xmlFileName, jsonFileName): 
    with open(xmlFileName, 'r') as xmlFile:
        xmlString = xmlFile.read()
        jsonSpec = XMLLangDefToJsonComponentSpecs(ET.fromstring(xmlString))
        with open(jsonFileName, 'w') as jsonFile:
            keys = jsonSpec.keys()
            keys.sort();
            jsonFile.write('{\n' + ',\n'.join(map(lambda key: '"' + key + '": ' + json.dumps(jsonSpec[key]), keys)) + '\n}')
# THis gives too many lines.
#             jsonFile.write(json.dumps(jsonSpec, 
#                                       sort_keys=True,
#                                       indent=0, 
#                                       separators=(',', ':')))

def XMLLangDefToJsonComponentSpecs(langDef):
    genuses = langDef.find('BlockGenuses').findall('BlockGenus')
    specs = {} 
    for genus in genuses:
        name = genus.attrib['name']
        print(name)
        firstSpecAttribs = genus.find('LangSpecProperties').find('LangSpecProperty').attrib
        if firstSpecAttribs['key'] == 'ya-kind':
            kind = firstSpecAttribs['value']
            if kind == "componentEvent":
                specs[name] = {# "kind": "componentEvent", 
                               "type":"component_event", 
                               "paramNames": getParamNames(genus)}
            elif kind == "componentMethod":
                stmOrExp = "statement"
                if getIsExpression(genus): 
                    stmOrExp = "expression"
                specs[name] = {# "kind": "componentMethod", 
                               "type":"component_method", 
                               "paramNames": getParamNames(genus), 
                               "kind": stmOrExp}
    return specs

def getParamNames(genus):
  connectors = genus.find('BlockConnectors').findall('BlockConnector')
  return map(lambda c1: c1.attrib['label'], filter(lambda c2: c2.attrib['connector-type'] == 'poly', connectors))

def getIsExpression(genus):
  connectors = genus.find('BlockConnectors').findall('BlockConnector')
  return len(filter(lambda c: c.attrib['connector-kind'] == 'plug', connectors)) == 1

if __name__ == '__main__':  
    import sys
    infile = sys.argv[1]
    outfile = sys.argv[2]
    print('Reading XML from input file', infile, ' and writing corresponding JSON to output file ', outfile)
    XMLLangDefFileToJsonComponentSpecsFile(infile, outfile)




