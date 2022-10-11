class Auth {
  constructor(settings) {
    this._settings = settings;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json;
    } else {
      throw new Error(`Ошибка, ${res.status.Text}`);
    }
  }

  getusers() {
    return fetch(`${this._settings}/cards`, {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json',
      },
    }).then(this._checkResponse);
  }
}

const baseUrl = `${window.location.protocol}.${
  process.env.REACT_APP_API_URL || '//localhost:3001'
}`;

export const auth = new Auth({ baseUrl: baseUrl });
