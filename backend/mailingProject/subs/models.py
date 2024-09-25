from django.db import models

# Create your models here.
class Group(models.Model):
    model_name = models.CharField(max_length=120)

    def __str__(self):
        return self.model_name

class Sub(models.Model):
    full_name = models.CharField(max_length=120)
    email = models.EmailField(max_length=40)
    sub_group = models.ForeignKey(Group, related_name='Group', null= True,on_delete= models.SET_NULL)

    def __str__(self):
        return self.full_name
    
#class EmailTemplate(models.Model):
    