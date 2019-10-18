import React, { useEffect, useState } from 'react';

const Index = () => {
    const [welcome, setWelcome] = useState();
    useEffect(() => {
        fetch(`/.netlify/functions/welcome`)
            .then(function(response) {
                console.log('response', response);
                if (!response.ok) return Promise.reject(response);
                return response.json();
            })
            .then(resp => {
                console.log('resp.data', resp);
                setWelcome(resp);
            })
            .catch(function(error) {
                console.log('ERROR: ', error);
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
