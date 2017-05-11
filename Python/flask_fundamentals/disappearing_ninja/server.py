from flask import Flask, render_template  # Import Flask to allow us to create our app, and import
                                          # render_template to allow us to render index.html.
app = Flask(__name__)                     # Global variable __name__ tells Flask whether or not we
                                          # are running the file directly or importing it as a module.
@app.route('/')                           # The "@" symbol designates a "decorator" which attaches the
                                          # following function to the '/' route. This means that
                                          # whenever we send a request to localhost:5000/ we will run
                                          # the following "hello_world" function.
def landing():
  return render_template('index.html')    # Render the template and return it!

@app.route('/ninja')
def projects():
  return render_template('ninja.html')

@app.route('/ninja/<color>')
def show_ninja(color):
  print color
  if color == "blue":
    return render_template("leonardo.html")
  elif color == "orange":
    return render_template("michelangelo.html")
  elif color == "red":
    return render_template("raphael.html")
  elif color == "purple":
    return render_template("donatello.html")
  else:
    return render_template("notapril.html")

app.run(debug=True)                       # Run the app in debug mode.