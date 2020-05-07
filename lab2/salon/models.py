from django.db import models
import uuid


class Master(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)

    def __str__(self):
        return self.first_name + ' ' + self.last_name + ' (' + str(self.id) + ')'


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Service(models.Model):
    name = models.CharField(max_length=50)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='services')

    def __str__(self):
        return self.name + ' (' + str(self.id) + ')'


class Price(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='service_price')
    master = models.ForeignKey(Master, on_delete=models.CASCADE, related_name='master_price')
    price = models.IntegerField()

    def __str__(self):
        return ' - '.join(map(str, [self.service, self.master, self.price]))


class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone = models.CharField(max_length=20, default='0639999999')
    master = models.ForeignKey(Master, on_delete=models.DO_NOTHING, related_name='master_order')
    service = models.ForeignKey(Service, on_delete=models.DO_NOTHING, related_name='service_order')
    time = models.IntegerField()
    date = models.DateField()
    price = models.IntegerField()

    def __str__(self):
        return self.first_name + ' ' + self.last_name + ' (' + str(self.id) + ')'
