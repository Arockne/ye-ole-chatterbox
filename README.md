# Ye Ole Chatterbox

Ye Ole Chatterbox is a chatting application

## To get started:

**This application assumes that bundler, npm, ruby, rails, and postgresql is installed**

```sh
bundle install
rails db:create db:migrate db:seed
npm install --prefix client
```
## Currently Deployed at:
- [YeOleChatterBox](https://ye-ole-chatterbox.herokuapp.com/)
  - Currently live chat does not work in production due to the removal of redis

## Ruby Version:
- 2.7.4

## Side Notes:
- Need to figure out how to have live chat working in both production and development
  - currently only works in development
  - If I were to add the localhost websocket url to Cable.createConsumer(WURL)
    - The live chat would only work in development
  - If I were to not place an argument to Cable.createConsumer()
    - The live chat would only work in the build or production of this application
  - Somehow need to have some kind of conditional to output a specific websocket url depending on the environment

- Redis has discontinued their add-on with Heroku
  - need to remove redis from production cable.yml and replace with something else
  - need to find a different add-on that allows live chat

## Future Feature Implementations:
- Action Cable
  - Live memberhship join/leave
    - chatroom will be notified of join/leave
  - Current members online
- User created chatrooms
  - creator is admin
  - join by password
  - live feed of created chatrooms
- Phone view
  - need to change how chatroom is rendered
  - need to change how welcome image renders when logged in

## Deployment Instructions

## System Dependencies:

## Configuration
