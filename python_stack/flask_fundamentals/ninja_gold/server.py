import random
from flask import Flask, render_template, request, redirect, session
from datetime import datetime
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # you need to set a secret key for security purposes
randNum = random.randint(0, 10)
gold = 0

@app.route('/')
def index():
  if not session.get('gold'):
    session['gold'] = 0
  if not session.get('activities'):
    session['activities'] = []
  if not session.get('green'):
    session['green'] = True
  return render_template("index.html")

@app.route('/process_money', methods=['POST'])
def process_money():
   session['building'] = request.form['building']
   if session['building'] == "farm":
     randNum = random.randint(10, 20)
     session['gold'] += randNum
     print session['gold']
     session['activities'].append("earned " + str(randNum) + " golds from the farm! (" + str(datetime.now())[:19] + ")")
   elif session['building'] == "cave":
     randNum = random.randint(5, 10)
     session['gold'] += randNum
     print session['gold']
     session['activities'].append("earned " + str(randNum) + " golds from the cave! (" + str(datetime.now())[:19] + ")")
   elif session['building'] == "house":
     randNum = random.randint(2, 5)
     session['gold'] += randNum
     print session['gold']
     session['activities'].append("earned " + str(randNum) + " golds from the house! (" + str(datetime.now())[:19] + ")")
   elif session['building'] == "casino":
     zeroone = random.randint(0, 1)
     if zeroone == 1:
        randNum = random.randint(0, 50)
        session['gold'] += randNum
        print session['gold']
        session['activities'].append("earned " + str(randNum) + " golds from the casino! (" + str(datetime.now())[:19] + ")")
     else:
        randNum = random.randint(0, 50)
        session['gold'] -= randNum
        print session['gold']
        session['activities'].append("you lost :( " + str(randNum) + " golds from the casino! OUCH!! (" + str(datetime.now())[:19] + ")")
    
   print session['building']
   return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
   session.pop('activities')
   session.pop('gold')
   return redirect('/')
app.run(debug=True)