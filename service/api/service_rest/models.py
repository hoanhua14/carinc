from django.db import models

class Technician(models.Model):
    first_name = models.CharField(max_length=2000)
    last_name = models.CharField(max_length=2000)
    employee_id = models.CharField(max_length=2000, unique=True)

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=2000)

class Appointment(models.Model):
    date = models.DateField(null=True)
    time = models.TimeField(null=True)
    reason = models.CharField(max_length=2000)
    status = models.CharField(max_length=2000)
    vin = models.CharField(max_length=2000)
    customer = models.CharField(max_length=2000)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,

    )
