from flask import Flask, render_template, redirect, request, session, flash
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
# our index route will handle rendering our form
@app.route('/')
def index():
  return render_template("index.html")
# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route
@app.route('/results')
def results():
  return render_template("results.html")
# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route
@app.route('/process', methods=['POST'])
def process():
   print "Got name"
   name = request.form['name']
   location = request.form['location']
   language = request.form['language']
   comment = request.form['comment']
   error = False
   if len(name) < 1:
      flash("Name cannot be blank!")
      error = True
   if len(comment) < 1:
      flash("Comment cannot be blank!")
      error = True
   if len(comment) > 120:
      flash("Comment cannot be greater than 120 characters")
      error = True
   if error == True:
      return redirect('/')
   else:
      return render_template("results.html", name = name, location=location, language=language,comment=comment)
      
      
   print name
   # redirects back to the '/' route
   
   
   
app.run(debug=True) # run our server