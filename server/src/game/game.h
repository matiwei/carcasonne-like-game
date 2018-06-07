#pragma once
#include"gameMap.h"
#include"player.h"
#include"../nlohmann/json.hpp"
#include<vector>
using nlohmann::json;

class game
{
public:
	std::string name;
	gameMap map;
	bool started;
	std::vector<player> players;
	game() = default;
	game(int mapSize);
	~game();
};