# static/media
from django.conf import settings
from django.conf.urls.static import static
# ----
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("instagram.urls")),
]

# static/media setup
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    # # django_debug_toolbar setup
    urlpatterns += [
        path('__debug__/', include('debug_toolbar.urls')),
    ]