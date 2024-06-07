'''def response(hey_bob:str) ->str : implies that 
Function parameters: hey_bob: str indicates that the parameter hey_bob is expected to be of type str (string).
Return type: -> str after the function declaration indicates that the function is expected to return a string.'''

def response(hey_bob:str) ->str :
    hey_bob = hey_bob.strip()
    if hey_bob.isupper() and hey_bob.endswith("?"):
        return "Calm down, I know what I'm doing!" 
    if hey_bob.endswith("?"):
        return "Sure."
    if hey_bob.isupper():
        return "Whoa, chill out!"
        
    #Checking hey_bob is not an empty string
    if not hey_bob: 
        return "Fine. Be that way!"
    return "Whatever."
