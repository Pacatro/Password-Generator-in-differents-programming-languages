#include <iostream>
#include <fstream>
#include <cstdlib>
#include <string>
#include <ctime>
#include "functions.h"

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

void read_file(){
    std::ifstream file;
    std::string line;

    file.open("passwords.txt", std::ios::in);

    if(!file.is_open()){
        std::cout<<"ERROR, CAN'T OPEN THE FILE\n\n";
        exit(EXIT_FAILURE);
    }

    while(file.eof()){
        file>>line;
        std::cout<<line<<"\n";
    }

    file.close();
}

bool reminder_in_file(std::string reminder){
    std::ifstream file;
    std::string line;
    file.open("passwords.txt", std::ios::in);

    if(!file.is_open()){
        std::cout<<"ERROR, CAN'T OPEN THE FILE\n\n";
        exit(EXIT_FAILURE);
    }

    while(file.eof()){
        file>>line;
        std::cout<<line;
        if(line.find(reminder)){
            return true;
        }
    }

    file.close();

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
    std::cout<<"2. Show file\n";
    std::cout<<"3. Exit\n";
}

