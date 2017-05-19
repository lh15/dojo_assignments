from django.conf.urls import url
from views import *
urlpatterns = [
    url(r'^$', index, name = 'my_index'),
    url(r'^projects$', projects, name = 'my_projects'),
    url(r'^about$', about, name = 'my_about'),
    url(r'^testimonials$', testimonials, name = 'my_testimonials'),
]