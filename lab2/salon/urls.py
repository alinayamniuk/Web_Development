from django.urls import path
from . import views

urlpatterns =[
    path('', views.main_page, name='main_page'),
    path('order/', views.order, name='order'),
    path('contact/', views.contact, name='contact'),
    path('hair/', views.hair_factory, name='hair'),
    path('face/', views.face_factory, name='face'),
    path('nail/', views.nail_factory, name='nail'),

]