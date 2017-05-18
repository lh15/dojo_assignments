# import Flask
from flask import Flask, render_template, redirect, request, session, flash
# the "re" module will let us perform some regular expression operations
import re
from datetime import datetime
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[A-Za-z_-]*$')
DATE_REGEX = re.compile(r'^(((0?[1-9]|1[012])/(0?[1-9]|1\d|2[0-8])|(0?[13456789]|1[012])/(29|30)|(0?[13578]|1[02])/31)/(19|[2-9]\d)\d{2}|0?2/29/((19|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([2468][048]|[3579][26])00)))$')
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
@app.route('/', methods=['GET'])
def index():
  return render_template("index.html")
@app.route('/success')
def success():
  return render_template("success.html")
@app.route('/process', methods=['POST'])
def submit():
    error = False
    
    session['email'] = request.form['email']
    session['first'] = request.form['first']
    session['last'] = request.form['last']
    session['bday'] = request.form['bday']
    
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
        error = True
    if len(request.form['first']) < 1:
        flash("First Name cannot be blank!")
        error = True
    if len(request.form['last']) < 1:
        flash("Last Name cannot be blank!")
        error = True
    if len(request.form['pass']) < 9:
        flash("Password must be more than 8 characters!")
        error = True
    if len(request.form['passConf']) < 1:
        flash("Please confirm password")
        error = True
    # if len(request.form['bday']) < 1:
    #     flash("bday must be in mm/dd/yyyy format")
    #     error == True 
    if request.form['pass'] != request.form['passConf']:
        flash("Password does not match")
        error = True
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
        error = True
    if not NAME_REGEX.match(request.form['first']):
        flash("Name must only contain letters")
        error = True
    if not NAME_REGEX.match(request.form['last']):
        flash("Name must only contain letters")
        error = True
    print "string"
    print DATE_REGEX.match(request.form['bday'])
    if not DATE_REGEX.match(request.form['bday']):
        flash("bday must be in mm/dd/yyyy format")
        error = True  
         
    elif DATE_REGEX.match(request.form['bday']): 
        bdayObject = datetime.strptime(request.form['bday'], '%m/%d/%Y')
        print bdayObject < datetime.now()
        if not bdayObject < datetime.now():
            flash("bday must be before today's date")
            error = True
            print error
            print bdayObject
            print datetime.now()
    else:
        error = False
        print error
    if error == True:
      return redirect('/')
    if error == False:
       session.pop('email')
       session.pop('first')
       session.pop('last')
       session.pop('bday')
       return render_template('success.html', email=request.form['email'], first=request.form['first'], last=request.form['last'])
       
app.run(debug=True)