# coding=utf-8

import zAI
from zAI import zImage
import tkinter as tk

zAI.utils.set_backend_key(key_name='MICROSOFT_AZURE_VISION_API_KEY', key_value='API KEY', save=True)
zAI.utils.set_backend_key(key_name='MICROSOFT_AZURE_URL', key_value='END POINT', save=True)

imageLink = 'people.jpg'
image = zImage(imageLink)
image.find_faces(backend='local')

myCloseup = image.extract_face(n=3, margin=15)  # margin is the number of pixels we will expand
myCloseup.display()
myCloseup.save("./face.jpg")
