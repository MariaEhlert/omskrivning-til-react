import styles from './Main.module.scss'

export const Main = (props) => {
    return (
        <main>
            <section className={styles.worldGoals}>
                <article className={styles.articleMain1}>
                    <h3>DE 17 VERDENSMÅL</h3>
                    <p>På FN topmødet i New York i 2015 vedtog verdens stats- og regeringsledere en hidtil uset ambitiøs og
                        samfundsforandrende udviklingsdagsorden, også kaldt 2030 dagsordenen.</p>
                    <p>Frem til 2030 skal denne dagsorden sætte kurs mod en mere bæredygtig udvikling for både mennesker og
                        planeten, vi bor på.</p>
                </article>
                <article className={styles.articleMain2}>
                    <div>
                        <h4>Verdensmålene forpligter.</h4>
                        <p>Medlemslandende forpligter sig til helt at afskaffe fattigdom og sult i verden, sikre god
                            uddannelse og sundhed til alle, reducere ulighed, fremme ligestilling, anstændige jobs,
                            bæredygtig vækst og forbrug.</p>
                        <p>Den nye dagsorden anerkender således at social, økonomisk og miljømæssig udvikling, fred,
                            sikkerhed og internationalt samarbejde er tæt forbundet, og at det kræver en integreret indsats
                            at opnå holdbare udviklingsresultater.</p>
                    </div>
                    <div>
                        <h4>Verdensmålene gælder alle.</h4>
                        <p>Målene gælder alle lande - både rige og fattige - dvs. de er universelle.</p>
                        <p>Udfordringer som social, økonomisk marginalisering, stigende ulighed, fødevareusikkerhed, ulig
                            adgang til grundlæggende naturressourcer,og har regionale og globale konsekvenser.</p>
                        <p>Det er derfor afgørende at alle lande leverer og løfter opgaven i fællesskab.</p>
                    </div>
                </article>
            </section> 
            <section className={styles.subGoals}>
                <article>
                    <h3>DELMÅLENE</h3>
                    <a className={styles.top} href="#">Tilbage til top</a>
                    <p>FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete mål for, hvordan Verdensmålene
                        skal opfyldes. For at måle på hvert delmål har FN formuleret en række indikatorer for de enkelte
                        delmål.</p>
                    <h5>Se eksempler på enkelte delmål her:</h5>
                </article>
                <article className={styles.galleryMain}>
                        {props && props.imgList && props.imgList.map((item, key) => {
                            return (
                                <img key={key} src={item.image}></img>
                            )
                        })}
                </article>
            </section>
            <section className={styles.challenges}>
            <h3>UDFORDRINGER</h3>
            <a className={styles.top} href="#">Tilbage til top</a>
            <p>Der er en lang række faktorer der har indvirkning på opfyldelsen af de mål, man gennem aftaler har
                forpligtiget sig til.</p>
            <h4>Vækst vs. bæredygtighed.</h4>
            <figure>
                <figcaption>
                    <p>En overordnet udfordring er, at der mangler et mere nuanceret syn på sammenhængen mellem vækst og
                        bæredygtighed. Vægtning mellem økonomisk vækst og påvirkninger af miljø og samfund.</p>
                    <p>Opretholdes den nuværende globale, materielle vækst, øges presset på jordens ressourcer.</p>
                    <p>De livsunderstøttende økosystemer bliver i stigende grad overbelastet, og uligheden i verden vil
                        blive større.</p>
                </figcaption>
                <img src={require ('../../../Assets/images/Image-Sustainability.jpg')} alt="figure-img1" />
            </figure>
            <h4>Leave no-one behind.</h4>
            <figure>
                <figcaption>
                    <p>I 2030-dagsordenen er inkluderet princippet om ”leave no one behind”. Princippet tilsiger, at
                        alle lande skal opnå alle verdensmål, uden at nogen lades i stikken.</p>
                    <p>Arbejdet med verdensmålene skal begynde med, at de fattigste og mest marginaliserede adresseres
                        først.</p>
                    <p>Dette er et vigtigt princip, hvortil også efterlevelsen af og respekten for menneskerettigheder
                        er altafgørende.</p>
                    <p>Med ander ord: “Leave On-One behind”.</p>
                </figcaption>
                <img src={require ('../../../Assets/images/Image-Leave-No-One.jpg')} alt="figure-img2" />
            </figure>
            <h4>Fattigdom og sult.</h4>
            <figure>
                <figcaption>
                    <p>Det første af FN’s verdensmål handler om at afskaffe verdens fattigdom inden 2030.</p>
                    <p>Det handler især om at give muligheder for mennesker i verdens fattigste lande. Verdensbanken
                        definerer ”ekstrem fattigdom” som en personlig indkomst på under 1,9 dollars om dagen – dvs.
                        cirka 13 kroner.</p>
                    <p>En stor udfordring, men vi er allerede godt på vej.</p>
                </figcaption>
                <img src={require ('../../../Assets/images/Image-Hunger.jpg')} alt="figure-img3" />
            </figure>
        </section>
        </main>
    )
}