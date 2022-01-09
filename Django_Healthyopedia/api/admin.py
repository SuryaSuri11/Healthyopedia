from django.contrib import admin
from .models import Product
# Register your models here.
admin.site.register(Product)

from .models import consultationcategory
# Register your models here.
admin.site.register(consultationcategory)

from .models import Doctorconsultation
# Register your models here.
admin.site.register(Doctorconsultation)


from .models import consultationform
# Register your models here.
admin.site.register(consultationform)
