import xml.etree.ElementTree as ET

# Element를 이용하여 태그를 만들 수 있다
korea = ET.Element("korea")
seoul = ET.Element("seoul")
# 만들어진 태그에 Text값을 추가할 수 있다
seoul.text="city"
# append를 이용하여 하위 태그에 추가할 수 있다.
korea.append(seoul)
ET.dump(korea)
