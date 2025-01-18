import '../style.css';



const FavPet = ({ logo }) => {


    return (
        <div className="App">

            <header className="App-header">
                <h1>My favorite pet</h1>
            </header>
            <div className="C-wraper">
                <div className="C-decription">
                    <img src={logo} alt="" width={350} height={300} />
                    <ul className="C-info" >
                        <li>Cat</li>
                        <li>Domain : Eukaryota </li>
                        <li>Kingdom : Animalia</li>
                        <li>Phylum : Chordata</li>
                        <li>Class : Mammalia</li>
                        <li>Order : Carnivora</li>
                        <li>Suborder : 	Feliformia</li>
                        <li>Family : Felidae</li>
                        <li>Subfamily : Felinae</li>
                        <li>Genus : Felis</li>
                        <li>Species : F. catus</li>
                    </ul>
                </div>
                <div className="Reviews">
                    <h2>Cat</h2>
                    <p>The cat (Felis catus), also referred to as the domestic cat,
                        is a small domesticated carnivorous mammal. It is the only
                        domesticated species of the family Felidae. Advances in archaeology
                        and genetics have shown that the domestication of the cat occurred
                        in the Near East around 7500 BC. It is commonly kept as a pet and farm
                        cat, but also ranges freely as a feral cat avoiding human contact. It
                        is valued by humans for companionship and its ability to kill vermin.
                        Its retractable claws are adapted to killing small prey species such
                        as mice and rats. It has a strong, flexible body, quick reflexes,
                        and sharp teeth, and its night vision and sense of smell are well
                        developed. It is a social species, but a solitary hunter and a
                        crepuscular predator. Cat communication includes vocalizations—including
                        meowing, purring, trilling, hissing, growling, and grunting—as well
                        as body language. It can hear sounds too faint or too high in frequency
                        for human ears, such as those made by small mammals. It secretes and
                        perceives <br /><br />

                        Female domestic cats can have kittens from spring to late autumn
                        in temperate zones and throughout the year in equatorial regions,
                        with litter sizes often ranging from two to five kittens. Domestic
                        cats are bred and shown at events as registered pedigreed cats,
                        a hobby known as cat fancy. Animal population control of cats
                        may be achieved by spaying and neutering, but their proliferation
                        and the abandonment of pets has resulted in large numbers of
                        feral cats worldwide, contributing to the extinction of bird,
                        mammal, and reptile species.<br /><br />

                        As of 2017, the domestic cat was the second most popular pet in the
                        United States, with 95.6 million cats owned and around 42 million
                        households owning at least one cat. In the United Kingdom, 26% of
                        adults have a cat, with an estimated population of 10.9 million
                        pet cats as of 2020. As of 2021, there were an estimated 220
                        million owned and 480 million stray cats in the world.</p>

                </div>


            </div>
        </div>
    );
}

export default FavPet;
