# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(email:'email@email.com', 
name: "Hunda",
password: '123123',
password_confirmation: '123123')

user = User.first

car1 = Car.create!(name: "BMW X5", user: user)
car2 = Car.create!(name: "Audi Q7", user: user)

driver1 = Driver.create!(name: "John Smith", user: user)
driver2 = Driver.create!(name: "Jane Doe", user: user)

car_group = Group.create!(name: "Luxury Cars", user: user, description: "A collection of high-end luxury cars", location: "Garage 1")

GroupItem.create!(group: car_group, item: car1, user: user)
GroupItem.create!(group: car_group, item: car2, user: user)

driver_group = Group.create!(name: "Top Drivers", user: user, description: "A list of our top performing drivers", location: "Office 2")

GroupItem.create!(group: driver_group, item: driver1, user: user)
GroupItem.create!(group: driver_group, item: driver2, user: user)
