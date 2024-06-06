def is_armstrong_number(number):
    temp=str(number)
    sum=0
    length=len(temp)
    for i in temp:
        sum=int(i)**length+sum
    return sum==number 
