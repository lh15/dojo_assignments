from django.shortcuts import render, HttpResponse

def index(request):
    print "index page"
    return render(request, 'real_port_app/index.html')
def projects(request):
    print "projects page"
    return render(request, 'real_port_app/projects.html')
def about(request):
    print "about page"
    return render(request, 'real_port_app/about.html')
def testimonials(request):
    print "testimonials page"
    return render(request, 'real_port_app/testimonials.html')