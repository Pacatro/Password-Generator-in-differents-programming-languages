import random
import os
from time import sleep
from io import open


def generate_password(long):
    words = "abcdefghijklmnopqrstuvwxyz"
    numbers = "0123456789"
    symbols = "#@=<>-;"
    
    all = words + numbers + symbols
    
    final_words = random.sample(all, long)
    
    password = "".join(final_words)
    
    return password


def generate_file(password, file_name, reminder):
    try:
        file = open(file_name, "a")
        file.write(reminder + " --> " + password + "\n")
        file.close()
        
        print("\nThe text file has been generated succesfully!")
        
    except:
        print("\nERROR, CAN'T CREATE THE FILE")
        input("\nPress 'Enter' to continue")
        os.system("cls")


def exit_program(condition):
    print("\nExit...")
    sleep(0.5)
    return not condition

    
def menu():
    os.system("cls")
    print("\n-----Welcome to the Password Generator!-----\n")
    print("What do you wanna do?\n")
    
    print("Generate password (G)")
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
                file_name = input("\nFile name (example: file.txt): ")

                generate_file(password, file_name, reminder)

            input("\nPress 'Enter' to continue")
            os.system("cls")
           
        else:
            condition = exit_program(True)
                
    
if __name__ == '__main__':
    main()