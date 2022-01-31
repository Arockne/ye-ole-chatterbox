# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Seeding...'

Chatroom.create ([
  {
    name: 'Jolly Good Chatter',
    image_url: '',
    bio: 'All about the chatting'
  },
  {
    name: 'Crumpets and Tea',
    image_url: '',
    bio: 'Have some wondrous tea with some mighty fine chatting'
  },
  {
    name: 'Polo Club',
    image_url: '',
    bio: 'The most exclusive chat about the sport of polo'
  },
  {
    name: 'Art Gallery',
    image_url: '',
    bio: 'Most luxurious form of chatting about fine art'
  },
  {
    name: 'Book club',
    image_url: '',
    bio: 'Chatter about most cherished books'
  }
])

first_user = User.create(username: 'peter', password: 'notsafe', password_confirmation: 'notsafe', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Sir_Peter_Paul_Rubens_-_Portrait_of_the_Artist_-_Google_Art_Project.jpg/800px-Sir_Peter_Paul_Rubens_-_Portrait_of_the_Artist_-_Google_Art_Project.jpg')
second_user = User.create(username: 'elizabeth', password: 'notsafe', password_confirmation: 'notsafe', image_url: 'https://www.toperfect.com/pic/Oil%20Painting%20Masterpieces%20on%20Canvas/Winterhalter%20Franz%20Xavier_Germany_1805-1873/5-Princess-Elizabeth-Esperovna-Belosselsky-Belosenky-Princess-Troubetskoi-royalty-portrait-Franz-Xaver-Winterhalter.jpg')
third_user = User.create(username: 'james', password: 'notsafe', password_confirmation: 'notsafe')

first_chatroom = Chatroom.first
first_chatroom.chatroom_memberships.create(user: first_user)
first_chatroom.chatroom_memberships.create(user: second_user)
first_user.messages.create(content: 'What a mighty fine chatting application', chatroom: first_chatroom)
second_user.messages.create(content: 'Indubitably, chatting of this magnitude shall be henceforth be known to the', chatroom: first_chatroom)
first_user.messages.create(content: 'Ave, Caesar, morituri te salutant', chatroom: first_chatroom)

second_chatroom = Chatroom.second
second_chatroom.chatroom_memberships.create(user: first_user)
first_user.messages.create(content: 'Mens sana in corpore sano ', chatroom: second_chatroom)
first_user.messages.create(content: 'Dulce laudari a laudato viro', chatroom: second_chatroom)
first_user.messages.create(content: 'Timet-non faciant. Facere-ne timeas', chatroom: second_chatroom)


third_chatroom = Chatroom.third
third_chatroom.chatroom_memberships.create(user: second_user)
second_user.messages.create(content: 'WOW, so cool', chatroom: third_chatroom)
second_user.messages.create(content: 'ah I see it now', chatroom: third_chatroom)
second_user.messages.create(content: 'The light is coming, I see it', chatroom: third_chatroom)
puts 'Seeding Complete'