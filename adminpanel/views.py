from django.shortcuts import render, redirect
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Project
from .serializers import ProjectSerializer
from rest_framework import status
from django.utils import timezone

from .forms import ProjectForm, CreateUserForm

from django.contrib.auth.decorators import login_required

from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import get_object_or_404

# Create your views here.

def register(request):
    form = CreateUserForm()
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()

    context = {'form':form}
    return render(request, 'adminpanel/register.html',context)

def home(request):
    return render(request, 'adminpanel/home.html')


def adminside(request):
    projects = Project.objects.all()
    return render(request, 'adminpanel/admin.html', {'projects': projects})

def employeeside(request):
    employee_name = request.GET.get('employee_name')
    print(employee_name)
    projects = Project.objects.all()
    print(projects)
    # employee_name = 'virum'
    if employee_name:
        projects = projects.filter(employee_name=employee_name)
    
    context = {
        'projects': projects,
        'employee_name': employee_name
    }
    return render(request, 'adminpanel/employee.html', context)

@api_view(['GET', 'POST'])
def project_list(request):
    if request.method == 'GET':
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def project_detail(request, pk):
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProjectSerializer(project)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ProjectSerializer(project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


#to create project 
def createproject(request):
    form = ProjectForm()
    success_message = None
    if request.method == 'POST':
        print('Printing POST:', request.POST)
        form = ProjectForm(request.POST)
        if form.is_valid():
            form.save()
            success_message = "Your information has been saved in the database."
            return redirect('/')
        

    return render(request, 'adminpanel/createproject.html',{'form' : form,'message':success_message})

@api_view(['POST'])
def createprojectapi(request):
    if request.method == 'POST':
        form = ProjectForm(request.data)
        if form.is_valid():
            form.save()
            return Response({'message': 'Your information has been saved in the database.'}, status=201)
        else:
            return Response({'error': 'Invalid data provided.'}, status=400)


# @login_required(login_url ='/')
def updateproject(request,pk):

    success_message = None
    project = Project.objects.get(id=pk)
    form = ProjectForm(instance = project)
    if request.method == 'POST':
        print('Printing POST:', request.POST)
        form = ProjectForm(request.POST, instance = project)
        if form.is_valid():
            form.save()
            success_message = "Your information has been saved in the database."
            return redirect('/')
    return render(request, 'adminpanel/updateproject.html',{'form':form, 'message':success_message})

@api_view(['PUT'])
def updateprojectapi(request, pk):
    try:
        project = Project.objects.get(id=pk)
    except Project.DoesNotExist:
        return Response({'error': 'Project not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ProjectSerializer(project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Project updated successfully', 'data': serializer.data}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @login_required(login_url ='/')
def deleteproject(request, pk):
    project = Project.objects.get(id=pk)
    if request.method == "POST":
        project.delete()
        return redirect('/')

    context = {
        'item':project
    }
    return render(request, 'adminpanel/deleteproject.html',context)

@api_view(['DELETE'])
def deleteprojectapi(request, pk):
    project = get_object_or_404(Project, pk=pk)

    if request.method == 'DELETE':
        project.delete()
        return Response({'message': 'Project deleted successfully'}, status=status.HTTP_204_NO_CONTENT)


# @login_required(login_url ='/')
def department(request):
    unique_categories = Project.objects.values_list('category', flat=True).distinct().order_by('category')
    # Convert all categories to lowercase
    unique_categories = [category.lower() for category in unique_categories]
    return render(request, 'adminpanel/department.html', {'unique_categories': unique_categories})


# @login_required(login_url ='/')
def projects_by_category(request, category):
    projects = Project.objects.filter(category__iexact=category.lower())  # Case-insensitive filter
    
    context = {
        'category': category,
        'projects': projects
    }
    return render(request, 'adminpanel/projectcategory.html', context)

