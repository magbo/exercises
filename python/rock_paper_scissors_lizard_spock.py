import random

# Rock-paper-scissors-lizard-Spock template


# The key idea of this program is to equate the strings
# "rock", "paper", "scissors", "lizard", "Spock" to numbers
# as follows:
#
# 0 - rock
# 1 - Spock
# 2 - paper
# 3 - lizard
# 4 - scissors


# helper functions

def name_to_number(name):
    
#converts the string name into a number
    if name == 'rock':
        number = 0
        return number
    elif name == 'Spock':
        number = 1
        return number
    elif name == 'paper':
        number = 2
        return number
    elif name == 'lizard':
        number = 3
        return number
    elif name == 'scissors':
        number = 4
        return number
    else:
        print("Ooops! Looks like that is an incorrect input")
        

def number_to_name(number):
    
#converts a number into a string name
    if number == 0:
        name = 'rock'
        return name
    elif number == 1:
        name = 'Spock'
        return name
    elif number == 2:
        name = 'paper'
        return name
    elif number == 3:
        name = 'lizard'
        return name
    elif number == 4:
        name = 'scissors'
        return name
    else:
        print("Ooops! Looks like that is an incorrect input")
        
        
def rpsls():
    print("Welcome to the game!")
    
    player_choice = input ("What's your choice?\n[rock, paper, scissors, lizard, Spock]:\n")

    while player_choice not in ("rock", "paper", "scissors", "lizard", "Spock"):
        print ()
        print ("Ooops! Looks like that is an incorrect input")
        player_choice = input ("What's your choice?\n[rock, paper, scissors, lizard, Spock]:\n")
            
    print ()
    print ()
  
    print("Player chooses", player_choice)

#computes the number corresponding to players choice     
    
    player_number = name_to_number(player_choice)
    
#generates the computer's guess and prints out an appropriate message

    comp_number = random.randrange(0,5)
    comp_choice = number_to_name(comp_number)
    print("Computer chooses", comp_choice)


    difference_mod_5 = (comp_number - player_number)%5




    if difference_mod_5  >=3:
        print ()
        print ("Player wins!")
        print ()
        
    elif difference_mod_5 > 0:
        print ()
        print ("Computer wins!")
        print ()

    else:
        print()
        print ("Player and computer tie!")
        print ()

        
cond = True

while cond:


    rpsls()

    play_again = input("Play again? y/n: ")

    if play_again == "y":
        print()
        print()
        pass    

    else:
        print("See you")
        cond = False
       






