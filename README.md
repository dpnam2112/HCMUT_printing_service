# HCMUT_printing_service
   
An application for the smart printing service inside campus of HCMUT

# Requirements:
 - NodeJS version 18.16
 - npm version 9.5
 - Python version 3.10 or upper
 - SQLite3
 - Python packages (listed in requirements.txt)
 - Windows Subsystem for Linux (Used to run CAS server)

### How to build Front end

- Cd to front end folder then run `npm run build`

### Backend configuration

#### Setting up the virtual environment for development

For convenience, you should set up a Python virtual environment after cloning this repo.
All folders and files used by virtual environment must not be included in commits.

Read more at: https://docs.python.org/3/library/venv.html to learn how to set up a Python virtual environment.

After setting up the virtual environment, install required packages for the project using the following command:

`pip3 install -r requirements.txt`

You should set up two distinct environment for `backend` and `sso_server`, because `sso_server` will only work properly on Linux environment.

#### Setting up the CAS server

Please read at: `sso_server/README.md`

### How to build backend

- Cd to `backend`

- Install venv: `python3 -m pip install virtualenv`

- Create virtual environment: `python3 -m venv .venv`

- Activate virtual environment: `.venv/Scripts/activate`

- Go to project folder by typing `cd ..` and type: `pip3 install requirements.txt`

- cd to `backend`

- Type the following commands:

`python3 manage.py makemigrations`

`python3 manage.py makemigrations officer_app`

`python3 manage.py makemigrations payment`

`python3 manage.py makemigrations print_auth`

`python3 manage.py makemigrations printing_app`

`python3 manage.py migrate`

Type `python3 manage.py createsuperuser`

Following the steps shown in the CLI

Type `python3 manage.py runserver` to run the server.

Go to `localhost:8000/admin`, logging in and add data.

#### Connect frontend to backend

Follow the below steps:

 - change directory (cd) frontend folder and type `npm run build`
    
 - The directory frontend/out should appear.

 - In the frontend folder, type `npx next export -o output`

 - Type `mv output ..` to move the generated `output` folder to the project folder.

 - Rename `output` to `static`

 - cd to the backend folder and type `python3 manage.py collectstatic`

 - Done!
