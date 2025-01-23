from django.http import JsonResponse
from .models import Exercise
from django.views.decorators.csrf import csrf_exempt
import json

# Disable CSRF for testing (not recommended for production)
@csrf_exempt
def create_exercise(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)  # Parse JSON from request body
            exercise = Exercise(
                name=data.get("name"),
                sets=int(data.get("sets")),
                reps_duration=data.get("reps_duration"),
                weights=float(data.get("weights", 0)),
                rest=data.get("rest"),
                tempo=data.get("tempo"),
                tutorial_url=data.get("tutorial_url"),
                rpe=int(data.get("rpe")),
                main_muscle_groups=data.get("main_muscle_groups"),
                notes=data.get("notes"),
            )
            exercise.save()
            return JsonResponse({"message": "Exercise created successfully", "id": str(exercise.id)})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=405)


@csrf_exempt
def get_exercises(request):
    if request.method == "GET":
        exercises = Exercise.objects()  # Retrieve all Exercise documents
        data = [{"id": str(ex.id), "name": ex.name, "sets": ex.sets, "reps_duration": ex.reps_duration} for ex in exercises]
        return JsonResponse({"exercises": data})

    return JsonResponse({"error": "Invalid request method"}, status=405)