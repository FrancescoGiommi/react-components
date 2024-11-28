/* Main export */
export default function Main() {
  return (
    <>
      <main>
        <div className="container text-center">
          <div className="card">
            <div className="img-fluid" style={{ width: "100%" }}>
              <img src="public/img.png" alt="image" />
            </div>
            <div className="card-body">
              <h2 className="card-title">Titolo del post</h2>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, dolor animi. Corporis illo asperiores mollitia, qui
                tempora earum esse aspernatur dolorem quod id, numquam, quaerat
                cum cupiditate fugit possimus expedita.
              </p>
              <div>
                <button>Leggi di più</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
