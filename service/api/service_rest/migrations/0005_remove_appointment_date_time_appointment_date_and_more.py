# Generated by Django 4.0.3 on 2023-04-27 22:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_alter_technician_employee_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='date_time',
        ),
        migrations.AddField(
            model_name='appointment',
            name='date',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='appointment',
            name='time',
            field=models.TimeField(null=True),
        ),
    ]
