from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from common.json import ModelEncoder
import json
from .models import Technician, Appointment, AutomobileVO

class TechEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id",
    ]
class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "customer",
        "date_time",
        "technician",
        "reason",
        "status",
    ]
    encoders={
        "technician": TechEncoder()
    }

    def get_extra_data(self, o):
        return {
            "Technician": o.technician.first_name +" "+ o.technician.last_name

        }


@require_http_methods(["GET", "POST"])
def api_list_techs(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        print("all techs", technicians)
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechEncoder,
        )
    else: #create a tech
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechEncoder,
            safe=False,
        )

@require_http_methods(["DELETE"])
def api_delete_tech(request, pk):
    if request.method == "DELETE":
        try:
            technician = Technician.objects.get(id=pk)
            technician.delete()
            response = {"deleted": True}
        except Technician.DoesNotExist:
            response = {"deleted": False}
        return JsonResponse(response, safe=False)

@require_http_methods(["GET","POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
        )
#create an app
    else:
        content = json.loads(request.body)
        technician = None
        try:
            tech_id = content["technician"]
            technician = Technician.objects.get(id=tech_id)
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "No technician with corresponding ID."},
                status=400,
            )

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )

# @require_http_methods(["DELETE","PUT","GET"])
# def api_update_appointment(request, pk):
