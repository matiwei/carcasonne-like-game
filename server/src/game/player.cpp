#include "player.h"



player::player()
{
}


player::~player()
{
}


const json player::toJson()
{
	return json{ 
		{ "nick", nick },
		{ "games", games},
		{"wonGames", wonGames},
		{"averagePoints", averagePoints}
	};
}