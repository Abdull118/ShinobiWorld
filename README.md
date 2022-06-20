# Shinobi World Project
As a child I wanted to have the ability to create things based on what I love. Naruto is just an anime for some but for me it was what helped me get through my childhood. This project effectively returns the Names, affiliations, and other relevant information from an API that I created all while being visually appealing.

**Link to project:** http://aqueous-waters-92397.herokuapp.com/characters.html?

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Express.js 

I began with the core structure of the site. Begining with the navigation bar and the bottom section linking to my GitHub profile. Coming up with a design was the part that was the most fun. I utilized a transparent image and had it repeat multiple times throughout the header and footer. Then I added the theme color of the Anime behind it to give it a finishing look. To add some creativity I additionally incorporated a GIF image from the anime into the background of the body ensuring that I don't overlap the header and footer. From there I added the various sections and subsections based on what information I wanted to return.

Heading into the backend, I utilized Express.js to enhance the process. Instead of utilizing a premade API I decided to create my own to add a sense of connection to my beloved project. Connecting the dots proved to be a bit difficult at first as getting the main.js file to act in sequence with the server file was a bit tricky. However I quickly managed to get a handle of things and after a few alterations, Viola! I had a site that though may seem simple, is one that I have always dreamed of having the ability to create with my own hands.

The current characters in the API are Naruto, Sasuke, and Sakura should you wish to check it out for yourselves!

## Optimizations

Instead of utilizing a chunky node.js code, I opted to use the cleaner Express.js. Additionally should anyone choose to update this project, every line in the server file has comments guiding the user to how each line functions and what names were used and why.

In the future I plan to add more characters to the API, increase optimization for cross-platform devices through addition of media-queries and plan to add more than just characters. One thing I truly look forward to adding is a sound option whenever the button is clicke. 

## Lessons Learned:

Coding your own API can be overwhelming. Where do you start? What do you add? What do you not add? How do you get the input value to store into a variable and then return said variable to the DOM and ensure it follows the properties laid out in the CSS file? These were running rampant in my mind. I took a deep breath calmed myself down and just started typing. Because at the end of the day you just need to do it.

One of the biggest struggles I was having was getting it to upload onto heroku and then having the API respond to the requests being made by the main.js file. Eventually I realized I needed to install heroku in my command line and change the HTTPS to HTTP to get it all to function. From there it was smooth sailing.

The number one takeaway for me was that keeping my cool and trusting in the process while also trusting my knowledge will prevail.


