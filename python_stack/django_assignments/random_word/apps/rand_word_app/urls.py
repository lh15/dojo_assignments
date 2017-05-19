from django.conf.urls import url
from views import *
urlpatterns = [
    url(r'^$', index, name = 'my_index'),
    url(r'^new_word$', new_word, name = 'new_word'),
    url(r'^reset$', reset, name = 'reset')
]