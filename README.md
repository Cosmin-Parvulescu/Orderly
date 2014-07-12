Orderly
=======

Your corporate food helper.

Prerequisites
-------------
In order to run the application you will need:

[Node]

[Mongo]

[Bower]

Installation
--------------
```sh
git clone https://github.com/Cosmin-Parvulescu/Orderly.git
cd Orderly
cd src
npm install
bower install
```

Running the app
---------------
```sh
#optional
set PORT=<port> 

#required
grunt serve
```

###Wait, something's wrong, I get some weird error about a missing ```local.env.js``` file.
What you should do is create that file under ```src\server\config``` and fill it like this:

```
'use strict';

// Environment variables that grunt will set when the server starts locally. Use for your api keys, secrets, etc.
// You will need to set these on the server you deploy to.
//
// This file should not be tracked by git.

module.exports = {
  SESSION_SECRET: "onlyonethatcountssofar",
  FACEBOOK_ID: "app-id",
  FACEBOOK_SECRET: "secret",
  TWITTER_ID: "app-id",
  TWITTER_SECRET: "secret",
  GOOGLE_ID: "app-id",
  GOOGLE_SECRET: "secret"
};
```

##Cheers
[Node], [Express], [Mongoose] and the guys that help us tie them, [Yeoman] and the [Angular-Fullstack] generator.

[Node]:https://github.com/joyent/node
[Mongo]:https://github.com/mongodb/mongo
[Bower]:https://github.com/bower/bower
[Express]:https://github.com/visionmedia/express
[Mongoose]:https://github.com/LearnBoost/mongoose
[Yeoman]:https://github.com/LearnBoost/mongoose
[Angular-Fullstack]:https://github.com/DaftMonk/generator-angular-fullstack
