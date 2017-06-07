from django.shortcuts import render, HttpResponse, redirect
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.core.urlresolvers import reverse
import re
import datetime
import pytz
from .models import User, Author, Book, Review

# Create your views here.
def index(request):
    if 'logged_in' not in request.session.keys():
        request.session['logged_in'] = False
        print request.session['logged_in']
        return render(request, "first_app/index.html")
    if request.session['logged_in'] == False:
        return render(request, "first_app/index.html")
        print request.session['logged_in']
    else:
        print request.session['logged_in']
        return redirect('/books')

def process_registration(request):
    if request.method == "POST":
        error = False
         # for now i am passing in the entire request object for the sake of the django messages(will fix), and i am using session to repopulate the fields,
        user = User.objects.register(request.POST, request.session, request)
        error = False
        if user:
                return redirect('/books')
        return redirect('/')
    return redirect('/')

def process_login(request):
    if request.method == "POST":
        error = False
        # for now i am passing in the entire request object for the sake of the django messages(will fix), and i am using session to repopulate the fields
        user = User.objects.login(request.POST, request.session, request)
        if user:
            return redirect('/books')
        else:         
            return redirect('/login')
        return redirect('/login')

def login(request):
    return render(request, "first_app/login.html")

def log_out(request):
    request.session.pop('logged_in')
    return redirect('/login')

def books(request):
    try:
        if request.session['logged_in'] == False:
            return redirect('/')
            print request.session['logged_in']
    except:
        request.session['logged_in'] == False

    else:
        current_user = User.objects.get(email=request.session['logged_in'])

        context = {
        "current_user": current_user,
        "books": Book.objects.all(),
        "users": User.objects.all(),
        "reviews": Review.objects.all().order_by('-created_at')[:3],
        "rating_range": Review.objects.all().order_by('-created_at')[:3],
        }
        return render(request, 'first_app/books.html', context)

def add_book(request):
    current_user = User.objects.get(email=request.session['logged_in'])
    context = {
        "current_user": current_user,
        "authors": Author.objects.all()
        }
    return render(request, 'first_app/add_book.html', context)



    


def process_book(request):
    if request.method == "POST":
        error = False
        request.session['title'] = request.POST['title']
        if len(request.POST['new_author']) > 0:
            author = request.POST['new_author'] 
            author = Author.objects.create(name=author)
        else:
            author = Author.objects.get(name=request.POST['author'])   
        request.session['review'] = request.POST['review']                 
        rating = request.POST['rating']
        user = User.objects.get(email=request.session['logged_in'])
        print user
        new_book = Book.objects.create(title = request.session['title'],  author = author)
        new_review = Review.objects.create(rating = rating, review = request.session['review'], user = user,  book = new_book)
        print new_book
        print new_review
        return redirect(reverse('first_app:books'))
    return redirect('/')

def process_review(request, id):
    if request.method == "POST":
        error = False 
        request.session['review'] = request.POST['review']                 
        rating = request.POST['rating']
        user = User.objects.get(email=request.session['logged_in'])
        print user
        new_review = Review.objects.create(rating = rating, review = request.session['review'], user = user,  book = Book.objects.get(id=id))
        print new_review
        return redirect(reverse('first_app:books'))
    return redirect('/')

def delete_review(request, id):
    if request.method == "POST":
        review = Review.objects.get(id=id)
        print review
        review.delete()
        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    return redirect('/')
    
def add_fav(request, id):
    if request.method == "POST":
        user = User.objects.get(email=request.session['logged_in'])
        fav_book = Book.objects.get(id=id)
        fav_book.users.add(user)
        fav_book.save()
        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    return redirect('/')

def display_book(request, id):
    current_user = User.objects.get(email=request.session['logged_in'])
    context = {
        "current_user": current_user,
        "book": Book.objects.get(id = id),
    }
    return render(request, 'first_app/display_book.html', context)

def display_user(request, id):
    current_user = User.objects.get(email=request.session['logged_in'])
    context = {
        "current_user": current_user,
        "user": User.objects.get(id = id),
    }
    return render(request, 'first_app/display_user.html', context)