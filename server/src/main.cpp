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
	std::vector<string> conversation;
	h.onMessage([&h, &userDatabase, &gameGroups, &games, &conversation](WebSocket<SERVER> *ws, char* message, size_t length, OpCode opCode) {
	    string data = std::string(message).substr(0, length);
		json deserialized = json::parse(data);

		if (!ws->getUserData()) {
			player playerVar = userDatabase.getPlayer(deserialized["arg1"]);
			if (playerVar.id != 0) {
				cout << "player " << playerVar.nick << " joined. " << playerVar.wonGames << " games won." << endl;
				ws->setUserData((void*) new player(playerVar));
				cout << playerVar.toJson() << endl;
				string playerString = playerVar.toJson().dump();
				ws->send(playerString.c_str(), playerString.size(), uWS::TEXT);
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
			if (deserialized["type"] == "sendMessage") {
				conversation.push_back(playerVar->nick + string(" sends: ") + deserialized["arg1"].dump());
				json conversationJson = conversation;
				h.getDefaultGroup<uWS::SERVER>().broadcast(conversationJson.dump().c_str(), conversationJson.dump().length(), uWS::OpCode::TEXT);
			}
			if (deserialized["type"]=="createGame") {
				cout << "Tworzy sie nowa gra: " << deserialized["arg1"] << endl;
				games.push_back(game(100));
				gameGroups.push_back(h.createGroup<uWS::SERVER>());
				gameGroups.back()->setUserData(gameGroups.back());
				gameGroups.back()->onMessage([&h, &userDatabase, &gameGroups](WebSocket<SERVER> *ws, char *message, size_t length, OpCode opCode) {
					ws->send("jestem w grze", 14, uWS::TEXT);
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
