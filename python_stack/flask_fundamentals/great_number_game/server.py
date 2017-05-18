import random
from flask import Flask, render_template, request, redirect, session, Markup
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # you need to set a secret key for security purposes


@app.route('/')
def index():
  if 'num' not in session.keys():
      session['num'] = random.randrange(0, 101)
      session["green"] = False
      print session['num']
      return render_template('index.html')
  else: 
      print session['num']
      return render_template('index.html')

@app.route('/userguess', methods=['POST'])
def userGuess():
   user_guess = request.form['user_guess']
   print user_guess
   print session['num']
   if int(user_guess) == session['num']:
     print "correct"
     session["newHtml"] = Markup('<div style = "background: green;"><h1>Great Job!</h1><form id="newgame" method="post" action="/newgame"><input type="submit" name="newgame" value="New Game"/></form></div>')
     session["green"] = True
   elif int(user_guess) < session['num']:
     session["newHtml"] = Markup('<div style = "background: red;"><h1>Too Low! Try Again!</h1>')
     session["green"] = False
   elif int(user_guess) > session['num']:
     session["newHtml"] = Markup('<div style = "background: red;"><h1>Too High! Try Again!</h1>')
     session["green"] = False
   else:
     session["newHtml"] = Markup('<div style = "background: red;"><h1>Try Again!</h1>')
     session["green"] = False
   return redirect('/')
@app.route('/newgame', methods=['POST'])
def reset():
   session.pop('num')
   session.pop('newHtml')
   session.pop('green')
   return redirect('/')
app.run(debug=True)