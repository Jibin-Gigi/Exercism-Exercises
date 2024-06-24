def is_leap_year(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

'''
def leap_year(year):
    if year%100==0:
        if year%400==0:
            return True
        else :
            return False
    if year%4==0:
        return True
    else :
        return False
    pass

'''
