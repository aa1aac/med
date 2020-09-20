from django.db import models

from django.contrib.auth.models import AbstractUser
import uuid
from .managers import CustomUserManager

class CustomUser(AbstractUser):

    # disable the username field inherited from AbstractUser
    username = None

    user_id = models.UUIDField(
        primary_key=True, 
        default=uuid.uuid4, 
        editable=False
    )
    email = models.EmailField('email_address', unique=True)
    full_name = models.CharField(max_length=255)

    BG_A_POS = "A+"
    BG_B_POS = "B+"
    BG_AB_POS = "AB+"
    BG_O_POS = "O+"
    BG_A_NEG = "A-"
    BG_B_NEG = "B-"
    BG_AB_NEG = "AB-"
    BG_O_NEG = "O-"

    BLOOD_GROUP_CHOICES = (
        (BG_A_POS, BG_A_POS),
        (BG_B_POS, BG_B_POS),
        (BG_AB_POS, BG_AB_POS),
        (BG_O_POS, BG_O_POS),
        (BG_A_NEG, BG_A_NEG),
        (BG_B_NEG, BG_B_NEG),
        (BG_AB_NEG, BG_AB_NEG),
        (BG_O_NEG, BG_O_NEG),
    )

    blood_group = models.CharField(
        max_length=3,
        choices=BLOOD_GROUP_CHOICES,
        blank=True
    )
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = CustomUserManager()

    def __str__(self):
        return self.email

