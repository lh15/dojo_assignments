name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas","hhhhh"]


def make_dict(arr1, arr2):
  new_dict = {}
  # your code here
  if len(name) > len(favorite_animal):
    new_dict = zip(arr1, arr2)
    print new_dict
    new_dict_dict = dict(new_dict)
    print new_dict_dict
    return new_dict_dict
  elif len(name) < len(favorite_animal):
    new_dict = zip(arr2, arr1)
    print new_dict
    new_dict_dict = dict(new_dict)
    print new_dict_dict
    return new_dict_dict


make_dict(name, favorite_animal)