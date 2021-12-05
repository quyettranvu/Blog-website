from django.db import models

# Create your models here.

class Blogs(models.Model):
    BlogId=models.AutoField(primary_key=True)
    BlogName=models.CharField(max_length=500)
    BlogContent=models.TextField()
    BlogPhoto=models.CharField(max_length=500)

class AboutMe(models.Model):
    #Nếu như mình không khai báo khóa chính thì khóa chính sẽ được tạo tự động
    MyId=models.AutoField(primary_key=True)
    MyName=models.CharField(max_length=500)
    MyBirthday=models.DateField()
    MyInformation=models.TextField()
    MyPhoto=models.CharField(max_length=500)

