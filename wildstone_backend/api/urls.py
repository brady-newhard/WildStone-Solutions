from rest_framework import routers
from .views import ClientViewSet, FileUploadViewSet, InvoiceViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'clients', ClientViewSet)
router.register(r'files', FileUploadViewSet)
router.register(r'invoices', InvoiceViewSet)

urlpatterns = [
    path('', include(router.urls)),
] 