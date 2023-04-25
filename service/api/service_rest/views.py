from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from common.json import ModelEncoder
import json
from .models import Techcian, Appointment, AutomobileVO
