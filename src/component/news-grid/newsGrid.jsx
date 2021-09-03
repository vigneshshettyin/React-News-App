import "./style.css";

const NewsGrid = (props) => {
  const getAvatar = (name) => {
    return `https://ui-avatars.com/api/?background=random&rounded=true&size=128&name=${name}`;
  };

  const convertDate = (date) => {
    var d = new Date(parseFloat(date));
    return d.toDateString();
  };

  return (
    <>
      <div class="col-md-12 blog-card shadow m-3">
        <div class="card flex-md-row mb-4 box-shadow h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
            <div className="flex">
              <img
                className="d-inline-block mb-2 userImage"
                src={getAvatar(props.author)}
                draggable="false"
                rel="noreferrer"
                alt={props.author}
              />
              <h5
                className="authorName text-muted pt-2"
                style={{ marginLeft: "10px" }}
              >
                {props.author}
              </h5>
            </div>
            <h3 class="mb-0 title text-dark">{props.title}</h3>
            <div class="text-date mb-1 text-muted">
              {convertDate(Date.parse(props.date).toString())}
            </div>
            <p
              style={{ textAlign: "left" }}
              class="card-para card-text mb-auto justify-content-lg-start"
            >
              {props.desc}
            </p>
            <a
              className="btn btn-primary mt-3"
              target="_blank"
              rel="noreferrer"
              href={props.url}
            >
              Read more ...
            </a>
          </div>
          <img
            class="card-img-right flex-auto d-none d-md-block blog-card-img"
            alt={props.author}
            draggable="false"
            rel="noreferrer"
            src={props.img ? props.img : `https://via.placeholder.com/500`}
          />
        </div>
      </div>
    </>
  );
};

export default NewsGrid;
