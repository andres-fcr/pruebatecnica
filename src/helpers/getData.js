const url = "https://recipe-rissoto.vercel.app/recipe/"


const getData = async () => {
  const resp = await fetch(url);
  const data = resp.json();
  return data;
};

export default getData;