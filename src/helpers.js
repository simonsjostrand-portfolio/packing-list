export const getJSON = async function (query, url, id) {
  try {
    const res = await fetch(`${url}?query=${query}&client_id=${id}`, {
      headers: {
        'Accept-Version': 'v1',
      },
    });

    const data = await res.json();
    return data.results[0];
  } catch (err) {
    throw err;
  }
};

export const capatalize = name =>
  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

export const resetInputs = (form, inputItem) => {
  form.reset();
  inputItem.focus();
};
