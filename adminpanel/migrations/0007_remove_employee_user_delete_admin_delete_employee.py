# Generated by Django 4.1.3 on 2024-02-18 04:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0006_alter_project_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='user',
        ),
        migrations.DeleteModel(
            name='Admin',
        ),
        migrations.DeleteModel(
            name='Employee',
        ),
    ]
