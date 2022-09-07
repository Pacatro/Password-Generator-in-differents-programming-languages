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

using namespace std;

string generatPassword(int lenght){
    string characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@=<>-;\\//", password = "";
    int random;

    srand(time(NULL));

    for(int i = 0; i < lenght; i++){
        random = rand() % characters.size();
        password += characters[random];
    }

    return password;
}

void generateFile(string password, string reminder){
    ofstream file;

    file.open("passwords.txt", ios::app);

    if(file.is_open() == false){
        cout<<"ERROR, CAN'T OPEN THE FILE"<<endl;
        return;
    }

    file<<reminder<<" --> "<<password<<endl;

    cout<<"Your password "<<'('<<password<<')'<<" has been added to the text file ('passwords.txt') succesfully."<<endl;
}

void menu(){
    cout<<"\n-----Password Generator-----"<<endl;
    cout<<"\n1. Generate password"<<endl;
    cout<<"2. Exit"<<endl;
}

int main(){

    system(COMMAND);

    int option, length;
    bool init = true;
    string password, reminder;
    char choose;
    
    while(init){    
        menu();
        cout<<"\nOption -> ";
        cin>>option;

        switch(option){
            case 1:

                cout<<"\nLength of your password -> ";
                cin>>length;
                cout<<endl;

                password = generatPassword(length);

                cout<<"Here is your password: "<<password<<"\n"<<endl;
                
                cout<<"Save password in a text file?"<<endl;
                cout<<"\nYes (Y)    No (N)"<<endl;

                cout<<"\nChoose -> ";
                cin>>choose;

                choose = toupper(choose);

                if(choose == 'Y'){
                    cout<<"\nWrite something for remember your password: ";
                    cin>>reminder;
                    cout<<endl;

                    generateFile(password, reminder);
                }

                cout<<endl;
                system("pause");
                system(COMMAND);

            break;
            
            case 2:

                init = false;
            
            break;
        }
    }
}