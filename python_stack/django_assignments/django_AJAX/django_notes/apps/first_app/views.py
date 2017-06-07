from django.shortcuts import render, redirect
from .models import Note
# Create your views here.
def index(request):
    context = {
        'notes': Note.objects.all(),
    }
    return render(request, "first_app/index.html", context)


def process_note(request):
    if request.method == "POST":
        new_note = Note.objects.create(note = request.POST['note'])
        print new_note
        context = {
        'notes': Note.objects.all(),
        }
        return render(request, "first_app/notes.html", context)