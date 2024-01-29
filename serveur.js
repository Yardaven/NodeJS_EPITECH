const http = require("http")
const url = require("url")

const req_listener = (req, res) => {
    if(req.url == '/accueil'){
        console.log("Vous êtes à l'accueil");
        res.write(
        '<!DOCTYPE html>\
        <meta charset = "UTF-8">\
        <html>\
            <head>\
                <title>Accueil</title>\
                <h1>Bienvenue sur l\'accueil</h1>\
            </head>\
        </html>');
    }
    if(req.url == '/profile'){
        console.log("Vous êtes au logo");
        res.write(
            '<!DOCTYPE html>\
            <meta charset = "UTF-8">\
            <html>\
                <head>\
                    <title>Porfil</title>\
                    <h1>Bienvenue sur votre profil</h1>\
                </head>\
            </html>');
    }
    if(req.url == '/Logo'){
        console.log("Vous êtes sur votre profile");
        res.write(
            '<!DOCTYPE html>\
            <meta charset = "UTF-8">\
            <html>\
                <head>\
                    <title>IMG</title>\
                    <img src = "https://newsroom.ionis-group.com/wp-content/uploads/2023/09/EPI-LOGO-ACCROCHE-2023-QUADRI.png">\
                </head>\
            </html>');
    }
    res.end('serveur créé');
}

const server = http.createServer(req_listener);

server.listen(3001);