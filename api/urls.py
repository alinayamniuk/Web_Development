from django.urls import path
from api import views


urlpatterns = [
    path('available_hours/<int:id>', views.HoursView.as_view()),
    path('available_masters', views.MastersView.as_view()),
    path('price', views.PriceView.as_view()),
    path('make_order', views.OrderView.as_view(), name='make_order'),
]