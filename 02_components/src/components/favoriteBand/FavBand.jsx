import '../style.css';
import logo from './images/PosterOfBand.jpg'

const FavBand = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>My favorite band</h1>
            </header>
            <div className="C-wraper">
                <div className="C-decription">
                    <img src={logo} alt="" width={300} height={250} />
                    <ul className="C-info" >
                        <li>Foo Fighters</li>
                        <li>Жанр : Альтернативний рок</li>
                        <li>Роки : з 1995 і дотепер</li>
                        <li>Країна : США</li>
                        <li>Місто : Сіетл</li>
                        <li>Мова : 	Англійська</li>
                        <li>Лейбл : Capitol Records</li>
                        <li>Склад : Дейв Грол<br />
                            &emsp; &emsp;&emsp;Кріс Шифлетт<br />
                            &emsp; &emsp;&emsp;Пет Смір<br />
                            &emsp; &emsp;&emsp;Нейт Мендел</li>
                    </ul>
                </div>
                <div className="Reviews">
                    <h2>Reviews</h2>
                    <p>Foo Fighters — американський альтернативний пост-ґранджевий рок-гурт, утворений колишнім ударником рок-гурту Nirvana Дейвом Ґролом 1994 року. Назва запозичена зі сленгу американських льотчиків другої світової війни, які називали словом «foo» непізнані літаючі об'єкти і дивні атмосферні феномени, що спостерігалися в небі над Європою і Тихим океаном.</p>

                </div>


            </div>
        </div>
    );
}

export default FavBand;
