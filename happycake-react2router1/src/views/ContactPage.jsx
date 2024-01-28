export default function ContactPage() {

    return (

        <>
            <form>
                <br />
                <div className="containerFlex">
                    <h1>Cuentanos, ¿En qué te podemos ayudar?</h1>
                    <br />
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Correo:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="name@example.com" aria-describedby="emailHelp"></input>
                    </div>
                    <br />
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Descripción:</label>
                        <input type="text" class="form-control" id="exampleInputDescripcion1"></input>
                    </div>
                    <button type="submit" class="btn btn-danger">Enviar</button>
                </div>
            </form>

        </>
    )
}

