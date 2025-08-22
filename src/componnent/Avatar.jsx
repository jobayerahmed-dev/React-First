export default function Avater(props) {
  const { parsion, size } = props;
  return (
    <div>
      <div>
        <h1>{parsion.name}</h1>
        <p>{parsion.imageId}</p>
      </div>
    </div>
  );
}
