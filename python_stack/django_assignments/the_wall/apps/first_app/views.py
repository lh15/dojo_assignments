from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
import re
import datetime
import os, binascii
import md5 
from .models import User, Message, Commment

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[A-Za-z_-]*$')

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
        print session['logged_in']
        return redirect('/wall')

def login(request):
    return render(request, "first_app/login.html")

def log_out(request):
    session.pop('logged_in')
    return redirect('/')

def process(request):
    error = False
    request.session['first_name'] = request.POST['first_name']
    request.session['last_name'] = request.POST['last_name']
    request.session['email'] = request.POST['email'] 
    password = request.POST['psw']
    password_rpt = request.POST['psw-repeat']
    if len(email) < 1:
        messages.error(request, 'Email cannot be blank!')
        error = True
    if len(password) < 9:
        messages.error(request, 'Password must be at least 8 charachters!')        
        error = True
    if password != password_rpt:
        messages.error(request, 'Password does not match!')        
        error = True
    if len(first_name) < 2:
        messages.error(request, 'Name must have at least 2 letters!')                
        error = True
    if len(last_name) < 2:
        messages.error(request, 'Name must have at least 2 letters!')  
        error = True
    if not NAME_REGEX.match(first_name):
        messages.error(request, 'Only letters please!')                        
        error = True
    if not NAME_REGEX.match(last_name):
        messages.error(request, 'Only letters please!')                        
        error = True
    if not EMAIL_REGEX.match(email):
        messages.error(request, 'Invalid Email Address!')                        
        error = True
    else:
        if User.objects.filter(email=email).exists():
            email_exists =  True
            messages.error(request, 'Email address not available, choose a different one, or click login to go to login') 
            return redirect('/')
        else:
            email_exists = False
            messages.success(request, 'Success!')
            error = False
            salt =  binascii.b2a_hex(os.urandom(15))
            hashed_pw = md5.new(password + salt).hexdigest()
            User.objects.create(first_name = request.POST['first_name'], last_name= request.POST['last_name'], email = request.POST['email'],  password=hashed_pw, salt = salt)
            request.session['logged_in'] = email
            return redirect('/wall')
    return redirect('/')

def submit_login(request):
    email = request.POST['email']
    password = request.POST['psw']
    user = User.objects.filter(email=email)
    if len(user) != 0:
        encrypted_password = md5.new(password + user[0]['salt']).hexdigest();
        if user[0]['password'] == encrypted_password:
            request.session['logged_in'] = email
            return redirect('/wall')
        else:
            messages.error(request, 'Invalid Password!') 
            return redirect('/login')
    else:
        messages.error(request, 'Invalid Email Address!')         
        return redirect('/login')

def post_message(request):
    message = request.POST['message']
    user = User.objects.filter(email=request.session['logged_in'])
    print user
    user_id = user[0]['id']
    Message.objects.create(message = message, user_id= user_id)
    
    return redirect('/wall')

def post_comment(request, message_id):
    comment = request.POST['comment']
    user = User.objects.filter(email=request.session['logged_in'])
    print user
    user_id = user[0]['id']

    message_id = message_id
    Comment.objects.create(comment = comment, user_id= user_id, message_id = message_id)
    return redirect('/wall')

def success(request):
    return render(request, 'first_app/success.html')


def wall(request):
    if request.session['logged_in'] == False:
        return redirect('/')
        print request.session['logged_in']
    else:
        user_query = "SELECT messages.id, messages.message, messages.created_at, users.first_name, users.last_name FROM messages JOIN users ON messages.user_id = users.id"
        messages = mysql.query_db(user_query)
        
        messages = Message.objects.all()
        comments = Comment.objects.all()
        users = User.objects.all()

        context = {
            'all_messages': messages,
            'all_comments': comments,
            'all_users': users
        }
        return render(request, 'first_app/wall.html', context)