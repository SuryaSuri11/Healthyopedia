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


from .models import Contact
# Register your models here.
admin.site.register(Contact)

from .models import User
# Register your models here.
admin.site.register(User)

from .models import Repository
# Register your models here.
admin.site.register(Repository)

