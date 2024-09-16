export function Post({ titulo, link, description, parrafo }) {
  return (
    <>
      <h2>{titulo}</h2>
      <img src={link} alt={description} />
      <p>{parrafo}</p>
    </>
  );
}
