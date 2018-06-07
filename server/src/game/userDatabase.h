#pragma once
#include<vector>
#include"player.h"
class userDatabase
{
public:
	std::vector<player> players;
	player& getPlayer(std::string nick);
	userDatabase();
	~userDatabase();
};