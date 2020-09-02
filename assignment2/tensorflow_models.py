import tensorflow as tf
import numpy as np
import os
#import PIL.Image as Image
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
cifar_path = os.path.join(BASE_DIR,"assignment2/models/cifar10")
class_names = ['airplane', 'automobile', 'bird', 'cat', 'deer',
               'dog', 'frog', 'horse', 'ship', 'truck']
def cifar(image):
    print(type(image))

    img = np.asarray(image.resize((32,32)))
    #img=img.resize((32,32))

    model = tf.keras.models.load_model(cifar_path)
    result = model.predict(img.reshape((1,32,32,3)))
    result = result.tolist()
    index = result.index(max(result))
    print(class_names[index])
    return class_names[index]

