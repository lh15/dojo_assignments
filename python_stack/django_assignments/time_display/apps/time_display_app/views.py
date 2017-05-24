from django.shortcuts import render, HttpResponse, redirect
from datetime import datetime
import pytz
from tzlocal import get_localzone 
from django.utils.translation import to_locale, get_language

def index(request):
    print "index page"
    now = datetime.now(get_localzone()).strftime("%A, %d, %B %Y %I:%M%p")
    nowLocal = str(datetime.now().strftime("%A, %d, %B %Y %I:%M%p"))
    print nowLocal
    print now
    context = {
        "time_now":now,
        'nowLocal': nowLocal
    }
    print context

    return render(request, 'time_display_app/index.html', context)

def time(request):
    print "index page"
    now = datetime.now(get_localzone()).strftime("%A, %d, %B %Y %I:%M%p")
    nowLocal = datetime.now()
    print nowLocal
    print now
    context = {
        "time_now":now,
        'nowLocal': nowLocal
    }
    print context

    return render(request, 'time_display_app/index.1.html', context)