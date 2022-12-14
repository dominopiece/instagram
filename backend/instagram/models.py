from django.db import models
from django.conf import settings


class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
            abstract = True     # db 생성 방지

class Post(TimeStampedModel):
    pass
    # author = models.ForeignKey
