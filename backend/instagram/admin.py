from django.contrib import admin
from .models import Post

# admin 등록 및 커스텀 환경 구축
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    pass