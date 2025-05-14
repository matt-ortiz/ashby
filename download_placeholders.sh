#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p /Users/mattortiz/PycharmProjects/realestate/ashby/images

# Download placeholder images
curl -o /Users/mattortiz/PycharmProjects/realestate/ashby/images/main.jpg "https://via.placeholder.com/1200x800.jpg?text=Main+Property+Photo"
curl -o /Users/mattortiz/PycharmProjects/realestate/ashby/images/living.jpg "https://via.placeholder.com/800x600.jpg?text=Living+Room"
curl -o /Users/mattortiz/PycharmProjects/realestate/ashby/images/kitchen.jpg "https://via.placeholder.com/800x600.jpg?text=Kitchen"
curl -o /Users/mattortiz/PycharmProjects/realestate/ashby/images/bedroom.jpg "https://via.placeholder.com/800x600.jpg?text=Bedroom"
curl -o /Users/mattortiz/PycharmProjects/realestate/ashby/images/agent.jpg "https://via.placeholder.com/300x300.jpg?text=Agent+Photo"

echo "Placeholder images downloaded successfully!"
