# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from .models import Movie
from .serializers import MovieSerializers
from rest_framework import viewsets


# Create your views here.
class MovieView(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializers