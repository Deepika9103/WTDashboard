from django.shortcuts import render, redirect
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Project
from .serializers import ProjectSerializer
from rest_framework import status
from django.utils import timezone

from .forms import ProjectForm

# Create your views here.

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


def deleteproject(request, pk):
    project = Project.objects.get(id=pk)
    if request.method == "POST":
        project.delete()
        return redirect('/')

    context = {
        'item':project
    }
    return render(request, 'adminpanel/deleteproject.html',context)


def searchitem(request):
    # start_date = request.GET.get('start_date')
    # print(start_date)
    # end_date = request.GET.get('end_date')
    # print(end_date)
    project_name = request.GET.get('project_name')
    print(project_name)
    print("helloooo")

    projects = Project.objects.all()
    print(projects)

    # if start_date and end_date:
    #     try:
    #         start_date = timezone.make_aware(datetime.strptime(start_date, '%Y-%m-%d'))
    #         end_date = timezone.make_aware(datetime.strptime(end_date, '%Y-%m-%d'))
    #         projects = projects.filter(start_date__gte=start_date, end_date__lte=end_date)
    #     except ValueError:
    #         pass

    if project_name:
        projects = projects.filter(project_name=project_name)
        print(projects)
    else:
        pass

    return render(request, 'adminpanel/searchitem.html', {'projects': projects})