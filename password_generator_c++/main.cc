#include <iostream>
#include <cstdlib>
#include <string>
#include "functions.h"

int main(){

    system(COMMAND);

    int option, length;
    bool init = true;
    std::string password, reminder;
    char choose;
    
    while(init){    
        menu();
        std::cout<<"\nOption -> ";
        std::cin>>option;

        switch(option){
            case 1:

                std::cout<<"\nLength of your password -> ";
                std::cin>>length;
                std::cout<<"\n";

                password = generatPassword(length);

                std::cout<<"Here is your password: "<<password<<"\n\n";
                
                std::cout<<"Save password in a text file?\n";
                std::cout<<"\nYes (Y)    No (N)\n";

                std::cout<<"\nChoose -> ";
                std::cin>>choose;

                choose = toupper(choose);

                if(choose == 'Y'){
                    std::cout<<"\nWrite something for remember your password: ";
                    std::cin>>reminder;
                    std::cout<<"\n";

                    if(reminder_in_file(reminder)){
                        std::cout<<"\nERROR, THERE IS A PASSWORD WITH SAME REMINDER.\n";
                        system("pause");
                        system(COMMAND);
                    }

                    else{
                        generateFile(password, reminder);
                    }
                    
                }

                std::cout<<"\n";
                system("pause");
                system(COMMAND);

            break;
            
            case 2:
                std::cout<<"\n-----Passwords.txt-----\n";
                read_file();
                system("pause");
                system(COMMAND);
            break;

            case 3:

                init = false;
            
            break;
        }
    }

    exit(EXIT_SUCCESS);
}