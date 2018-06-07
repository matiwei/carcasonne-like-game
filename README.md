# Medieval board game
The project's casting popular board game based on Carcassone rules into the browser one. The difference is that there is no reason to limit players or tiles number. So the target is to create the world's biggest Carcassone-like game.

Powered by C++, Websockets, JavaScript and React.
## Linux requirements
* Building application requires to have cmake installed
* Building tests assumes Google Test library is installed as a shared library
## Linux building and running
### Server:
`cd server`

`cmake .`

`make` or `make server` or `make tests` to build both server and tests or only some specific part

`./server` to run server

`./tests` to run tests
### Frontend:
`cd frontend`

`npm install`

`npm start` to run fronted; by default it's running on port 3000

`npm test` to run frontend tests
