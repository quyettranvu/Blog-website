# Generated by Django 3.2.9 on 2021-11-19 18:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BlogApp', '0002_auto_20211120_0050'),
    ]

    operations = [
        migrations.AddField(
            model_name='aboutme',
            name='MyId',
            field=models.AutoField(default=1, primary_key=True, serialize=False),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='aboutme',
            name='MyName',
            field=models.CharField(max_length=500),
        ),
    ]
