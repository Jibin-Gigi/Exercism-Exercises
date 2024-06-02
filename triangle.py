def triangle_inequality(sides):
    return ( sides[0]+sides[1]>=sides[2] and 
             sides[0]+sides[2]>=sides[1] and 
             sides[2]+sides[1]>=sides[0] )
        
def equilateral(sides):
    return ( triangle_inequality(sides) and 
             sides[0]==sides[1]==sides[2]!=0 and
             sides[0]==sides[1]==sides[2] )

def isosceles(sides):
    return ( triangle_inequality(sides) and 
             (sides[0]==sides[1]!=sides[2] or 
              sides[1]==sides[2]!=sides[0] or 
              sides[0]==sides[2]!=sides[1] or
              equilateral(sides) ) )
  
def scalene(sides):
    return triangle_inequality(sides) and not isosceles(sides)
    
