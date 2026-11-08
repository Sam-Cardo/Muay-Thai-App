from django.shortcuts import render

# imports
from .models import Fighter

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import TrainingPlan, Gym
from gymmanager.gemini_service import generate_training_plan
from django.contrib.auth.models import User

# looks for every fighters record in the database and then passes it to the template as a context variable called 'fighters'
# then looks for a template called 'fighters.html' in the templates folder and renders it with the context variable 'fighters'
def fighters(request):
    fighters = Fighter.objects.all()
    return render(request, 'fighters.html', {'fighters': fighters})

# This looks for home.html in the templates folder and renders it with no context variables.
def home(request):
    return render(request, 'home.html')

# This looks for schedule.html in the templates folder and renders it with a context variable called 'schedule' which is a list of all the bouts in the database.
def schedule(request):
    return render(request, 'schedule.html', {'schedule': schedule}) 

# This looks for bouts.html in the templates folder and renders it with a context variable called 'bouts' which is a list of all the bouts in the database.
def bouts(request):
    return render(request, 'bouts.html', {'bouts': bouts})

# makes sure it only accepts post requests 
@api_view(['POST'])

def create_training_plan(request):

    # gets fighter infomation from the entered infomation and stores it in a variable called fighter_data
    fighter_data = request.data

    # calls the generate_training_plan function from the gemini_service.py file and passes the fighter_data to it. The returned plan is stored in a variable called plan.
    plan = generate_training_plan(fighter_data)

    # Get the coach and gym from the database.  
    coach = User.objects.first()
    gym = Gym.objects.first()

    # Check that a coach and gym exist if not, return an error response with a 400 status code.
    if not coach or not gym:
        return Response({
            "error": "A coach and gym must exist before saving a plan."
        }, status=400)

    # Save the training plan to the database with the coach, gym, title, goal, generated_by_ai, plan_content, and status fields. 
    # The title is generated using the fighter's name and the goal is taken from the fighter_data. 

    training_plan = TrainingPlan.objects.create(
        coach=coach,
        gym=gym,
        title=f"{fighter_data['name']}'s AI Training Plan",
        goal=fighter_data['goal'],
        generated_by_ai=True,
        plan_content=plan,
        status="draft"
    )

# returns a response with the training plan's id, title, and plan_content in JSON format with a 201 status code.
    return Response({
        "id": training_plan.id,
        "title": training_plan.title,
        "training_plan": training_plan.plan_content
    }, status=201)
