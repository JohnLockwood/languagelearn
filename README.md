# LanguageLearn.pro

This is the home of code and documentation supporting my English teaching business.  The name of the business is subject to change before launch.

## Vision

The current vision is of an English Language Learning site focusing on Spanish-speaking learners.  

## Getting started

To set up Postgres and migrations.

TODO:  Add venv step, or consolidate makefile...

1. Add lines like the following to your .profile file, and source it or log in again

```
export POSTGRES_PASSWORD=Maracuya2019Froyo
export POSTGRES_USER=pguser_maestro
export POSTGRES_DB=pgdb_maestro
```

2. Start database
```
cd docker
make up
```

3. Set up venv
```
python -m venv venv
source venv/bin/activate 
OR 
venv/scripts/activate.bat
```


4. Run migrations
cd ..\django_app
python 


# Some older architectural constraints -- where should this go? 

* Lesson authoring should be simple, ideally an editor or similar + audacity.
* Authentication needs to be cheap and easy to do.
* Must support SEO well -- high static content
* Must be tech I want to use (could also go for next category?)
* Should be less than $100 / month for the first three years.
* Must be beautiful
* Must be interactive
* Must enable web + android + ios.


