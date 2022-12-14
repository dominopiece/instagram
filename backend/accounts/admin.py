from django.contrib import admin
from .models import User

# admin 등록 및 커스텀 환경 구축
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass