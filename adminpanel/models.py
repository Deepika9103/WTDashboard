from django.db import models

# Create your models here.


class Project(models.Model):
    STATUS_CHOICES = [
        ('New', 'New'),
        ('In Progress', 'In Progress'),
        ('Completed', 'Completed'),
        ('On Hold', 'On Hold'),
        ('Cancelled', 'Cancelled'),
    ]
    
    employee_name = models.CharField(max_length=100, blank=True, null=True)
    category = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()
    client = models.CharField(max_length=100)
    project_name = models.CharField(max_length=200)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='New')
    number_of_units = models.IntegerField(null=True,blank=True)

    def __str__(self):
        return self.project_name


# class Employee(models.Model):
#     STATUS_CHOICES = [
#         ('New', 'New'),
#         ('In Progress', 'In Progress'),
#         ('Completed', 'Completed'),
#         ('On Hold', 'On Hold'),
#         ('Cancelled', 'Cancelled'),
#     ]

#     employee_name = models.CharField(max_length=100, blank=True, null=True)
#     project_name = models.CharField(max_length=100)
#     category = models.CharField(max_length=100)
#     status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='New')
#     start_date = models.DateField()
#     end_date = models.DateField()

#     def __str__(self):
#         return self.project_name