from rest_framework.views import APIView
from rest_framework.response import Response
from salon.models import Order, Master, Price, Service
import datetime
from braces.views import CsrfExemptMixin


def get_hours(date, id):
    all_hours = [14, 15, 16, 17, 18, 19, 20]
    busy_hours = list(map(int, Order.objects.filter(date=date, master=id).values_list('time', flat=True)))

    return [item for item in all_hours if item not in busy_hours]


class HoursView(APIView):
    @staticmethod
    def get(request, id):
        hours = get_hours(request.GET['date'], id)

        return Response({'hours': hours})


class MastersView(APIView):
    @staticmethod
    def get(request):
        date = request.GET['date']
        available = []
        masters = Master.objects.all()
        for master in masters:
            if get_hours(date, master.id):
                available.append(master)

        data = {'available': []}
        for master in available:
            data['available'].append({'id': master.id, 'first_name': master.first_name, 'last_name': master.last_name})

        return Response(data)


class PriceView(APIView):
    @staticmethod
    def get(request):
        master_id = request.GET['master']
        service_id = request.GET['service']
        try:
            price = int(Price.objects.get(master=master_id, service=service_id).price)
        except Price.DoesNotExist:
            return Response({'error': 'NOT_FOUND'})
        return Response({'price': price})


class OrderView(CsrfExemptMixin, APIView):
    authentication_classes = []

    @staticmethod
    def post(request):
        first_name = request.POST['fname']
        last_name = request.POST['lname']
        phone = request.POST['phone']
        master_id = request.POST['master']
        service_id = request.POST['service']
        time = request.POST['time']
        date = request.POST['date']
        price = request.POST['price']

        order = Order(first_name=first_name, last_name=last_name, phone=phone, master=Master.objects.get(id=master_id),
                      service=Service.objects.get(id=service_id), time=time,
                      date=datetime.datetime.strptime(date, '%Y-%m-%d'), price=price)
        order.save()
        return Response({'fname': first_name, 'lname': last_name, 'phone': phone, 'master': master_id,
                         'service': service_id, 'time': time, 'date': date})

