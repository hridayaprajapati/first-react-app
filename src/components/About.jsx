export default function About({ tag, title, arr }) {
  console.log(arr);
  return (
    <>
      <h3 className="header">{title}</h3>
      <div className="detail">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat
        autem odit asperiores quisquam eveniet, pariatur earum id quos
        voluptatem aut ducimus ratione illum quae repellendus voluptas. Quod,
        error assumenda.
      </div>
      <button className="btn btn-success">Read More {tag}</button>
    </>
  );
}
