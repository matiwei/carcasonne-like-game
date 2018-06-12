#include "uWS/uWS.h"
#include<string>
#include<iostream>
#include<vector>
#include"game/userDatabase.h"
#include"game/game.h"
#include"game/gameMap.h"
#include"nlohmann/json.hpp"

using json = nlohmann::json;
using namespace uWS;
using namespace std;

int main() {
	Hub h;
	userDatabase userDatabase;
	std::string response = "Hello!";
	std::vector<game> games;
	std::vector<uWS::Group<SERVER>*> gameGroups;

	h.onMessage([&h, &userDatabase, &gameGroups, &games](WebSocket<SERVER> *ws, char* message, size_t length, OpCode opCode) {
	    string data = std::string(message).substr(0, length);
		json deserialized = json::parse(data);

		if (!ws->getUserData()) {
			player playerVar = userDatabase.getPlayer(deserialized["arg1"]);
			if (playerVar.id != 0) {
				cout << "player " << playerVar.nick << " joined. " << playerVar.wonGames << " games won." << endl;
				ws->setUserData((void*) new player(playerVar));
				ws->send(std::string(playerVar.toJson().value).c_str, uWS::TEXT);
				//EXAMPLE
				gameMap gm = gameMap(10);
				json o;
				o = gameMap::toJson(gm);
				cout << o << endl;
			}
		}
		else {
			player* playerVar = (player*)ws->getUserData();
			cout << playerVar->nick << " sends: " << deserialized["arg1"] << endl;

			// TODO: adapt to new message
			size_t pos = std::string(message).find("createGame");
			if (pos != std::string::npos) {
				cout << "Tworzy się nowa grupa" << endl;
				games.push_back(game(100));
				gameGroups.push_back(h.createGroup<uWS::SERVER>(uWS::PERMESSAGE_DEFLATE));
				gameGroups.back()->onMessage([&h, &userDatabase, &gameGroups](WebSocket<SERVER> *ws, char *message, size_t length, OpCode opCode) {
					cout << "Jestem w nowej grupie" << endl;
				});
				ws->transfer(gameGroups.back());
			}
		}
	});

	h.onHttpRequest([&](HttpResponse *res, HttpRequest req, char *data, size_t length, size_t remainingBytes) {
		cout << "onHttpRequest" << endl;
		res->end(response.data(), response.length());
	});

	if (h.listen(4000)) {
		h.run();
	}
}
