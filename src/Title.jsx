// eslint-disable-next-line react/prop-types
export default function Title({ locked }) {
  return <h1 className="title">{locked ? "Limit Reached" : "Counter App"}</h1>;
}
