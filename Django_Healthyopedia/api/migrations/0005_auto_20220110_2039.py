# Generated by Django 3.2.9 on 2022-01-10 15:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20220110_1954'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='id',
        ),
        migrations.AlterField(
            model_name='product',
            name='title',
            field=models.CharField(max_length=400, primary_key=True, serialize=False),
        ),
    ]
