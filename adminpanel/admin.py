from django.contrib import admin
from .models import Project
# Register your models here.


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('project_name', 'category', 'start_date', 'end_date', 'client', 'status', 'number_of_units')
    list_filter = ('status', 'category', 'client')
    search_fields = ('project_name', 'client')
    date_hierarchy = 'start_date'

# @admin.register(Employee)
# class EmployeeAdmin(admin.ModelAdmin):
#     list_display = ('employee_name','project_name', 'category', 'status', 'start_date', 'end_date')
#     search_fields = ('employee_name','project_name', 'category', 'status')
#     list_filter = ('category', 'status', 'start_date', 'end_date')