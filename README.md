# Ye Ole Chatterbox

Ye Ole Chatterbox is a chatting application

## To get started:

**This application assumes that bundler, npm, ruby, rails, and postgresql is installed**

```sh
bundle install
rails db:create db:migrate db:seed
npm install --prefix client
```

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
  - These notes may still prove useful even though this application is no longer deployed to Heroku

## Future Feature Implementations:
- Action Cable
  - Live memberhship join/leave
    - chatroom will be notified of join/leave
  - Current members online
- User created chatrooms
  - creator is admin
  - join by invite
  - live feed of created chatrooms
- Phone view
  - need to change how chatroom is rendered
  - need to change how welcome image renders when logged in

## Deployment Instructions

## System Dependencies:

## Configuration
