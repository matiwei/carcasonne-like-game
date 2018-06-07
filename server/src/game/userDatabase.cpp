#include "userDatabase.h"



userDatabase::userDatabase()
{
	players.push_back(player());
	players[0].nick = "mweigle";
	players[0].password = "1234";
	players[0].mail = "mweigle@mion.elka.pw.edu.pl";

	players[0].averagePoints = 100.1f;
	players[0].games = 9999;
	players[0].wonGames = 5324;

	players.push_back(player());

	players[1].nick = "mweigle2";
	players[1].password = "1234";
	players[1].mail = "mweigle2@mion.elka.pw.edu.pl";

	players[1].averagePoints = 145.1f;
	players[1].games = 99;
	players[1].wonGames = 4;
}


userDatabase::~userDatabase()
{
}

player& userDatabase::getPlayer(std::string nick) {
	for each (player player in players)
	{
		if ((player.nick).compare(nick)==0)
			return player;
	}
}