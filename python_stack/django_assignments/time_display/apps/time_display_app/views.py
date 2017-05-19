from django.shortcuts import render, HttpResponse
from datetime import datetime
import pytz
from tzlocal import get_localzone 

def index(request):
    print "index page"
    now = datetime.now(get_localzone()).strftime("%A, %d, %B %Y %I:%M%p")
    print now
    context = {
        "time_now":now
    }
    print context

    return render(request, 'time_display_app/index.html', context)