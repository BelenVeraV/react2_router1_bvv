import cake from '../assets/imgs/cake.png'

export default function HomePage() {
    return (
        <>
            <div className="containerFlex">
                <div>
                    <br />
                    <h1>Bienvenido a <b>Happy Cake</b></h1>
                    <h5>
                        El lugar de los pasteles felices
                    </h5>
                    <img src={cake} alt="cake" />
                </div>
            </div>
        </>
    );
}

