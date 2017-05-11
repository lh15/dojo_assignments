from flask import Flask, render_template, request, redirect
app = Flask(__name__)
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
   
   # we'll talk about the following two lines after we learn a little more
   # about forms
   name = request.form['name']
   location = request.form['location']
   language = request.form['language']
   comment = request.form['comment']
   
   
   
   print name
   # redirects back to the '/' route
   return render_template("results.html", name = name, location=location, language=language,comment=comment)
   
   
app.run(debug=True) # run our server