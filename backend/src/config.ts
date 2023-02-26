const _express = require("express");
const _router = _express.Router();

const _fs = require("fs");
const _app = _express();
const _port = process.env.PORT || 8000;

const _bodyParser = require('body-parser');
const _cors = require("cors");

const { Client } = require("iexjs");
let _iexNewsclient = new Client({api_token: "APITOKEN", version: "v1"});

module.exports = {
    express: _express,
    expressportfolio: _express,
    port: _port,
    app: _app,
    iexNewsclient: _iexNewsclient,
    iexPriceclient: _iexNewsclient,
    fs: _fs,
    router: _router,
    bodyparser: _bodyParser,
    cors: _cors
}