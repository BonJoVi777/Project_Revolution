from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Task
from .forms import TaskForm

def index(request):
    tasks = Task.objects.order_by('-id')[:5]
    return render(request, 'main/index.html', {'title': 'Home page', 'tasks': tasks})


def about(request):
    return render(request, 'main/about.html')

def tasks(request):
    error = ''
    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
            redirect('home')
        else:
            error = 'Form was incorrect'

    form = TaskForm()
    context = {
        'form': form,
        'error': error,
    }
    return render(request, 'main/tasks.html')