from django.db.models import fields
from rest_framework import serializers
from BlogApp.models import Blogs,AboutMe

#Ý nghĩa của file serializers là giúp chuyển đổi những kiểu file phức tạp model sang dạng kiểu dễ render thành json hay xml của python

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model=Blogs
        fields=('BlogId','BlogName','BlogContent','BlogPhoto')

class AboutmeSerializer(serializers.ModelSerializer):
    class Meta:
        model=AboutMe
        fields=('MyName','MyBirthday','MyInformation','MyPhoto')