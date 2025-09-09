import "../css/titulo.css";

export default function Titulo({ titulo, subtitulo, quiereMolestar }) {
  return (
    <div className="contenedorTitulo">
      <p>{titulo}</p>
      <small>{subtitulo}</small>
      {!quiereMolestar ? (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
          molestiae voluptas quod praesentium esse dolorem quia. Amet nulla
          incidunt ea? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Vero consequatur eligendi neque quidem odio incidunt ullam similique
          dolores perspiciatis voluptas est obcaecati assumenda corrupti,
          distinctio cupiditate, alias ducimus sequi quis quo! Voluptates nihil
          voluptate laudantium reiciendis quaerat fugiat rem eveniet.
        </p>
      ) : (
        <p>NO</p>
      )}
    </div>
  );
}
