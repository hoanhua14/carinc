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
    ]

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
