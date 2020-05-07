from django.contrib import admin
from .models import Master, Category, Service, Order, Price

admin.site.register(Master)
admin.site.register(Category)
admin.site.register(Service)
admin.site.register(Order)
admin.site.register(Price)
