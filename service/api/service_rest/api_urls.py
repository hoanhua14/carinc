from django.urls import path
from .views import api_list_techs

urlpatterns = [
    path("technicians/", api_list_techs, name="api_list_techs"),
    path("technicians/new/", api_list_techs, name="add_a_technician"),
]
