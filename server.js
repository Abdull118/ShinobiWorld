const express = require('express') //application will now have access to express
const app = express() //using express and storing it into express. anywhere you see app, you will now know that we are using express
const PORT = 8000
const Characters ={
    'Naruto':{ 
    'Name': 'Naruto Uzumaki',
    'age': 17,
    'birthDate': 'October 10',
    'Village': 'Leaf Village',
    'Clan': 'Uzumaki Clan',
    'Status': '7th Hokage'
},

    'Sasuke':{ 
    'Name': 'Sasuke Uchiha',
    'age': 17,
    'birthDate': 'July 23',
    'Village': 'Leaf Village',
    'Clan': 'Uchiha Clan',
    'Status': 'Shadow Hokage'
},

    'Sakura':{ 
    'Name': 'Sakura Haruno',
    'age': 17,
    'birthDate': 'March 28',
    'Village': 'Leaf Village',
    'Clan': 'Haruno Clan',
    'Status': 'Useless'
},

}

app.get('/', (request, response)=>{ //Express uses 2 parameters, one to handle the requests and one to handle the responses. Know that the parameters can be named anything but is simpler to use request and response.
    response.sendFile(__dirname + '/index.html') //Hey! We heard a GET request on the main path '/' we wanna send a responseand the type of response we wanna do is send you a file. dirname is just sayin that wherever the server.js file is located is where we will start looking for the requested file. 
})

app.get('/index.html', (request, response)=>{ //Express uses 2 parameters, one to handle the requests and one to handle the responses. Know that the parameters can be named anything but is simpler to use request and response.
    response.sendFile(__dirname + '/index.html') //Hey! We heard a GET request on the main path '/' we wanna send a responseand the type of response we wanna do is send you a file. dirname is just sayin that wherever the server.js file is located is where we will start looking for the requested file. 
})

app.get('/about.html', (request, response)=>{ //Express uses 2 parameters, one to handle the requests and one to handle the responses. Know that the parameters can be named anything but is simpler to use request and response.
    response.sendFile(__dirname + '/about.html') //Hey! We heard a GET request on the main path '/' we wanna send a responseand the type of response we wanna do is send you a file. dirname is just sayin that wherever the server.js file is located is where we will start looking for the requested file. 
})

app.get('/characters.html', (request, response)=>{ //Express uses 2 parameters, one to handle the requests and one to handle the responses. Know that the parameters can be named anything but is simpler to use request and response.
    response.sendFile(__dirname + '/characters.html') //Hey! We heard a GET request on the main path '/' we wanna send a responseand the type of response we wanna do is send you a file. dirname is just sayin that wherever the server.js file is located is where we will start looking for the requested file. 
})

app.get('/api/:characterName', (request, response)=>{//for an API we send a json file.
    const charactersName = request.params.characterName.toLowerCase()//This will take the rapperName from the URL as a parameter and request it. toLowerCase removes case sensitivity. Request will then effectively request the parameter and store it into the assigned variable.
    if(Characters[charactersName]){ //this is saying, is rappersName, which is inputted into the url and stored in the variable above, is rappersName present inside of the rappers object. If this is true do the following:
       response.json(Characters[charactersName]) //respond with whatever information you have 
    }
    else{
        response.json('Unavaible. Please try with Naruto, Sasuke, or Sakura for now.') //if rappersName does not exist inside of the rappers object, respond with the information of Dylan that stored within rappers.
    }
    // response.json(Rappers)
})

app.get('/js/main.js', (request, response)=>{ //Express uses 2 parameters, one to handle the requests and one to handle the responses. Know that the parameters can be named anything but is simpler to use request and response.
    response.sendFile(__dirname + '/js/main.js') //Hey! We heard a GET request on the main path '/' we wanna send a responseand the type of response we wanna do is send you a file. dirname is just sayin that wherever the server.js file is located is where we will start looking for the requested file. 
})

app.get('/css/style.css', (request, response)=>{ //Express uses 2 parameters, one to handle the requests and one to handle the responses. Know that the parameters can be named anything but is simpler to use request and response.
    response.sendFile(__dirname + '/css/style.css') //Hey! We heard a GET request on the main path '/' we wanna send a responseand the type of response we wanna do is send you a file. dirname is just sayin that wherever the server.js file is located is where we will start looking for the requested file. 
})

app.get('/css/stylecopy.css', (request, response)=>{ //Express uses 2 parameters, one to handle the requests and one to handle the responses. Know that the parameters can be named anything but is simpler to use request and response.
    response.sendFile(__dirname + '/css/stylecopy.css') //Hey! We heard a GET request on the main path '/' we wanna send a responseand the type of response we wanna do is send you a file. dirname is just sayin that wherever the server.js file is located is where we will start looking for the requested file. 
})

app.get('/css/normalize.css', (request, response)=>{ //Express uses 2 parameters, one to handle the requests and one to handle the responses. Know that the parameters can be named anything but is simpler to use request and response.
    response.sendFile(__dirname + '/css/normalize.css') //Hey! We heard a GET request on the main path '/' we wanna send a responseand the type of response we wanna do is send you a file. dirname is just sayin that wherever the server.js file is located is where we will start looking for the requested file. 
})

app.get('/img/background.png', (request, response)=>{ //Express uses 2 parameters, one to handle the requests and one to handle the responses. Know that the parameters can be named anything but is simpler to use request and response.
    response.sendFile(__dirname + '/img/background.png') //Hey! We heard a GET request on the main path '/' we wanna send a responseand the type of response we wanna do is send you a file. dirname is just sayin that wherever the server.js file is located is where we will start looking for the requested file. 
})


app.listen(process.env.PORT || PORT, ()=>{ //This tells the server to be up and running on a certain port, lableed variable PORT. The first part labeled process is saying Hey! Use the port that Heroku is making us use and if that doesnt exist, use the port that we have defined.
    console.log(`The server is running on ${PORT}! You better go catch it!`);
})