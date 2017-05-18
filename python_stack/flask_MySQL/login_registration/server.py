from flask import Flask, request, redirect, render_template, session, flash
import re
from mysqlconnection import MySQLConnector
import os, binascii
import md5 
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[A-Za-z_-]*$')
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'login_registration_demo_users')
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/login')
def login():

    return render_template('login.html')

@app.route('/process', methods=['POST'])
def submit():
    error = False
    session["first_name"] = request.form['first_name']
    session["last_name"] = request.form['last_name']
    session["email"] = request.form['email']
    password = request.form['psw']
    password_rpt = request.form['psw-repeat']
    
    if len(session["email"]) < 1:
        flash("Email cannot be blank!", category="error")
        error = True
    if len(password) < 9:
        flash("Password must be at least 8 charachters!", category="error")
        error = True
    if password != password_rpt:
        flash("Password does not match!", category="error")
        error = True
    if len(session["first_name"]) < 2:
        flash("Name must have at least 2 letters!", category="error")
        error = True
    if len(session["last_name"]) < 2:
        flash("Name must have at least 2 letters!", category="error")
        error = True
    if not NAME_REGEX.match(session["first_name"]):
        flash("Only letters please!", category="error")
        error = True
    if not NAME_REGEX.match(session["last_name"]):
        flash("Only letters please!", category="error")
        error = True
    if not EMAIL_REGEX.match(session["email"]):
        flash("Invalid Email Address!", category="error")
        error = True
    else:
        query = "SELECT count(*) AS amt FROM users WHERE email = :specific_email"
        print query
        # Then define a dictionary with key that matches :variable_name in query.
        data = {'specific_email': session["email"]}
        print data
        # Run query with inserted data.
        emails = mysql.query_db(query, data)
        print emails
        if emails[0]["amt"] > 0:
            email_exists =  True
            session.pop('first_name')
            session.pop('last_name')
            session.pop('email')
            return redirect('/login')
            # flash("Email address not available, choose a different one" , category='error')
            # error = True
        if error == True:
            return redirect('/')
        else:
            email_exists = False
            flash("Success!" , category='success')
            error = False
            salt =  binascii.b2a_hex(os.urandom(15))
            hashed_pw = md5.new(password + salt).hexdigest()
            insert_query = "INSERT INTO users (first_name, last_name, email, password, salt, created_at, updated_at) VALUES (:first_name, :last_name,  :email, :hashed_pw, :salt, NOW(), NOW())"
            query_data = { 'first_name': session['first_name'], 'last_name': session['last_name'], 'email': session['email'], 'hashed_pw': hashed_pw, 'salt': salt}
            mysql.query_db(insert_query, query_data)
            session['logged_in'] = session['first_name'] + " " + session['last_name']
            session.pop('first_name')
            session.pop('last_name')
            session.pop('email')
            
            return redirect('/success')
    return redirect('/')

@app.route('/process_login', methods=['POST'])
def submit_login():
    email = request.form['email']
    password = request.form['psw']
    user_query = "SELECT * FROM users WHERE users.email = :email LIMIT 1"
    query_data = {'email': email}
    user = mysql.query_db(user_query, query_data)
    if len(user) != 0:
        encrypted_password = md5.new(password + user[0]['salt']).hexdigest();
        if user[0]['password'] == encrypted_password:
            session['logged_in'] = email
            return redirect('/success')
        else:
            flash("Invalid Password!", category="error")
            return redirect('/login')
    else:
        flash("Invalid Email Address!", category="error")
        return redirect('/login')
@app.route('/success')
def success():
    return render_template('success.html')


app.run(debug=True)