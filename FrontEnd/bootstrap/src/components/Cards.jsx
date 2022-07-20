const Cards = () => {
  return (
    <div className="container mt-3">
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card bg-danger border-danger">
                <img src="../src/assets/img.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card bg-success border-success">
                <img src="../src/assets/img.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card bg-warning border-warning">
                <img src="../src/assets/img.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cards