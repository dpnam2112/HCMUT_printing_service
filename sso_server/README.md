# CAS Server

This CAS server is created and configured specifically for this project.

This server should run on Linux environment. If your environment development is Windows, you can
install Windows subsystem for Linux (WSL) and run this server on WSL.

# How to run
- If you use Widows, copy `sso_server` folder to WSL virtual machine.
- `cd` to `sso_server`.
- Initialize python virtual environment and install all required packages (Read more at `README.md` of the project)
- Type `python3 manage.py makemigrations`, then `python3 manage.py migrate`
- Type `python3 manage.py createsuperuser` to create a superuser.
- Type `python manage.py runserver localhost:9000`

# How to register a service to the CAS server
- Go to `localhost:9000/admin` and log in using superuser account.
- Go to the section 'Service pattern' and Add a service.
- Configure the attributes of the new service like so:
![Screenshot](/assets/cas-service-pattern-0.png)
![Screenshot](/assets/cas-service-pattern-1.png)
