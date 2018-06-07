#include "gameMap.h"
#include <iostream>
using namespace std;

void gameMap::print() {
	for (int i = 0; i<map.size(); ++i) {
		for (int j = 0; i < map.size(); ++i) {
			cout << map[i][j] << " ";
		}
		cout << endl;
	}

}

json gameMap::toJson(const gameMap & p)
{
	return json{{ "map", p.map }};
}

gameMap::gameMap(int size)
{
	map.resize(size);
	for (int i = 0; i < size; ++i) {
		map[i].resize(size);
		for (int j = 0; j < size; ++j) {
			map[i][j] = 0;
		}
	}
}


gameMap::~gameMap()
{
}