const base = 'http://127.0.0.1:3000';
const shop = `${base}/shop`;
const cart = `${base}/cart`;

export const getGoods = async (page, limit = 4) => {
  const res = await fetch(`${shop}?_page=${page}&_limit=${limit}`);

  return {
    items: await res.json(),
    count: res.headers.get('X-Total-Count'),
  };
}

export const getGood = async (id) => {
  const res = (await fetch(`${cart}}/?id=${id}`)).json();
  return res;
};

export const deleteGood = async (id) => (await fetch(`${cart}/${id}`, 
  { method: 'DELETE' })).json();

export const updateGood = async (id, body ) => (await fetch(`${cart}/${id}`, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
})).json();

