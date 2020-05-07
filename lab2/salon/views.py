from django.shortcuts import render


def main_page(request):
    return render(request, 'salon/index.html')


def order(request):
    return render(request, 'salon/order.html')


def contact(request):
    return render(request, 'salon/contact.html')


def face_factory(request):
    return render(request, 'salon/face-factory.html')


def hair_factory(request):
    return render(request, 'salon/hair-factory.html')


def nail_factory(request):
    return render(request, 'salon/nail-factory.html')