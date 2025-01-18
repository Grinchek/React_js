import '../style.css';


const FavMovie = (logo) => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>My favorite movie</h1>
            </header>
            <div className="C-wraper">
                <div className="C-decription">
                    <img src={logo} alt="" width={250} height={300} />
                    <ul className="C-info" >
                        <li>Titanic</li>
                        <li>Genre : Epic romantic disaster film </li>
                        <li>Relalise : November 1, 1997</li>
                        <li>Directed by : James Cameron</li>
                        <li>Distributed by : Paramount Pictures</li>
                        <li>Country : 	United States</li>
                        <li>Running time : 	195 minutes</li>
                        <li>Language : English</li>
                    </ul>
                </div>
                <div className="Reviews">
                    <h2>Reviews</h2>
                    <p>Titanic is a 1997 American epic romantic disaster film directed, written,
                        co-produced and co-edited by James Cameron. Incorporating both historical and
                        fictionalized aspects, it is based on accounts of the sinking of RMS Titanic
                        in 1912. Leonardo DiCaprio and Kate Winslet star as members of different
                        social classes who fall in love during the ship's maiden voyage. The film
                        also features an ensemble cast of Billy Zane, Kathy Bates, Frances Fisher,
                        Bernard Hill, Jonathan Hyde, Danny Nucci, David Warner and Bill Paxton.<br /><br />
                        Cameron's inspiration for the film came from his fascination with
                        shipwrecks. He felt a love story interspersed with human loss would be
                        essential to convey the emotional impact of the disaster. Production
                        began on September 1, 1995,[8] when Cameron shot footage of the
                        Titanic wreck. The modern scenes on the research vessel were shot on
                        board the Akademik Mstislav Keldysh, which Cameron had used as a base
                        when filming the wreck. Scale models, computer-generated imagery, and a
                        reconstruction of the Titanic built at Baja Studios were used to recreate
                        the sinking. The film was initially in development at 20th Century Fox,
                        but a mounting budget and being behind schedule resulted in Fox asking
                        Paramount Pictures for financial help; Paramount handled distribution in
                        the United States and Canada, while Fox released the film internationally.
                        Titanic was the most expensive film ever made at the time, with a
                        production budget of $200 million. Filming took place from July 1996
                        to March 1997.<br /><br />

                        Titanic was released on December 19, 1997. It was praised for its visual
                        effects, performances (particularly those of DiCaprio, Winslet, and Gloria
                        Stuart), production values, direction, score, cinematography, story, and
                        emotional depth. Among other awards, it was nominated for 14 Academy Awards
                        and won a record-tying 11, including Best Picture and Best Director,
                        tying Ben-Hur (1959) for the most Academy Awards won by a film. With an
                        initial worldwide gross of over $1.84 billion, Titanic was the first film
                        to reach the billion-dollar mark. It was the highest-grossing film of all
                        time until Cameron's next film, Avatar (2009), surpassed it in 2010. Income
                        from the initial theatrical release, retail video, and soundtrack sales and
                        US broadcast rights exceeded $3.2 billion.[9] A number of re-releases have
                        pushed the film's worldwide theatrical total to $2.264 billion, making it
                        the second film to gross more than $2 billion worldwide after Avatar.
                        In 2017, the Library of Congress selected it for preservation in the
                        United States National Film Registry for being "culturally, historically,
                        or aesthetically significant".</p>

                </div>


            </div>
        </div>
    );
}

export default FavMovie;
