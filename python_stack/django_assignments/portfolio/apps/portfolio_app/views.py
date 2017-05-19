from django.shortcuts import render, HttpResponse
# the index function is called when root is visited
def index(request):
    print "index page"
    return render(request, 'portfolio_app/index.html')

def testimonials(request):
    print "testimonials page"
    return render(request, 'portfolio_app/testimonials.html')