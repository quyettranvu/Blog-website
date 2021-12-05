from django.conf.urls import url
from BlogApp import views

from django.conf.urls.static import static
from django.conf import settings


urlpatterns=[
    #Sử dụng biểu thức chính quy ở đây
    url(r'^blog$', views.BlogApi),
    url(r'^blog/([0-9]+)$',views.BlogApi), #Để cho method DELETE theo id

    #Mình đang bị lỗi fix sau(tương tự như blog sử dụng id để get và nhận những cái lệnh)
    url(r'^aboutme$',views.AboutMeApi),
    url(r'^aboutme/([0-9]+)$',views.AboutMeApi),

    url(r'^blog/savefile',views.SaveFile),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)