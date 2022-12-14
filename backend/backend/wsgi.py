"""
WSGI config for backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

# settings.py 경로 변경으로 인한 변경
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings.prod')

application = get_wsgi_application()
