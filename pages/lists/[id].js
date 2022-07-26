export const getStaticPaths = async () => {
  console.log("get ");
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((lists) => {
    return {
      params: { id: lists.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  console.log(data);

  return {
    props: { lists: data },
  };
};

const Details = ({ lists }) => {
  console.log(lists);
  return (
    <div>
      <h1>{lists.name}</h1>
      <p>{lists.email}</p>
      <p>{lists.website}</p>
      <p>{lists.address.city}</p>
    </div>
  );
};

export default Details;
