const fetch = require('node-fetch').default;
const dotenv = require('dotenv');
dotenv.config();

exports.handler = function(event, context, callback) {
    const token = process.env.PLANT_TOKEN;
    const url = `https://trefle.io/api/plants?token=${token}`;

    return fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => ({
            statusCode: 200,
            body: JSON.stringify(data),
        }))
        .catch(err => {
            return { statusCode: 422, body: String(err) };
        });
};
