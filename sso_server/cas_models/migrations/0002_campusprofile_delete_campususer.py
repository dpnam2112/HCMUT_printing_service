# Generated by Django 4.1.12 on 2023-10-31 00:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cas_models', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CampusProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('campus_id', models.CharField(max_length=10, null=True, unique=True)),
                ('base_user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, to_field='username')),
            ],
        ),
        migrations.DeleteModel(
            name='CampusUser',
        ),
    ]