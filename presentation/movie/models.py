# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Movie(models.Model):
    name = models.CharField(max_length=200, null = False, blank = False)
    categories = models.CharField(max_length=200, null = False, blank = False)
    date = models.DateField(null=True)
    description = models.TextField()
    image = models.ImageField(upload_to='upload/images', null=False, blank=False)


    def __str__(self):
        return self.name