# Notes of Project

## DjangoRestFramework Notes:

- _Serializers_ define the API representation.
- _ViewSets_ define the view behavior
- _Routers_ provide an easy way of automatically determining the URL conf

- Views: function/classes
  `class based views helps us to keep our code DRY and we dont write the similar code repeatedly.`
  -- ViewSet
  -- APIVIEW
  -- Mixin Views
  -- GenericView - DRF provides a set of already mixed-in generic views that we can use to trim down our views.py module even more.

- Serializers:
  -- **Serializer** - here we make whole serializer from scratch like the 'model'

`as Form & ModelForm classes both are present in Django, similarly in DRF, we use Serializer as well as ModelSerializer classes`
-- **ModelSerializer** - they are simply a shortcut for creating serializer classes
-- **HyperLinkedSerializer** -

### _ Token Authentication_

The only way for the server to know who the user is when The front end of the website will send a “Token” with every request to the backend.
This “Token” is used by the backend to authenticate a user and authorize them to access different features.
_Django REST Framework settings_:
