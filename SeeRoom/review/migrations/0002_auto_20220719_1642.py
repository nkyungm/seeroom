# Generated by Django 3.2.10 on 2022-07-19 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='building',
            name='bugScore',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='cctv',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='cleanAvg',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='constructionScore',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='courierBox',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='deposit',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='elevator',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='externalNoiseScore',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='femaleOnly',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='floorNoiseScore',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='internalNoiseScore',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='locationsAvg',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='managementScore',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='moldScore',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='monthlyRent',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='noiseAvg',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='parkingScore',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='safeAvg',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='building',
            name='smellScore',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
