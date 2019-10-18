exports.handler = async (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            title: 'Welcome!',
            description: `This is a boilerplate for using Next.js with netlify-lambda`,
        }),
    };

    return response;
};
