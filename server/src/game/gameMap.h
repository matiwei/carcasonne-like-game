#pragma once
#include"../nlohmann/json.hpp"
#include<vector>
using nlohmann::json;
class gameMap
{
public:
	std::vector<std::vector<int>> map;
	gameMap() = default;
	gameMap(int mapSize);
	~gameMap();
	void print();
	static json toJson(const gameMap & p);
};
