class Api {
  constructor(settings) {
    this._settings = settings;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`Ошибка, ${res.statusText}`);
    }
  }

  getInitialCards() {
    return fetch(`${this._settings.baseUrl}/cards`, {
      headers: {
        'Content-Type': 'Application/json',
      },
    }).then(this._checkResponse);
  }
}

const baseUrl = `${window.location.protocol}.${
  process.env.REACT_APP_API_URL || '//localhost:3001'
}`;

export const api = new Api({ baseUrl: 'http://localhost:3001' });
