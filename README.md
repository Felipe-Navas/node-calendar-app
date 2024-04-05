# Node Calendar App

A Node calendar app server for the react-calendar-app

## Description

In this app I use a `express` and `mongo` to serve a react app to handle calendar events.

## Getting Started

### Dependencies

- `npm`
- `node`

### Installing

- Clone the repository and install dependencies:

```
git clone https://github.com/Felipe-Navas/node-calendar-app.git && cd node-calendar-app && npm install
```

- Create a `.env` file in the root of the project and configure the following:
    * Add the content of ".example.env" into your new ".env" file
        * `PORT`: In this variable add the port number where the server will run
        * `DB_CONNECTION`: mongodb+srv://user:password@micluster.asd123.mongodb.net/calendar_app
            * Go to https://cloud.mongodb.com and create an user
            * Create a new cluster
            * Add a new Database User, in the section SECURITY -> Database Access
            * Get the connection string in the section DEPLOYMENT -> Databases, clicking in "Connect"
            * Modify the the password in your connection string
        * `SECRET_JWT_SEED`: In this variable create a complex seed for the token generation

### Executing program

```
npm start
```

Preview of the console:

<img width="350" src="assets/ConsolePreview.png" alt="Preview of the console" />

### Running tests

```
npm test
```

## Authors

- [Felipe Navas](https://www.linkedin.com/in/felipenavaslederhos) - [Email](mailto:felipenavas.itec@gmail.com?subject=[GitHub]%node-calendar-app)

## Contributing

1. Fork it (<https://github.com/Felipe-Navas/node-calendar-app/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

This project is licensed under the [MIT License] - see the LICENSE file for details
