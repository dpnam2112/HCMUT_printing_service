from cas_server.auth import DjangoAuthUser
from cas_models.models import CampusProfile

class ExtendedAuth(DjangoAuthUser):
    def attributs(self):
        attrs = super().attributs()
        print(attrs)

        if not attrs:
            return attrs

        profile = CampusProfile.objects.get(base_user=self.user) 

        if not profile:
            return attrs

        attr_names = [ field.attname for field in profile._meta.get_fields() if hasattr(field, "attname") ]    

        for attr_name in attr_names:
            attrs[attr_name] =  getattr(profile, attr_name)

        return attrs