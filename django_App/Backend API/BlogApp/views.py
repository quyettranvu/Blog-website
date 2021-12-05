from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from BlogApp.models import Blogs,AboutMe
from BlogApp.serializers import BlogSerializer,AboutmeSerializer

from django.core.files.storage import  default_storage #Thêm thư mục làm việc với file

# Create your views here. To begin working with API

@csrf_exempt
def BlogApi(request, id=0):
    if request.method=='GET':
        blogs=Blogs.objects.all()
        blogs_serializer=BlogSerializer(blogs,many=True)
        #Giá trị safe set bằng False để thông báo chuyển sang json và kiểm tra xem có lỗi không  
        return JsonResponse(blogs_serializer.data,safe=False)
    
    #Ý nghĩa của method POST là để thêm 1 record mới vào bảng Blogs
    elif request.method=='POST':
        blog_data=JSONParser().parse(request)
        #Chuyển đổi dữ liệu nhận được vào model
        blogs_serializer=BlogSerializer(data=blog_data)
        
        #Nếu như model hợp lệ thì mình lưu nó vào database và trả lại thông báo thành công
        if blogs_serializer.is_valid():
            blogs_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)

    #Method PUT được sử dụng để ghi đè tất cả thông tin của đối tượng với những gì được gửi lên(update dữ liệu)
    elif request.method=='PUT':
        blog_data=JSONParser().parse(request)
        #Bước đầu tiên mình sẽ bọc đối tượng lại bằng BlogId từ model Blogs
        blog=Blogs.objects.get(BlogId=blog_data['BlogId'])
        #Sau đó mình sẽ map(chỉ) đến nó sử dụng class BlogSerializer
        blogs_serializer=BlogSerializer(blog,data=blog_data)

        if blogs_serializer.is_valid():
            blogs_serializer.save()
            return JsonResponse("Update Successfully!",safe=False)
        return JsonResponse("Failed to update")

    #Method DELETE dùng để xóa đối tượng
    elif request.method=='DELETE':
        #Lấy dữ liệu từ URL theo chỉ số Id tương ứng
        blog=Blogs.objects.get(BlogId=id)
        blog.delete()
        return JsonResponse("Delete Succesffully!",safe=False)


    #Bắt đầu làm việc với api của bảng aboutme
@csrf_exempt
def AboutMeApi(request, id=0):
    if request.method=='GET':
        aboutmes=AboutMe.objects.all()
        aboutmes_serializer=AboutmeSerializer(aboutmes,many=True)
        #Giá trị safe set bằng False để thông báo chuyển sang json và kiểm tra xem có lỗi không  
        return JsonResponse(aboutmes_serializer.data,safe=False)
        
        #Ý nghĩa của method POST là để thêm 1 record mới vào bảng Blogs
    elif request.method=='POST':
        aboutme_data=JSONParser().parse(request)
        #Chuyển đổi dữ liệu nhận được vào model
        aboutmes_serializer=AboutmeSerializer(data=aboutme_data)
            
        #Nếu như model hợp lệ thì mình lưu nó vào database và trả lại thông báo thành công
        if aboutmes_serializer.is_valid():
            aboutmes_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)

    #Method PUT được sử dụng để ghi đè tất cả thông tin của đối tượng với những gì được gửi lên(update dữ liệu)
    elif request.method=='PUT':
        aboutme_data=JSONParser().parse(request)
        #Bước đầu tiên mình sẽ bọc đối tượng lại bằng BlogId từ model Blogs
        aboutme=AboutMe.objects.get(MyId=aboutme_data['MyId'])
        #Sau đó mình sẽ map(chỉ) đến nó sử dụng class BlogSerializer
        aboutmes_serializer=BlogSerializer(aboutme,data=aboutme_data)

        if aboutmes_serializer.is_valid():
            aboutmes_serializer.save()
            return JsonResponse("Update Successfully!",safe=False)
        return JsonResponse("Failed to update")

    #Method DELETE dùng để xóa đối tượng
    elif request.method=='DELETE':
        #Lấy dữ liệu từ URL theo chỉ số Id tương ứng
        aboutme=AboutMe.objects.get(MyId=id)
        aboutme.delete()
        return JsonResponse("Delete Succesffully!",safe=False)


@csrf_exempt
def SaveFile(request):
    file=request.FILES['file']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)


