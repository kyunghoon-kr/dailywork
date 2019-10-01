import xml.etree.ElementTree as ET

korea = ET.Element("korea")
seoul = ET.Element("seoul")

korea.append(seoul)
# attrib을 통해 애트리뷰트 값을 추가한다
korea.attrib["where"] = 'Asia'

# Element 생성 시 직접 애트리뷰트 값을 추가할 수도 있다.
italy = ET.Element("italy", where='Europe')

ET.dump(korea)
ET.dump(italy)