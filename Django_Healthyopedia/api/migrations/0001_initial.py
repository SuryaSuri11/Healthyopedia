# Generated by Django 3.2.9 on 2022-01-19 05:48

import api.models
from django.conf import settings
import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('username', models.CharField(max_length=255, unique=True)),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('password', models.CharField(max_length=255)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='consultationcategory',
            fields=[
                ('category', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('categoryimage', models.ImageField(upload_to='images')),
                ('categorydescription', models.CharField(max_length=100)),
                ('categorydiseases', models.CharField(max_length=100)),
                ('faqquestion1', models.TextField()),
                ('faqanswer1', models.TextField()),
                ('faqquestion2', models.TextField(blank=True)),
                ('faqanswer2', models.TextField(blank=True)),
                ('faqquestion3', models.TextField(blank=True)),
                ('faqanswer3', models.TextField(blank=True)),
                ('faqquestion4', models.TextField(blank=True)),
                ('faqanswer4', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=30)),
                ('lastname', models.CharField(max_length=20)),
                ('email_id', models.EmailField(max_length=254)),
                ('phone_no', models.CharField(max_length=10, unique=True)),
                ('message', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('title', models.CharField(max_length=400, primary_key=True, serialize=False)),
                ('category', models.CharField(max_length=400)),
                ('organcategory', models.CharField(max_length=200)),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('quantity', models.CharField(max_length=400)),
                ('composition', models.TextField()),
                ('description', models.TextField()),
                ('uses', models.TextField()),
                ('benefits', models.TextField()),
                ('sideEffects', models.TextField()),
                ('safetyAdvice', models.TextField()),
                ('hwToUse', models.TextField()),
                ('works', models.TextField()),
                ('faqquestion1', models.TextField(blank=True)),
                ('faqanswer1', models.TextField(blank=True)),
                ('faqquestion2', models.TextField(blank=True)),
                ('faqanswer2', models.TextField(blank=True)),
                ('faqquestion3', models.TextField(blank=True)),
                ('faqanswer3', models.TextField(blank=True)),
                ('faqquestion4', models.TextField(blank=True)),
                ('faqanswer4', models.TextField(blank=True)),
                ('faqquestion5', models.TextField(blank=True)),
                ('faqanswer5', models.TextField(blank=True)),
                ('img1', models.ImageField(upload_to='images')),
                ('img2', models.ImageField(blank=True, upload_to='images')),
                ('img3', models.ImageField(blank=True, upload_to='images')),
                ('img4', models.ImageField(blank=True, upload_to='images')),
            ],
        ),
        migrations.CreateModel(
            name='Repository',
            fields=[
                ('date', models.DateField()),
                ('title', models.CharField(max_length=40, primary_key=True, serialize=False)),
                ('image', models.ImageField(upload_to=api.models.upload_path)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Doctorconsultation',
            fields=[
                ('doctorimage', models.ImageField(upload_to='images')),
                ('doctorid', models.IntegerField(primary_key=True, serialize=False)),
                ('doctorname', models.CharField(max_length=20)),
                ('fees', models.DecimalField(decimal_places=2, max_digits=5)),
                ('educationdetails', models.CharField(max_length=50)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.consultationcategory')),
            ],
        ),
        migrations.CreateModel(
            name='consultationform',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=20)),
                ('useremail', models.EmailField(max_length=254)),
                ('phoneno', models.CharField(max_length=10)),
                ('Age', models.IntegerField()),
                ('message', models.TextField(blank=True)),
                ('doctorid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.doctorconsultation')),
            ],
        ),
    ]
