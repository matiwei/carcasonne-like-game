#pragma once
#include<string> 
#include"../nlohmann/json.hpp"
using nlohmann::json;
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
	const json player::toJson();
};

