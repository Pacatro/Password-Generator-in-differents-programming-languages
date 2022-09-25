#include <iostream>
#include <fstream>
#include <cstdlib>
#include <string>
#include <ctime>

#ifdef WIN32
    #define COMMAND "cls"

#else
    #define COMMAND "clear"

#endif

std::string generatPassword(int lenght){
    std::string characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@=<>-;\\//", password = "";
    int random;

    srand(time(NULL));

    for(int i = 0; i < lenght; i++){
        random = rand() % characters.size();
        password += characters[random]; 
    }

    return password;
}

bool reminder_in_file(std::string reminder){
    std::ifstream file;
    std::string line;
    file.open("passwords.txt", std::ios::in);

    if(!file.is_open()){
        std::cout<<"ERROR, CAN'T OPEN THE FILE\n\n";
        exit(EXIT_FAILURE);
    }

    while(getline(file, line)){
        file>>line;
        std::cout<<line;
        if(line.find(reminder)){
            return true;
        }
    }

    return false;

}

void generateFile(std::string password, std::string reminder){
    std::ofstream file;

    file.open("passwords.txt", std::ios::app);

    if(!file.is_open()){
        std::cout<<"ERROR, CAN'T OPEN THE FILE\n\n";
        exit(EXIT_FAILURE);
    }

    file<<reminder<<" --> "<<password<<"\n";

    std::cout<<"Your password "<<'('<<password<<')'<<" has been added to the text file ('passwords.txt') succesfully.\n";
}

void menu(){
    std::cout<<"\n-----Password Generator-----\n";
    std::cout<<"\n1. Generate password\n";
    std::cout<<"2. Exit\n";
}

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

                init = false;
            
            break;
        }
    }

    exit(EXIT_SUCCESS);
}