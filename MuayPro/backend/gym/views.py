from django.shortcuts import render

# Create your views here.
from .models import Fighter

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