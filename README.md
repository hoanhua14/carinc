# CarCar

Team:

Kristen Lungstrum : sales
Sohoan Hua: services

## Design

## Service microservice

- Service microservices:
+ 2 models: Technician, Appointment, and Automobile (with a Vin coming from inventory)
+ Technician has a first name, last name, and employee ID field
+ Appointment: date, time, reason, status, vin, customer, and technician field (which has foreign key relationship with Technician)
+ AutomobileVO: a value object containing VIN retrieved from Automobile model from inventory microservice by polling and sold status.
- Technician: allows users to create a technician with a unique employee ID.
- Appointments:
+Create an appointment: users can make an appointment to have their cars serviced by simply filling out the form with name, time slot, VIN, and reason for service. Moreover, users can decide who they want to work on their vehicles by selecting from the drop down which shows all the technicians in the database.
+Service appointments: an easy way to check all appointments and statuses. On this very same page, users can update the status of their appointments just by clicking Cancel or Finish. Once the status is changed, the appointment will no longer show in this page, but will be moved to Service history page.
+Service history: showing all appointments in the database. The search bar on top of the page allows users to filter out the appointment they want to see simply by putting in the VIN.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
