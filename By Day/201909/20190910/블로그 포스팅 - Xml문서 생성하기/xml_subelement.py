import xml.etree.ElementTree as ET

korea = ET.Element("korea")
# SubElement는 부모 태그를 지정하여 바로 하위 태그를 만들 수 있다.
ET.SubElement(korea, "busan")
# 하위 태그를 만들면서 바로 text를 지정할 수도 있다.
ET.SubElement(korea, "seoul").text = "city"
ET.dump(korea)

