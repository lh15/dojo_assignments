from django.conf.urls import url
from views import *
urlpatterns = [
	url(r'^$', index),
    url(r'^login$', login),
    url(r'^log_out$', log_out),
    url(r'^process$', process),
    url(r'^process_login$', submit_login),
    url(r'^process_message$', post_message),
    url(r'^success$', success),
    url(r'^wall$', wall),
    url(r'^process_comment/(?P<message_id>[^\n]+)/$', post_comment)
]