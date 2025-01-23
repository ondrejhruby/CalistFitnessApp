from mongoengine import Document, StringField, IntField, FloatField

class Exercise(Document):
    name = StringField(required=True, max_length=100)
    sets = IntField(required=True)
    reps_duration = StringField(max_length=50)  # E.g., "10 reps" or "60 seconds"
    weights = FloatField()  # E.g., 10.5 kg
    rest = StringField(max_length=50)  # E.g., "1 min"
    tempo = StringField(max_length=50)  # E.g., "2-1-2"
    tutorial_url = StringField()  # E.g., YouTube link
    rpe = IntField(min_value=1, max_value=10)  # Rate of Perceived Exertion
    main_muscle_groups = StringField()
    notes = StringField()