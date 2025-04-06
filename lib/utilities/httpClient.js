import { settings } from "./settings.js";

export const get = async (endpoint) => {
    const url = `${settings.apiUrl}/${endpoint}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-apikey': settings.apiKey,
                'Content-Type': 'application/json',
            },
        });

        if(response.ok){
            return await response.json();
        }else{
            throw new Error(
                `Ett fel inträffade: ${response.status}, ${response.statusText}`
            );
        }
    } catch (error) {
        console.log('Fel info:', error);
    }
};

export const post = async (endpoint, data) => {
    const url = `${settings.apiUrl}/${endpoint}`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'x-apikey': settings.apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  // endpoint = 'vehicles/1'
  export const put = async (endpoint, data) => {
    const url = `${settings.apiUrl}/${endpoint}`;
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-apikey': settings.apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  export const remove = async (endpoint) => {
    const url = `${settings.apiUrl}/${endpoint}`;
  
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'x-apikey': settings.apiKey,
          'Content-Type': 'application/json',
        }
      });
  
      console.log(response);
  
      if (response.ok) {
        return response.status;
      }
    } catch (error) {
      console.log(error);
    }
  };