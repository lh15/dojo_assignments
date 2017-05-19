from django.shortcuts import render, HttpResponse, redirect
import requests


def index(request):
    print "index"
    return render(request, 'survey_form_app/index.html')

def result(request):
    print "result"
    return render(request, 'survey_form_app/result.html')

def process(request):
    if request.method == "POST":
        if 'count' not in request.session.keys():
            request.session['name'] = request.POST['name']
            request.session['location'] = request.POST['location']
            request.session['language'] = request.POST['language']
            request.session['comment'] = request.POST['comment']
        print "Got info"
        return redirect('/result')
        
    else:
        return redirect("/")