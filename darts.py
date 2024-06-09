def score(x, y):
    #Finding distance the point and centre (0,0)
    distance=(x**2+y**2)**0.5
    if distance<=1:
        return 10
    if distance<=5:
        return 5
    if distance<=10:
        return 1
    return 0
