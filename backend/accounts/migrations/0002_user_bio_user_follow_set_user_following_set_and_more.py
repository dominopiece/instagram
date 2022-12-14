# Generated by Django 4.1.4 on 2022-12-14 17:47

from django.conf import settings
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='bio',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='user',
            name='follow_set',
            field=models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='user',
            name='following_set',
            field=models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='user',
            name='gender',
            field=models.CharField(blank=True, choices=[('M', '남성'), ('F', '여성')], max_length=1),
        ),
        migrations.AddField(
            model_name='user',
            name='phone_number',
            field=models.CharField(blank=True, max_length=13, validators=[django.core.validators.RegexValidator('^01[0|1]-?[1-9]\\d{3,4}-?\\d{4}')]),
        ),
        migrations.AddField(
            model_name='user',
            name='profile_image',
            field=models.ImageField(blank=True, help_text='48px * 48px, jpg/png', upload_to='accounts/profile_image/%Y/%m/%d'),
        ),
        migrations.AddField(
            model_name='user',
            name='website_url',
            field=models.URLField(blank=True),
        ),
    ]