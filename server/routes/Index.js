import express from 'express'
import Application from '../controllers/Application'

const Index = express.Router();
const controller = new Application()

Index.get('*', (req, res) => controller.handleRoot(req, res));

export default Index;