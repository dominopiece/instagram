from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator

# Create your models here.
class User(AbstractUser):
    class GenderChoices(models.TextChoices):
        MALE = "M", "남성"
        FEMALE = "F", "여성"
    
    follow_set = models.ManyToManyField("self", blank=True)
    following_set = models.ManyToManyField("self", blank=True)

    website_url = models.URLField(blank=True)
    bio = models.TextField(blank=True)
    phone_number = models.CharField(
        max_length=13,
        blank=True,
        validators=[RegexValidator(r"^01[0|1]-?[1-9]\d{3,4}-?\d{4}")],
    )
    gender = models.CharField(max_length=1, blank=True, choices=GenderChoices.choices)
    profile_image = models.ImageField(
        blank=True,
        upload_to="accounts/profile_image/%Y/%m/%d",
        help_text="48px * 48px, jpg/png",
    ) 