from django.conf.urls import url
from views import *           # So we can call functions from our routes!
urlpatterns = [
	url(r'^$', index, name = "index"),
    url(r'^process_registration$', process_registration, name = 'process_registration'),
    url(r'^process_login$', process_login, name = 'process_login'),
    url(r'^login$', login, name = 'login'),
    url(r'^log_out$', log_out, name = 'log_out'),
	url(r'^books$', books, name = "books"),       
	url(r'^add$', add_book, name = "add_book"),       
	url(r'^process_book$', process_book, name = "process_book"),       
	url(r'^process_review/(?P<id>[^\n]+)/$', process_review, name = "process_review"),       
	url(r'^delete_review/(?P<id>[^\n]+)/$', delete_review, name = "delete_review"),       
	url(r'^add_fav/(?P<id>[^\n]+)/$', add_fav, name = "add_fav"),       
	url(r'^books/(?P<id>[^\n]+)/$', display_book, name = "display_book"),       
	url(r'^users/(?P<id>[^\n]+)/$', display_user, name = "display_user"),       
]