from deepface import DeepFace

objs = DeepFace.analyze(img_path = "image2.jpg", 
        actions = ['emotion']
)
print(objs[0]['dominant_emotion'])