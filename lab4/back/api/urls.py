from django.urls import path
from api import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('available_hours/<int:id>', views.HoursView.as_view()),
    path('available_masters', views.MastersView.as_view()),
    path('price', views.PriceView.as_view()),
    path('make_order', views.OrderView.as_view(), name='make_order'),
    path('auth/register/', views.RegisterView.as_view()),
    path('auth/obtain_token/', obtain_jwt_token),
    path('user', views.UserView.as_view())
]