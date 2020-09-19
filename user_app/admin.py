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
        (None, {'fields': ('full_name', 'email', 'password', 'blood_group', 'wants_to_donate')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')})
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('full_name', 'email', 'password1', 'password2', 'blood_group',
                        'wants_to_donate','is_staff', 'is_active')
        }),
    )

    search_fields = ('email',)
    ordering = ('email',)

admin.site.register(CustomUser, CustomUserAdmin)

