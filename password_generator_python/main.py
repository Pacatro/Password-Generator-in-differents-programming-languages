import random
import os
import platform
from time import sleep
from io import open

def commad():
    system_os = platform.system()
    if system_os == 'Linux':
        return "clear"

    return "cls"

def generate_password(long):
    words = "abcdefghijklmnopqrstuvwxyz"
    numbers = "0123456789"
    symbols = "#@=<>-;"
    
    all = words + numbers + symbols
    
    final_words = random.sample(all, long)
    
    password = "".join(final_words)
    
    return password

def print_file():
    try:
        file = open("passwords.txt", "r")
        for line in file:
            print(line)
    
    except:
        print("\nERROR, CAN'T READ THE FILE")
        input("\nPress 'Enter' to continue")
        os.system(commad())

def reminder_in_file(reminder):
    try:
        file = open("passwords.txt", "r")
        for line in file:
            if reminder in line:
                file.close()
                return True
            
        file.close()
        return False
    
    except:
        print("\nERROR, CAN'T READ THE FILE")
        input("\nPress 'Enter' to continue")
        os.system(commad())

def write_file(password, reminder):
    try:
        file = open("passwords.txt", "a")
        file.write(reminder + " --> " + password + "\n")
        file.close()
        
        print("\nThe text file has been generated succesfully!")
        
    except:
        print("\nERROR, CAN'T CREATE THE FILE")
        input("\nPress 'Enter' to continue")
        os.system(commad())

def exit_program(condition):
    print("\nExit...")
    sleep(0.5)
    return not condition

def menu():
    os.system(commad())
    print("\n-----Welcome to the Password Generator!-----\n")
    print("What do you wanna do?\n")
    
    print("Generate password (G)")
    print("Read file (R)")
    print("Exit (Press any key)")
 
def main():
    condition = True
    
    while condition:
        menu()
        option = input("\nOption --> ")
        option = option.upper()
        
        if option == 'G':
            long = int(input("\nLength of your password --> "))
            print("\nGenerating password...")
            sleep(1)

            password = generate_password(long)

            print("\nHere is your password -->", password)

            print("\nSave password in a text file?")
            print("\nYes (Y)", "No (Any key)")
    
            choose = input("\nChoose --> ")
            
            choose = choose.upper()
            
            if choose == 'Y':
                reminder = input("\nWrite something for remember your password: ")

                if reminder_in_file(reminder):
                    print("\nERROR, The reminder or password already exists in the file.")

                else:
                    write_file(password, reminder)

            input("\nPress 'Enter' to continue")
            os.system(commad())

        elif option == 'R':
            print("\n-----Passwords.txt-----\n")
            print_file()
            input("\nPress 'Enter' to continue")
            os.system(commad())
           
        else:
            condition = exit_program(True)
                
if __name__ == '__main__':
    main()