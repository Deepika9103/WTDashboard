# Generated by Django 4.1.3 on 2024-02-13 02:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0002_employee_project_employee_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='client',
        ),
    ]
