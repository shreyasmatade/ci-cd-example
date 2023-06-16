const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
app.use(bodyParser.json());

// Business logic: In-memory list of customers
let customers = [];

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Developer name"
      },
      servers: ["http://localhost:5000"]
    }
  },
  apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /customers:
 *   get:
 *     description: Get all customers
 *     responses:
 *       200:
 *         description: Success
 */
app.get('/customers', (req, res) => {
  res.status(200).send(customers);
});

/**
 * @swagger
 * /customer:
 *  post:
 *    description: Add a customer
 *    parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      schema:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *    responses:
 *      201:
 *        description: Created
 */
app.post('/customer', (req, res) => {
  const { name } = req.body;
  customers.push({ name });
  res.status(201).send();
});

module.exports = app;
