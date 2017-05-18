from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'full_friends')
@app.route('/')
def index():
    query = "SELECT * FROM friends"                           # define your query
    friends = mysql.query_db(query)                           # run query with query_db()
    return render_template('index.html', all_friends=friends) # pass data to our template


@app.route('/friends/new', methods=['POST'])
def create_user():
     first_name = request.form['first_name']
     last_name = request.form['last_name']
     age = request.form['age']
     friend_since_date = request.form['friend_since_date']
     friend_since_yr = request.form['friend_since_yr']
     insert_query = "INSERT INTO friends (first_name, last_name, age, friend_since_date, friend_since_yr, created_at, updated_at) VALUES (:first_name,:last_name, :age, :friend_since_date, :friend_since_yr, NOW(), NOW())"
     query_data = { 'first_name': first_name, 'last_name': last_name, 'age': age, 'friend_since_date': friend_since_date, 'friend_since_yr': friend_since_yr, }
     mysql.query_db(insert_query, query_data)
     return redirect('/')


app.run(debug=True)