from django.db import models

class Techcian(models.Model):
    first_name = models.CharField(max_length=2000)
    last_name = models.CharField(max_length=2000)
    employee_id = models.CharField(max_length=2000)

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=2000)

class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=2000)
    status = models.CharField(max_length=2000)
    vin = models.CharField(max_length=2000)
    customer = models.CharField(max_length=2000)
    technician = models.ForeignKey(
        Techcian,
        related_name="technician",
        on_delete=models.CASCADE,

    )
