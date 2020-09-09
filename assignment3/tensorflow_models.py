import tensorflow as tf
import numpy as np
import os
from PIL import ImageOps
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
cats_anddogs_path = os.path.join(BASE_DIR,"assignment3/models/model2")

def catsanddogs(image):


    img = np.asarray(image.resize((200,200)))

    #img=img.resize((32,32))

    model = tf.keras.models.load_model(cats_anddogs_path)
    result = model.predict(img.reshape((1,200,200,3)))
    cat = result[0]
    dog =1 - result[0]
    if(cat>dog):
        return "Cat"
    else:
        return "Dog"



