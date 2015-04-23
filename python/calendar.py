

data = [
    ('January', range(31)),
    ('February', range(28)),
    ('March', range(31)),
    ('April', range(30)),
    ('May', range(31)),
    ('June', range(30)),
    ('July', range(31)),
    ('August', range(31)),
    ('September', range(30)),
    ('October', range(31)),
    ('November', range(30)),
    ('December', range(31)),
]




for name, days in data:

    print()
    print (name)

    for day in days:
        if day % 7 == 0:
            print(""),
        a =str(day)
        if len(a) == 1:
            a = "0" + a
        a = " " + a    
        print (a, end=' ')
    print()
        

    
