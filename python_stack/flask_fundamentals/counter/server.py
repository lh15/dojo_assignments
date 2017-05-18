from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # you need to set a secret key for security purposes
def sumSessionCounter():
  try:
    session['times'] += 1
  except KeyError:
    session['times'] = 1

@app.route('/')
def index():
    sumSessionCounter()
    return render_template('index.html')
@app.route('/plus2', methods=['POST'])
def plus2():
   session['times'] += 1
   return redirect('/')
@app.route('/reset', methods=['POST'])
def reset():
   session['times'] = -1
   return redirect('/')
app.run(debug=True)