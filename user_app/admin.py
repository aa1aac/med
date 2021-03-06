from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):

    add_form = CustomUserCreationForm
    form  = CustomUserChangeForm
    model = CustomUser

    list_display = ('email',)
    list_filter = ('email',)

    fieldsets = (
        (None, {'fields': ('username', 'email', 'password', 'blood_group')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')})
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2', 'blood_group',
                        'is_staff', 'is_active')
        }),
    )

    search_fields = ('email',)
    ordering = ('email',)

admin.site.register(CustomUser, CustomUserAdmin)

