var http = require('http');
var url = require('url');
const host = 'localhost';
const port = 3001;
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.url == "/accueil"){
        res.write("<!DOCTYPE html><html><body><h1>Accueil</h1><p>Bienvenue sur l'accueil !</p></body></html>");
        res.end();
        console.log("sur la page d'accueil");
    }
    if (req.url == "/Logo"){
        res.write('<!DOCTYPE html><html><body><p><img src="https://www.cidj.com/sites/default/files/styles/full_offre/public/2021-10/Epitech-Technology-logo.gif?itok=1zuGzxJz" alt="Photo de plage vue du dessus" /></p></body></html>');        res.end();
        console.log("sur le logo");
    }
    if (req.url == "/profile"){
        res.write("<!DOCTYPE html><html><body><h1>profil</h1><p>Bienvenue sur votre profil</p></body></html>");
        console.log("sur le profil");
    }
}).listen(3001);
console.log("serveur créé");