from .common import *

# django debug toolbar setup
INSTALLED_APPS += [
    "debug_toolbar",
]

MIDDLEWARE = [
    "debug_toolbar.middleware.DebugToolbarMiddleware",
] + MIDDLEWARE  # MIDLEWARE 처음에 들어감

INTERNAL_IPS = ['127.0.0.1']
# ----

# CORS 
CORS_ORIGIN_WHITELIST = ["http://localhost:3000"]