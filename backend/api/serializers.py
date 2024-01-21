from rest_framework import serializers 
from .models import notes

class notesSerializer(serializers.ModelSerializer):
    class Meta :
        model=notes
        fields='__all__'