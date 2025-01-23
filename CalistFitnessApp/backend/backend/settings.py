from mongoengine import connect

# MongoDB Configuration for MongoEngine
connect(
    db="calistfitnessapp",  # database name
    host="mongodb+srv://dbAdmin:<db_password>@calistfitnessapp-cluste.ky43g.mongodb.net/calistfitnessapp?retryWrites=true&w=majority",
    username="dbAdmin",  #  username
    password="db_password",  #  password
)

INSTALLED_APPS = [
    'exercises',
]