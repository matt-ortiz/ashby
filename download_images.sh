#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p /Users/mattortiz/PycharmProjects/realestate/ashby/images

# Download main property image
curl -o /Users/mattortiz/PycharmProjects/realestate/ashby/images/main.jpg "https://photos.zillowstatic.com/fp/c9e0e8a3c9e9c9e0e8a3c9e9c9e0e8a3-cc_ft_1536.jpg"

# Download living room image
curl -o /Users/mattortiz/PycharmProjects/realestate/ashby/images/living.jpg "https://photos.zillowstatic.com/fp/c9e0e8a3c9e9c9e0e8a3c9e9c9e0e8a3-cc_ft_960.jpg"

# Download kitchen image
curl -o /Users/mattortiz/PycharmProjects/realestate/ashby/images/kitchen.jpg "https://photos.zillowstatic.com/fp/c9e0e8a3c9e9c9e0e8a3c9e9c9e0e8a3-cc_ft_960.jpg"

# Download bedroom image
curl -o /Users/mattortiz/PycharmProjects/realestate/ashby/images/bedroom.jpg "https://photos.zillowstatic.com/fp/c9e0e8a3c9e9c9e0e8a3c9e9c9e0e8a3-cc_ft_960.jpg"

# Download agent image (placeholder)
curl -o /Users/mattortiz/PycharmProjects/realestate/ashby/images/agent.jpg "https://via.placeholder.com/300x300.jpg?text=Agent+Photo"

echo "Images downloaded successfully!"
