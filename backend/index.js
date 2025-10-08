const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { clear } = require("console");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());


