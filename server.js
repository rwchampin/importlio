const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const { spawn } = require('child_process');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
    key: fs.readFileSync('./certs/127.0.0.1-key.pem'),
    cert: fs.readFileSync('./certs/127.0.0.1.pem')
};

const startServer = () => {
    app.prepare().then(() => {
        createServer(httpsOptions, async (req, res) => {
            const parsedUrl = parse(req.url, true);
            await handle(req, res, parsedUrl);
        }).listen(port, (err) => {
            if (err) {
                console.error(err);
                console.error('Error occurred. Restarting the server...');
                spawn('pm2', ['restart', 'app']); // Restart the app using pm2
                return;
            }
            console.log('ready - started server on url: https://localhost:' + port);
        });
    });
};

startServer();
