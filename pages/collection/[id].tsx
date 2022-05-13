/* eslint-disable @next/next/no-img-element */
import BreadCrumb from "../../components/BreadCrumb";
import Layout from "../../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { images } from "../../utils/constants";

const ArtDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout parentClass="search-container">
            <BreadCrumb title={`${id}`} />
            <div className={"collection"} id="collection">
                <div className="collection__content">
                    <div className="collection__image">
                        <img
                            src={images[4]}
                            alt="main"
                            className="image-box__main"
                        />
                        <div className="collection__related-section">
                            <h5 className="heading heading-6 mb-lg mt-lg">
                                Collections with this work
                            </h5>
                            <div className="gallery">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt=""
                                        className={`image-box image-box--${
                                            idx + 1
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="collection__details">
                        <h1 className="heading heading-3 collection__title">
                            Nachtwacht, Arnoldus van Geffen, 1769
                        </h1>
                        <nav className="collection__tabs">
                            <ul className="tabs__list">
                                <li className="tabs__item">
                                    <Link
                                        href="#description"
                                        className="tabs__link"
                                    >
                                        Description
                                    </Link>
                                </li>
                                <li className="tabs__item">
                                    <Link
                                        href="#inscriptions"
                                        className="tabs__link"
                                    >
                                        Inscriptions
                                    </Link>
                                </li>
                                <li className="tabs__item">
                                    <Link
                                        href="#creation"
                                        className="tabs__link"
                                    >
                                        Creation
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="tabs__content">
                            <div className="tabs__content--1" id="description">
                                Officieren en andere schutters van wijk II in
                                Amsterdam onder leiding van kapitein Frans
                                Banninck Cocq en luitenant Willem van
                                Ruytenburch, sinds het einde van de 18de eeuw
                                bekend als ‘De Nachtwacht’. Schutters van de
                                Kloveniersdoelen uit een poort naar buiten
                                tredend. Op een schild aangebracht naast de
                                poort staan de namen van de afgebeelde personen:
                                Frans Banning Cocq, heer van purmerlant en
                                Ilpendam, Capiteijn Willem van Ruijtenburch van
                                Vlaerdingen, heer van Vlaerdingen, Lu[ij]tenant,
                                Jan Visscher Cornelisen Vaendrich, Rombout Kemp
                                Sergeant, Reijnier Engelen Sergeant, Barent
                                Harmansen, Jan Adriaensen Keyser, Elbert
                                Willemsen, Jan Clasen Leydeckers, Jan Ockersen,
                                Jan Pietersen bronchorst, Harman Iacobsen
                                wormskerck, Jacob Dircksen de Roy, Jan vander
                                heede, Walich Schellingwou, Jan brugman, Claes
                                van Cruysbergen, Paulus Schoonhoven. De
                                schutters zijn gewapend met onder anderen
                                pieken, musketten en hellebaarden. Rechts de
                                tamboer met een grote trommel. Tussen de
                                soldaten links staat een meisje met een dode kip
                                om haar middel, rechts een blaffende hond.
                                Linksboven de vaandrig met de uitgeshrefken
                                vaandel.
                            </div>
                            <div className="tabs__content--2" id="inscription">
                                inscription: ‘Frans Banning Cocq, heer van
                                purmerlant en Ilpendam, Capiteijn Willem van
                                Ruijtenburch van Vlaerdingen, heer van
                                Vlaerdingen, Lu[ij]tenant, Jan Visscher
                                Cornelisen Vaendrich, Rombout Kemp Sergeant,
                                Reijnier Engelen Sergeant, Barent Harmansen, Jan
                                Adriaensen Keyser, Elbert Willemsen, Jan Clasen
                                Leydeckers, Jan Ockersen, Jan Pietersen
                                bronchorst, Harman Iacobsen wormskerck, Jacob
                                Dircksen de Roy, Jan vander heede, Walich
                                Schellingwou, Jan brugman, Claes van
                                Cruysbergen, Paulus Schoonhoven’
                            </div>
                            <div className="tabs__content--3" id="creation">
                                <table className="group-data">
                                    <tr className="item">
                                        <td className="item-labal">Artist</td>
                                        <td className="item-data">
                                            Rembrandt van Rijn
                                        </td>
                                    </tr>
                                    <tr className="item">
                                        <td className="item-labal">Place</td>
                                        <td className="item-data">Amsterdam</td>
                                    </tr>
                                    <tr className="item">
                                        <td className="item-labal">Dating</td>
                                        <td className="item-data">1642</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ArtDetails;
