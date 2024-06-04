def is_armstrong_number(number):
    temp=str(number)
    sum=0
    length=len(temp)
    for i in range(0,length):
        sum=int(temp[i])**length+sum
    return sum==number
