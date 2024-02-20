"""whiteturtle URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from adminpanel import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('projects/', views.project_list, name='project-list'), #django framework
    path('adminside/', views.adminside, name='adminside'),
    path('projects/<int:pk>/', views.project_detail, name='project-detail'), #django framework
    # path('searchitem/', views.searchitem, name='project-detail'),

    path('createproject/', views.createproject, name='createproject'),
    path('createapi/', views.createprojectapi, name='createprojectapi'),

    path('updateproject/<int:pk>', views.updateproject, name='updateproject'),
    path('updateapi/<int:pk>', views.updateprojectapi, name='updateprojectapi'),

    path('deleteproject/<int:pk>', views.deleteproject, name='deleteproject'),
    path('deleteapi/<int:pk>', views.deleteprojectapi, name='deleteprojectapi'),

    path('employeeside/',views.employeeside, name='employeeside'),
    path('department/', views.department, name='department'),
    path('projectcategory/<str:category>/', views.projects_by_category, name='projects_by_category'),
    path('register/', views.register, name='register'),
    
]