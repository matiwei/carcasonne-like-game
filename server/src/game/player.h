#pragma once
#include<string> 
class player
{
public:
	unsigned long id;
	std::string nick;
	std::string mail;
	std::string password;
	int games;
	int wonGames;
	int averagePoints;
	player();
	~player();
};

