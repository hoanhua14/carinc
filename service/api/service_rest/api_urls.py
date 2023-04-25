from django.urls import path
from .views import api_list_techs, api_delete_tech, api_list_appointments, api_update_appointment, api_cancel_app

urlpatterns = [
    path("technicians/", api_list_techs, name="api_list_techs"),
    path("technicians/new/", api_list_techs, name="add_a_technician"),
    path("technicians/<int:pk>/", api_delete_tech, name="delete_a_tech"),
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("appointments/new/", api_list_appointments, name="create_an_appointment"),
    path("appointments/delete/<int:pk>/", api_update_appointment, name="delete_an_app"),
    path("appointments/<int:pk>/cancel", api_cancel_app, name="cancel_an_app"),
    path("appointments/<int:pk>/finish", api_update_appointment, name="finished_app"),
]
