from flask import Flask, request, redirect, render_template, session, flash
import re
from mysqlconnection import MySQLConnector
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'emailsDB')
@app.route('/')
def index():
    query = "SELECT * FROM emails"                           # define your query
    emails = mysql.query_db(query)                           # run query with query_db()
    return render_template('index.html', all_emails=emails) # pass data to our template

@app.route('/process', methods=['POST'])
def submit():
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!", category="error")
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!", category="error")
    else:
        query = "SELECT count(*) AS amt FROM emails WHERE email = :specific_email"
        print query
        # Then define a dictionary with key that matches :variable_name in query.
        data = {'specific_email': request.form['email']}
        print data
        # Run query with inserted data.
        emails = mysql.query_db(query, data)
        print emails
        if emails[0]["amt"] > 0:
            email_exists =  True
            flash("Email address not available, choose a different one" , category='error')
        else:
            email_exists = False
            flash("Success!" , category='success')
            insert_query = "INSERT INTO emails (email, created_at, updated_at) VALUES (:email, NOW(), NOW())"
            query_data = {'email': request.form['email']}
            mysql.query_db(insert_query, query_data)
            return redirect('/success')
    return redirect('/')

@app.route('/success')
def success():
    query = "SELECT * FROM emails"                           # define your query
    emails = mysql.query_db(query)                           # run query with query_db()
    return render_template('success.html', all_emails=emails) # pass data to our template





app.run(debug=True)