# Generated by Django 3.1.1 on 2020-09-19 07:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='wants_to_donate',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]
