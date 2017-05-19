from django.shortcuts import render, HttpResponse
# the index function is called when root is visited
def index(request):
    print "hello world!"
    return render(request, 'h_w_app/index.html')