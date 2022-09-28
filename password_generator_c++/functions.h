#ifndef FUNCTIONS_H
#define FUNCTIONS_H

    #ifdef WIN32
        #define COMMAND "cls"

    #else
        #define COMMAND "clear"

    #endif

    std::string generatPassword(int lenght);
    void read_file();
    bool reminder_in_file(std::string reminder);
    void generateFile(std::string password, std::string reminder);
    void menu();

#endif