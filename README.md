# Comics App

This sample demonstrates how to add authentication with a custom login form to an Angular application using Auth0.

# Characters
Screen 1 - Once after successful login, call the API to get all the characters and show it
in the LI list.
API - GET /v1/public/characters

Screen 2 - On clicking on the character, it should route to another URL and in that it
should give back the information about the characters.
API - GET /v1/public/characters/{characterId}

Screen 3 - In the information about the character, create a button which will route to
another page and it will show the comics for that characters
API - GET /v1/public/characters/{characterId}/comics

# Comics
Screen 1 - Call the API to get all the comics and show it in the LI list.
API - /v1/public/comics

Screen 2 - On clicking on the comic, it should route to another URL and in that it should
give back the information about the comic
API - GET /v1/public/comics/{comicId}

Screen 3 - In the information about the comic, create a button which will route to
another page and it will show the creator of that comics.
API - GET /v1/public/comics/{comicId}/creators
