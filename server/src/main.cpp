#include "uWS/uWS.h"
using namespace uWS;
#include<iostream>
using namespace std;
#include<string>
int main() {
	Hub h;
	std::string response = "Hello!";

	h.onMessage([&h](WebSocket<SERVER> *ws, char *message, size_t length, OpCode opCode) {
		cout << ws->getUserData() << endl;
		if (!ws->getUserData()) {
			ws->setUserData(message);
		}
		else {
			cout << std::string((char*)ws->getUserData(),strlen((char*)ws->getUserData())) << " says: " << endl;
		}
		std::cout << "onMessage: " << std::string(message, length) << std::endl;
		ws->send(message, length, opCode);
	});
	
	h.onHttpRequest([&](HttpResponse *res, HttpRequest req, char *data, size_t length,
		size_t remainingBytes) {
		cout << "onHttpRequest" << endl;
		res->end(response.data(), response.length());
	});
	int pings = 0, pongs = 0;
	h.onPing([&pings](uWS::WebSocket<uWS::CLIENT> *ws, char *message, size_t length) {
		//std::cout << ws->getAddress().address << ": PING" << std::endl;
		pings++;
	});
	h.onPong([&pings, &pongs, &h](uWS::WebSocket<uWS::SERVER> *ws, char *message, size_t length) {
		//std::cout << ws->getAddress().address << ": PONG" << std::endl;
		pongs++;
		if (pongs %1000 == 0) {
			std::cout << "Count: " << pongs/1000 << std::endl;
		}
	});

	if (h.listen(3000)) {
		//h.connect("ws://localhost:3000/");
		h.run();
	}
}