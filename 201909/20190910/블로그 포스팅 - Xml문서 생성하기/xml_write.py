import xml.etree.ElementTree as ET

korea = ET.Element("korea", where="asia")

seoul = ET.Element("seoul")
seoul.text = "서울"
korea.append(seoul)

busan = ET.Element("busan")
busan.text = "부산"
korea.append(busan)

def indent(elem, level=0):
    i = "\n" + level*"  "
    if len(elem):
        if not elem.text or not elem.text.strip():
            elem.text = i + "  "
        if not elem.tail or not elem.tail.strip():
            elem.tail = i
        for elem in elem:
            indent(elem, level+1)
        if not elem.tail or not elem.tail.strip():
            elem.tail = i
    else:
        if level and (not elem.tail or not elem.tail.strip()):
            elem.tail = i
indent(korea)
ET.dump(korea)

# ET.ElementTree(korea).write("korea.xml")
ET.ElementTree(korea).write("korea.xml", encoding="utf-8", xml_declaration=True)