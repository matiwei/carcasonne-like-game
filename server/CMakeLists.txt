cmake_minimum_required(VERSION 3.10)
project(server)

set(CMAKE_CXX_STANDARD 11)

include_directories(.)
include_directories(src/uWS)
include_directories(${GTEST_SOURCE_DIR}/include $GTEST_SOURCE_DIR})

add_executable(server
        src/uWS/Asio.h
        src/uWS/Backend.h
        src/uWS/Epoll.cpp
        src/uWS/Epoll.h
        src/uWS/Extensions.cpp
        src/uWS/Extensions.h
        src/uWS/Group.cpp
        src/uWS/Group.h
        src/uWS/HTTPSocket.cpp
        src/uWS/HTTPSocket.h
        src/uWS/Hub.cpp
        src/uWS/Hub.h
        src/uWS/Libuv.h
        src/uWS/Networking.cpp
        src/uWS/Networking.h
        src/uWS/Node.cpp
        src/uWS/Node.h
        src/uWS/Room.cpp
        src/uWS/Room.h
        src/uWS/Socket.cpp
        src/uWS/Socket.h
        src/uWS/uWS.h
        src/uWS/WebSocket.cpp
        src/uWS/WebSocket.h
        src/uWS/WebSocketProtocol.h
        src/main.cpp
        resource.h)

add_executable(tests
        Test/pch.cpp
        Test/pch.h
        Test/test.cpp)

target_link_libraries(server -lssl -lcrypto -lz)
target_link_libraries(tests gtest_main gtest)
