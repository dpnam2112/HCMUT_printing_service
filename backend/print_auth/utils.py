from .models import CampusUser

def is_admin(user):
    """ Check if a user is the administrator of the printing system. """
    try:
        prof = CampusUser.objects.get(base_user=user)
        return prof.is_admin
    except Exception as e:
        return False