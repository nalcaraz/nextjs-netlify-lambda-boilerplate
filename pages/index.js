import React, { useEffect, useState } from 'react';

const Index = () => {
    const [welcome, setWelcome] = useState();
    useEffect(() => {
        fetch(`/.netlify/functions/welcome`)
            .then(function(response) {
                if (!response.ok) return Promise.reject(response);
                return response.json();
            })
            .then(resp => {
                setWelcome(resp);
            })
            .catch(function(error) {
                console.log('welcome error: ', error);
            });

        fetch(`/.netlify/functions/third-party`)
            .then(function(response) {
                console.log('third party api response', response);
                if (!response.ok) return Promise.reject(response);
                return response.json();
            })
            .then(data => {
                console.log('third party api data', data);
            })
            .catch(function(error) {
                console.log('third party api error: ', error);
            });
    }, []);

    return (
        <div>
            {welcome && (
                <div>
                    <h2>{welcome.title}</h2>
                    <p>{welcome.description}</p>
                </div>
            )}
        </div>
    );
};

export default Index;
