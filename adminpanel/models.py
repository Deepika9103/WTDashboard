from django.db import models
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings 
# Create your models here.



class Project(models.Model):
    STATUS_CHOICES = [
        ('New', 'New'),
        ('In Progress', 'In Progress'),
        ('Completed', 'Completed'),
        ('On Hold', 'On Hold'),
        ('Cancelled', 'Cancelled'),
    ]

    CATEGORY_CHOICES = [
        ('coding', 'Coding'),
        ('graphics', 'Graphics'),
    ]
    
    employee_name = models.CharField(max_length=100, blank=True, null=True)
    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES)
    start_date = models.DateField()
    end_date = models.DateField()
    client = models.CharField(max_length=100)
    project_name = models.CharField(max_length=200)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='New')
    number_of_units = models.IntegerField(null=True,blank=True)

    def __str__(self):
        return self.project_name


@receiver(post_save, sender=Project)
def send_assignment_email(sender, instance, created, **kwargs):
    email = "muchhaladeepika@gmail.com"
    if created:
        # employee_email = instance.employee_name.email 
        employee_email = email
        subject = 'You have been assigned to a new project'
        message = f'You have been assigned to the project "{instance.project_name}".\nDetails:\nCategory: {instance.category}\nStart Date: {instance.start_date}\nEnd Date: {instance.end_date}\nClient: {instance.client}\nStatus: {instance.status}'
        send_mail(subject, message, settings.EMAIL_HOST_USER , [employee_email])

