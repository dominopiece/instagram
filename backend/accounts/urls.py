from django.urls import path
from . import views
# jwt old version
# from rest_framework_jwt.views import obtain_jwt_token
# JWT 
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
   path('signup/', views.SignupView.as_view(), name='login'), 
   path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
   path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
#    path('hello/', views.HelloView.as_view(), name="hello"),
]
