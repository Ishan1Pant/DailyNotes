from django.contrib import admin
from .models import notes
# Register your models here.
@admin.register(notes)
class notesAdmin(admin.ModelAdmin):
    list_display=['body','created_at']