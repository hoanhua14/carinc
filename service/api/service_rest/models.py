from django.db import models

class Technician(models.Model):
    first_name = models.CharField(max_length=2000, null=False)
    last_name = models.CharField(max_length=2000, null=False)
    employee_id = models.CharField(max_length=2000, unique=True)

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=2000)
    sold = models.BooleanField(default=False)

class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=2000)
    status = models.CharField(max_length=2000)
    vin = models.CharField(max_length=2000)
    customer = models.CharField(max_length=2000)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,

    )
