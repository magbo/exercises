no_of_carrots = float(input("How many carrots would you like?\n"))

price = no_of_carrots * 5
print("Can I have", price, "please?")

payment = float(input("How much do you pay?\n"))

diff = payment - price

surcharge = price - payment 

if diff > 0:
    print("Your change: ", diff, "PLN")
                  
elif diff < 0:
    print("You have to pay extra", abs(diff), "PLN") 

else:
    print("Thank you!!!")
