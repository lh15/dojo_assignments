from django.conf.urls import url
from views import *
urlpatterns = [
    url(r'^$', index, name = 'my_index'),
    url(r'^process$', process, name = 'process'),
    url(r'^results$', results, name = 'results')
]