# HCMUT_printing_service

An application for the printing service inside HCMUT campus

### How to start developing Front end

- Cd to front end folder then run `npm run dev`
- Follow [shadcn](https://ui.shadcn.com/docs) library to build UI components

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