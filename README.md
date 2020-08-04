https://marinabudz.github.io/sign-up-app/

JSON server
npm i -D json-server concurrently
"json-server": "json-server --watch db.json --port 5000",
"dev": "concurrently \"npm start\" \"npm run json-server\"",
