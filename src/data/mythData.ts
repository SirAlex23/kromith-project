//export interface MythEntry {
//  name: string;
//  description: string;
//  // 🛑 NUEVOS CAMPOS AÑADIDOS 🛑
//  fullHistory: string;
//  largeImageUrl: string;
//}
//
//export interface MythologyGlosaryData {
//  [key: string]: MythEntry[];
//}
//
//// ---------------------------------------------------
//// DATOS DEL GLOSARIO GRIEGO (23 Entradas)
//// ---------------------------------------------------
//
//export const greekGlosary: MythologyGlosaryData = {
//  A: [
//    {
//      name: "Apolo",
//      description:
//        "Dios olímpico de la música, la poesía, el tiro con arco, la luz y la profecía.",
//      fullHistory:
//        "Apolo, hijo de Zeus y Leto, es uno de los dioses más venerados del Olimpo. Es conocido por su habilidad con la lira y su capacidad para predecir el futuro a través del Oráculo de Delfos. También representa la armonía, la luz solar y el orden.",
//      largeImageUrl: "/assets/greek/apolo.jpg",
//    },
//    {
//      name: "Atenea",
//      description:
//        "Diosa de la sabiduría, la guerra estratégica y la artesanía. Nació de la cabeza de Zeus.",
//      fullHistory:
//        "Atenea es la diosa protectora de Atenas, destacada por su mente estratégica sobre la violencia bruta (a diferencia de Ares). Nació completamente formada y armada de la cabeza de Zeus. Es patrona de los héroes, la justicia y las artes civilizadas.",
//      largeImageUrl: "/assets/greek/atenea.jpg",
//    },
//    {
//      name: "Ares",
//      description:
//        "Dios olímpico de la guerra bruta, la violencia y el derramamiento de sangre. Hijo de Zeus y Hera.",
//      fullHistory:
//        "Ares encarna el aspecto físico y brutal de la guerra, el derramamiento de sangre y la violencia. Era impopular tanto entre los dioses como entre los humanos, ya que prefería la matanza sin sentido sobre la estrategia militar.",
//      largeImageUrl: "/assets/greek/ares.jpg",
//    },
//    {
//      name: "Afrodita",
//      description:
//        "Diosa de la belleza, el deseo, el amor sexual y la fertilidad.",
//      fullHistory:
//        "Afrodita es la diosa del amor, la belleza y el deseo. Según la versión más famosa, nació de la espuma del mar (Afros). Estaba casada con Hefesto, el herrero divino, pero era famosa por sus numerosos romances.",
//      largeImageUrl: "/assets/greek/afrodita.jpg",
//    },
//  ],
//  C: [
//    {
//      name: "Cronos",
//      description:
//        "El líder de los Titanes y padre de los dioses olímpicos. Devoró a sus hijos por miedo a ser derrocado.",
//      fullHistory:
//        "Cronos fue el hijo más joven de Urano (Cielo) y Gea (Tierra). Tras castrar a su padre, gobernó durante la Edad de Oro. Por miedo a la profecía, devoró a sus propios hijos al nacer, hasta que Zeus lo derrocó.",
//      largeImageUrl: "/assets/greek/cronos.jpg",
//    },
//    {
//      name: "Centauro",
//      description:
//        "Criatura con la cabeza y el torso de un humano y el cuerpo y las patas de un caballo.",
//      fullHistory:
//        "Los centauros habitaban los bosques de Tesalia. Eran generalmente figuras salvajes y lujuriosas, aunque el centauro Quirón era conocido por su sabiduría y habilidades curativas, siendo tutor de muchos héroes.",
//      largeImageUrl: "/assets/greek/centauro.jpg",
//    },
//  ],
//  D: [
//    {
//      name: "Dionisio",
//      description:
//        "Dios del vino, la locura ritual, la fertilidad y el teatro. El último dios en unirse al Olimpo.",
//      fullHistory:
//        "Dionisio es el único dios olímpico nacido de una mortal (Sémele). Representa tanto el éxtasis desenfrenado de la fiesta como el poder civilizador del vino. Sus ritos a menudo implicaban el trance y la locura.",
//      largeImageUrl: "/assets/greek/dionisio.jpg",
//    },
//  ],
//  E: [
//    {
//      name: "Eros",
//      description:
//        "Dios primordial del amor y el deseo. Frecuentemente representado como un joven con arco y flechas.",
//      fullHistory:
//        "En la tradición más antigua, Eros era una fuerza primordial. Más tarde fue conocido como el hijo de Afrodita y Ares, y su papel principal era incitar el deseo sexual y el amor, a menudo a través de sus flechas doradas.",
//      largeImageUrl: "/assets/greek/eros.jpg",
//    },
//  ],
//  G: [
//    {
//      name: "Hera",
//      description:
//        "Diosa olímpica del matrimonio, las mujeres y el parto. Reina de los dioses y esposa de Zeus.",
//      fullHistory:
//        "Hera es la hermana y esposa de Zeus y la protectora del matrimonio. Es famosa por sus celos y la ira vengativa que dirigía contra las amantes de Zeus y sus hijos ilegítimos, como Heracles.",
//      largeImageUrl: "/assets/greek/hera.jpg",
//    },
//  ],
//  H: [
//    {
//      name: "Hades",
//      description:
//        "Dios del inframundo y de las riquezas subterráneas. Es hermano de Zeus y Poseidón.",
//      fullHistory:
//        "Hades gobierna el reino de los muertos, un lugar que lleva su nombre. Aunque temido, no era considerado malvado, sino simplemente el sombrío guardián de los límites finales. Raptó a Perséfone para hacerla su reina.",
//      largeImageUrl: "/assets/greek/hades.jpg",
//    },
//    {
//      name: "Hércules",
//      description:
//        "El más grande de los héroes griegos, famoso por su fuerza y sus doce trabajos.",
//      fullHistory:
//        "Hércules, o Heracles, era hijo de Zeus y la mortal Alcmena. Famoso por su fuerza sobrehumana y su temperamento, fue obligado a realizar doce trabajos como penitencia, logrando hazañas que ningún otro mortal podía realizar.",
//      largeImageUrl: "/assets/greek/hercules.jpg",
//    },
//    {
//      name: "Hefesto",
//      description:
//        "Dios del fuego, los herreros, la metalurgia y los volcanes. Esposo de Afrodita.",
//      fullHistory:
//        "Hefesto era el único dios olímpico con una discapacidad física, y era un maestro artesano. Creó armas y armaduras mágicas para los dioses (como el tridente de Poseidón y los rayos de Zeus) en su fragua volcánica.",
//      largeImageUrl: "/assets/greek/hefesto.jpg",
//    },
//  ],
//  K: [
//    {
//      name: "Kraken",
//      description:
//        "Aunque asociado a leyendas posteriores, se asemeja a las bestias marinas como Escila o Caribdis en el folclore griego.",
//      fullHistory:
//        "El Kraken es una criatura de la mitología nórdica, pero en la mitología griega, las bestias marinas como el Cetus (monstruo marino) o las serpientes de mar representaban amenazas similares en el vasto y temido dominio de Poseidón.",
//      largeImageUrl: "/assets/greek/kraken_similar.jpg",
//    },
//  ],
//  M: [
//    {
//      name: "Medusa",
//      description:
//        "Monstruo femenino, una de las tres Gorgonas. Tenía serpientes venenosas en lugar de cabello y convertía a la gente en piedra.",
//      fullHistory:
//        "Medusa fue originalmente una hermosa doncella que fue castigada por Atenea (o Poseidón) y convertida en un monstruo. Fue decapitada por el héroe Perseo, quien usó su cabeza como arma antes de regalársela a Atenea.",
//      largeImageUrl: "/assets/greek/medusa.jpg",
//    },
//    {
//      name: "Minotauro",
//      description:
//        "Criatura mítica con cuerpo de hombre y cabeza de toro. Habitaba el Laberinto de Creta.",
//      fullHistory:
//        "El Minotauro fue el hijo de Pasífae (esposa del rey Minos) y un toro blanco. Era una bestia feroz que se alimentaba de carne humana y estaba encerrado en un complejo Laberinto diseñado por Dédalo, hasta que fue asesinado por el héroe Teseo.",
//      largeImageUrl: "/assets/greek/minotauro.jpg",
//    },
//  ],
//  N: [
//    {
//      name: "Narciso",
//      description:
//        "Joven de gran belleza que se enamoró de su propio reflejo en el agua.",
//      fullHistory:
//        "Narciso fue maldecido a enamorarse de sí mismo. Incapaz de apartarse de su reflejo, se consumió hasta morir, y en su lugar creció una flor que lleva su nombre. Su historia advierte contra la vanidad y la falta de empatía.",
//      largeImageUrl: "/assets/greek/narciso.jpg",
//    },
//  ],
//  P: [
//    {
//      name: "Poseidón",
//      description:
//        "Dios olímpico de los mares, los terremotos, las tormentas y los caballos. Hermano de Zeus.",
//      fullHistory:
//        "Poseidón es el segundo en poder después de Zeus. Gobierna el mar con su tridente. Es conocido por su temperamento volátil, que se manifiesta en violentas tormentas y terremotos. Su ira fue una parte central de la Odisea de Homero.",
//      largeImageUrl: "/assets/greek/poseidon.jpg",
//    },
//    {
//      name: "Perseo",
//      description:
//        "Héroe que decapitó a Medusa y rescató a Andrómeda de un monstruo marino.",
//      fullHistory:
//        "Perseo fue el primer héroe conocido por la mitología griega, hijo de Zeus y Dánae. Sus hazañas más famosas son la decapitación de Medusa y la fundación de la ciudad de Micenas, después de rescatar a su futura esposa Andrómeda.",
//      largeImageUrl: "/assets/greek/perseo.jpg",
//    },
//  ],
//  S: [
//    {
//      name: "Sátiro",
//      description:
//        "Criaturas masculinas de la naturaleza, con cuernos, patas de cabra y una fuerte libido. Seguidores de Dionisio.",
//      fullHistory:
//        "Los Sátiros eran espíritus de la naturaleza conocidos por su amor al vino, la música, el baile y las mujeres. A menudo se les asocia con el dios Dionisio, personificando el lado salvaje e indomable de la naturaleza.",
//      largeImageUrl: "/assets/greek/satiro.jpg",
//    },
//    {
//      name: "Sirenas",
//      description:
//        "Criaturas peligrosas que atraían a los marineros a la destrucción con su canto hipnótico.",
//      fullHistory:
//        "Las sirenas habitaban cerca de las islas rocosas. Su canto era tan irresistible que hacía que los marineros encallaran sus barcos. Ulises fue el único que logró escucharlas y sobrevivir, atándose al mástil de su barco.",
//      largeImageUrl: "/assets/greek/sirenas.jpg",
//    },
//  ],
//  T: [
//    {
//      name: "Teseo",
//      description: "Héroe ateniense que derrotó al Minotauro en el Laberinto.",
//      fullHistory:
//        "Teseo es el héroe nacional de Atenas. Su hazaña más memorable fue viajar a Creta, obtener la ayuda de Ariadna y matar al Minotauro dentro del Laberinto. También se le atribuye la unificación de la región de Ática bajo Atenas.",
//      largeImageUrl: "/assets/greek/teseo.jpg",
//    },
//    {
//      name: "Titanes",
//      description:
//        "Antigua raza de poderosos dioses que gobernaron durante la legendaria Edad de Oro.",
//      fullHistory:
//        "Los Titanes fueron la generación de deidades divinas que precedió a los Dioses Olímpicos. Gobernaban bajo Cronos hasta que fueron derrocados por Zeus y sus hermanos en la Titanomaquia, una gran guerra cósmica.",
//      largeImageUrl: "/assets/greek/titanes.jpg",
//    },
//  ],
//  Z: [
//    {
//      name: "Zeus",
//      description:
//        "Rey de los dioses olímpicos y dios del cielo, el rayo, el trueno, la ley, el orden y la justicia.",
//      fullHistory:
//        "Zeus es el gobernante supremo del Monte Olimpo, famoso por su fuerza, su dominio sobre el rayo y su tendencia a tener aventuras amorosas. Lideró a sus hermanos en la guerra contra los Titanes para asegurar el dominio olímpico.",
//      largeImageUrl: "/assets/greek/zeus.jpg",
//    },
//  ],
//};
//
//// ---------------------------------------------------
//// DATOS DEL GLOSARIO NÓRDICO (17 Entradas)
//// ---------------------------------------------------
//
//export const norseGlosary: MythologyGlosaryData = {
//  A: [
//    {
//      name: "Asgard",
//      description:
//        "El reino de los dioses Æsir, gobernado por Odín. Es el cielo nórdico, unido a Midgard por el Bifrost.",
//      fullHistory:
//        "Asgard es uno de los Nueve Mundos, hogar de la tribu de dioses conocida como los Æsir. Dentro de Asgard se encuentra el Valhalla, la gran sala de Odín, y el reino está protegido por Heimdall en el puente Bifrost.",
//      largeImageUrl: "/assets/norse/asgard.jpg",
//    },
//  ],
//  B: [
//    {
//      name: "Bifrost",
//      description:
//        "El puente del arco iris que conecta Midgard (la Tierra) con Asgard (el reino de los dioses).",
//      fullHistory:
//        "El Bifrost es un puente ardiente, custodiado por el dios Heimdall. Se dice que solo se puede cruzar a caballo, y será destruido durante el Ragnarök cuando las fuerzas de Jötunheimr lo atraviesen.",
//      largeImageUrl: "/assets/norse/bifrost.jpg",
//    },
//  ],
//  F: [
//    {
//      name: "Fenrir",
//      description:
//        "Un lobo monstruoso, hijo de Loki, destinado a matar a Odín durante el Ragnarök.",
//      fullHistory:
//        "Fenrir fue encadenado por los Æsir por miedo a su inmenso poder. Solo el dios Tyr fue lo suficientemente valiente como para colocar su mano en la boca de Fenrir como garantía de buena fe. En el Ragnarök, Fenrir escapará para cumplir su destino.",
//      largeImageUrl: "/assets/norse/fenrir.jpg",
//    },
//    {
//      name: "Freyr", // 🛑 AÑADIDO 🛑
//      description:
//        "Dios de la fertilidad, el sol, la lluvia y la paz. Hermano gemelo de Freyja.",
//      fullHistory:
//        "Freyr es un dios Vanir, asociado con la realeza sagrada y la prosperidad. Cabalga un jabalí dorado llamado Gullinbursti y posee el barco mágico Skidbladnir. Sacrificó su espada mágica por amor a la giganta Gerð, lo que lo dejará desarmado en el Ragnarök.",
//      largeImageUrl: "/assets/norse/freyr.jpg",
//    },
//    {
//      name: "Freyja",
//      description:
//        "Diosa del amor, la belleza, la fertilidad, el oro, el Seidr (magia) y la guerra. Líder de las Valquirias.",
//      fullHistory:
//        "Freyja es una de las diosas más importantes del panteón nórdico, perteneciente a los Vanir. Ella preside el campo celestial Fólkvangr, donde recibe la mitad de los guerreros caídos en batalla, y viaja en un carro tirado por gatos.",
//      largeImageUrl: "/assets/norse/freyja.jpg",
//    },
//  ],
//  G: [
//    // 🛑 NUEVO GRUPO 🛑
//    {
//      name: "Jötnar (Gigantes)", // 🛑 AÑADIDO 🛑
//      description:
//        "Seres ancestrales y poderosos, a menudo enemigos de los Æsir (dioses).",
//      fullHistory:
//        "Los Jötnar son una raza de gigantes de hielo o de fuego, descendientes del primer ser, Ymir. Residen principalmente en Jötunheimr. Son la fuente de muchas amenazas, pero también de creación y de parejas de dioses. Se dividen en varias clases como Gigantes de Hielo y Gigantes de Fuego.",
//      largeImageUrl: "/assets/norse/jotun.jpg",
//    },
//  ],
//  H: [
//    // 🛑 NUEVO GRUPO 🛑
//    {
//      name: "Hel", // 🛑 AÑADIDA 🛑
//      description:
//        "Diosa y gobernante de Helheim, el reino de los muertos para quienes no mueren en batalla. Hija de Loki.",
//      fullHistory:
//        "Hel fue arrojada por Odín al Inframundo, Helheim, debido al miedo que los dioses le tenían a ella y a sus hermanos (Fenrir y Jörmungandr). Su cuerpo es descrito como mitad hermoso y mitad cadavérico. Su morada está reservada para los que mueren de vejez o enfermedad.",
//      largeImageUrl: "/assets/norse/hel.jpg",
//    },
//  ],
//  J: [
//    {
//      name: "Jörmungandr",
//      description:
//        "Jörmungandr es tan grande que su cuerpo envuelve el mundo de Midgard y muerde su propia cola. Fue arrojada al mar por Odín. Está destinada a luchar contra Thor en el Ragnarök, y ambos se matarán mutuamente. Su movimiento causa olas gigantes y tsunamis.",
//      fullHistory:
//        "Jörmungandr es tan grande que su cuerpo envuelve el mundo de Midgard y muerde su propia cola. Fue arrojada al mar por Odín. Está destinada a luchar contra Thor en el Ragnarök, y ambos se matarán mutuamente. Su movimiento causa olas gigantes y tsunamis.",
//      largeImageUrl: "/assets/norse/jormungandr.jpg",
//    },
//    {
//      name: "Jötunheimr",
//      description:
//        "El reino de los Jötnar (gigantes), enemigos de los dioses Æsir.",
//      fullHistory:
//        "Jötunheimr es el mundo de los gigantes de roca y hielo. Se encuentra en los confines del cosmos y está separado de Asgard y Midgard. Los dioses Æsir a menudo viajan a Jötunheimr para luchar contra sus habitantes o negociar.",
//      largeImageUrl: "/assets/norse/jotunheimr.jpg",
//    },
//  ],
//  L: [
//    {
//      name: "Loki",
//      description:
//        "Dios embaucador de los Æsir, conocido por su ingenio y malicia. Es padre de Fenrir, Jörmungandr y Hel.",
//      fullHistory:
//        "Loki, aunque figura entre los Æsir, es un gigante. Es la fuente de la mayoría de los problemas en Asgard, actuando a menudo como un agente del caos y el cambio. Su travesura culminante fue la muerte del dios Balder.",
//      largeImageUrl: "/assets/norse/loki.jpg",
//    },
//  ],
//  M: [
//    // 🛑 GRUPO MODIFICADO 🛑
//    {
//      name: "Mimir", // 🛑 AÑADIDO 🛑
//      description:
//        "Ser de la mitología nórdica, guardián del pozo de la sabiduría (Mímisbrunnr).",
//      fullHistory:
//        "Mimir era el guardián de la fuente de la sabiduría ubicada bajo las raíces de Yggdrasil. Odín sacrificó uno de sus ojos para poder beber de sus aguas y obtener conocimiento. Tras ser decapitado en la guerra, Odín conservó su cabeza y la dotó de la capacidad de hablar, convirtiéndola en su consejero.",
//      largeImageUrl: "/assets/norse/mimir.jpg",
//    },
//    {
//      name: "Mjölnir",
//      description:
//        "El martillo mágico de Thor, capaz de derribar montañas y que siempre regresa a su mano.",
//      fullHistory:
//        "Mjölnir fue forjado por los enanos Sindri y Brokkr. Es el arma más poderosa de los dioses y el símbolo de la protección de Thor. Se dice que Thor necesita guantes de hierro y un cinturón de fuerza para usarlo correctamente.",
//      largeImageUrl: "/assets/norse/mjolnir.jpg",
//    },
//  ],
//  O: [
//    {
//      name: "Odín",
//      description:
//        "El Padre de Todo, dios principal de la mitología nórdica, asociado con la sabiduría, la guerra y la muerte.",
//      fullHistory:
//        "Odín es el líder del panteón nórdico. Sacrificó uno de sus ojos para beber del pozo de la sabiduría y se colgó del árbol Yggdrasil durante nueve días para descubrir las runas. Reside en Valhalla.",
//      largeImageUrl: "/assets/norse/odin.jpg",
//    },
//  ],
//  R: [
//    {
//      name: "Ragnarök",
//      description:
//        "La profecía del destino final de los dioses, una gran batalla que destruirá el mundo conocido.",
//      fullHistory:
//        "El Ragnarök es la inevitable sucesión de eventos que culminan en la destrucción de los Nueve Mundos y la muerte de la mayoría de los dioses principales, incluyendo a Odín y Thor. Sin embargo, el mundo renacerá después, gobernado por una nueva generación.",
//      largeImageUrl: "/assets/norse/ragnarok.jpg",
//    },
//  ],
//  T: [
//    {
//      name: "Thor",
//      description:
//        "Dios del trueno, el relámpago, las tormentas y la fuerza. Protector de Midgard y Asgard.",
//      fullHistory:
//        "Thor es el protector de Asgard y Midgard contra los gigantes. Su fuerza es legendaria, y su martillo Mjölnir regresa a su mano después de ser lanzado. Es conocido por su valentía y temperamento, a menudo viajando en un carro tirado por cabras.",
//      largeImageUrl: "/assets/norse/thor.jpg",
//    },
//  ],
//  V: [
//    // 🛑 GRUPO MODIFICADO 🛑
//    {
//      name: "Valquirias", // 🛑 AÑADIDAS 🛑
//      description:
//        "Doncellas guerreras de Odín, encargadas de elegir a los héroes caídos en batalla.",
//      fullHistory:
//        "Las valquirias cabalgan sobre caballos por el campo de batalla, escogiendo a los guerreros más valientes y aptos, los 'einherjer', para llevarlos al Valhalla. Allí, sirven hidromiel a los héroes que esperarán junto a Odín el inicio del Ragnarök.",
//      largeImageUrl: "/assets/norse/valkyries.jpg",
//    },
//    {
//      name: "Valhalla",
//      description:
//        "La majestuosa sala de Odín en Asgard. La mitad de los guerreros muertos en batalla van aquí.",
//      fullHistory:
//        "Valhalla (Sala de los caídos) es donde Odín acoge a los Einherjar (guerreros dignos caídos en combate). Allí comen, beben y entrenan para el Ragnarök, bebiendo hidromiel y comiendo la carne del jabalí Sáehrímnir.",
//      largeImageUrl: "/assets/norse/valhalla.jpg",
//    },
//  ],
//  Y: [
//    {
//      name: "Yggdrasil",
//      description:
//        "El árbol del mundo, un fresno gigante que conecta los nueve mundos de la cosmología nórdica.",
//      fullHistory:
//        "Yggdrasil es el pilar central del cosmos nórdico. Bajo sus raíces viven criaturas como el dragón Níðhöggr, y en sus ramas se encuentran los Nueve Mundos. Es un símbolo de la vida, el conocimiento y la interconexión.",
//      largeImageUrl: "/assets/norse/yggdrasil.jpg",
//    },
//  ],
//};
//
//// ---------------------------------------------------
//// DATOS DEL GLOSARIO EGIPCIO (10 Entradas)
//// ---------------------------------------------------
//
//export const egyptianGlosary: MythologyGlosaryData = {
//  A: [
//    {
//      name: "Anubis",
//      description:
//        "Dios de la muerte, el embalsamamiento y el inframundo. Guía las almas a la Duat.",
//      fullHistory:
//        "Anubis es representado con la cabeza de un chacal negro. Su papel principal era supervisar el embalsamamiento y guiar las almas en el Inframundo (Duat). También era crucial en la 'Ceremonia del Pesaje del Corazón' contra la pluma de Ma'at.",
//      largeImageUrl: "/assets/egyptian/anubis.jpg",
//    },
//  ],
//  H: [
//    // 🛑 NUEVO GRUPO 🛑
//    {
//      name: "Horus",
//      description:
//        "Dios del cielo, la guerra y la caza. Hijo de Osiris e Isis y protector de los faraones.",
//      fullHistory:
//        "Horus es el dios con cabeza de halcón que vengó la muerte de su padre, Osiris, derrotando a su tío Set en una larga batalla. Los faraones eran considerados la encarnación de Horus en vida, representando la autoridad legítima y el orden (Ma'at).",
//      largeImageUrl: "/assets/egyptian/horus.jpg",
//    },
//  ],
//  I: [
//    {
//      name: "Isis",
//      description:
//        "Diosa madre, de la magia, la fertilidad y la sanación. Esposa de Osiris y madre de Horus.",
//      fullHistory:
//        "Isis era una diosa principal en el panteón egipcio, conocida como la gran maga. Es famosa por haber devuelto a la vida a su esposo Osiris tras su asesinato por Set, y por proteger a su hijo Horus. Es un símbolo de la fidelidad y la maternidad.",
//      largeImageUrl: "/assets/egyptian/isis.jpg",
//    },
//  ],
//  M: [
//    // 🛑 NUEVO GRUPO 🛑
//    {
//      name: "Ma'at", // 🛑 AÑADIDA 🛑
//      description:
//        "Diosa de la verdad, la justicia, la armonía y el orden cósmico. Simbolizada por una pluma.",
//      fullHistory:
//        "Ma'at no es solo una diosa, sino un concepto fundamental para el cosmos egipcio. Era la antítesis del caos. En el Juicio de las almas, su pluma se usaba para pesar el corazón del difunto contra el peso de la verdad; si el corazón era más pesado, el alma era devorada.",
//      largeImageUrl: "/assets/egyptian/maat.jpg",
//    },
//  ],
//  O: [
//    {
//      name: "Osiris",
//      description:
//        "Dios del más allá, el inframundo y el Nilo. Fue asesinado por su hermano Set y devuelto a la vida por Isis.",
//      fullHistory:
//        "Originalmente rey de Egipto, Osiris fue asesinado y desmembrado por su celoso hermano Set. Isis lo reconstruyó y le devolvió la vida, convirtiéndolo en el gobernante del reino de los muertos y símbolo de la resurrección.",
//      largeImageUrl: "/assets/egyptian/osiris.jpg",
//    },
//  ],
//  R: [
//    {
//      name: "Ra",
//      description:
//        "El dios sol, creador de todo lo existente. Viajaba por el cielo en su barca solar, renaciendo cada mañana.",
//      fullHistory:
//        "Ra era la deidad solar y la más importante de la mitología egipcia. Gobernaba el cielo, la tierra y el inframundo. Cada noche, viajaba en su barca solar a través del Inframundo, combatiendo a Apep, la serpiente del caos, para renacer al amanecer.",
//      largeImageUrl: "/assets/egyptian/ra.jpg",
//    },
//  ],
//  S: [
//    {
//      name: "Set",
//      description:
//        "Dios del desierto, las tormentas, el caos, la violencia y los extranjeros. Hermano y asesino de Osiris.",
//      fullHistory:
//        "Set representa las fuerzas destructivas de la naturaleza. Era el antagonista de su hermano Osiris y su sobrino Horus. Aunque a menudo es visto como maligno, también era una fuerza necesaria para equilibrar el caos y el orden.",
//      largeImageUrl: "/assets/egyptian/set.jpg",
//    },
//    {
//      name: "Sekhmet",
//      description:
//        "Diosa guerrera, sanadora y de las plagas. A menudo representada con cabeza de leona.",
//      fullHistory:
//        "Sekhmet es una diosa poderosa asociada con el sol, la guerra y la sanación. Fue creada originalmente por Ra para castigar a la humanidad, casi destruyéndola. Se la invoca tanto para traer enfermedades como para curarlas.",
//      largeImageUrl: "/assets/egyptian/sekhmet.jpg",
//    },
//    {
//      name: "Shu",
//      description: "Dios del aire, que separó la tierra (Geb) del cielo (Nut).",
//      fullHistory:
//        "Shu es la personificación del aire y el padre de Geb (tierra) y Nut (cielo). Su principal tarea mitológica fue sostener a Nut por encima de Geb, separando el cielo y la tierra y creando el espacio habitable para la humanidad.",
//      largeImageUrl: "/assets/egyptian/shu.jpg",
//    },
//  ],
//  T: [
//    {
//      name: "Thot",
//      description:
//        "Dios de la escritura, la magia, la sabiduría y la luna. Es el escriba de los dioses.",
//      fullHistory:
//        "Thot es el dios del conocimiento, la medición y la escritura. Jugó un papel fundamental en muchos mitos, incluido el de Osiris, y a menudo se le representa con la cabeza de un ibis. Se le considera el inventor de los jeroglíficos.",
//      largeImageUrl: "/assets/egyptian/thot.jpg",
//    },
//  ],
//};
//
//// ---------------------------------------------------
//// FUNCIÓN DE BÚSQUEDA (Necesaria para MythDetail.tsx)
//// ---------------------------------------------------
//
//export const getMythDetail = (
//  mythType: string,
//  godId: string
//): MythEntry | undefined => {
//  // Limpiamos el nombre del dios para la búsqueda (ej: 'apolo-detail' -> 'apolo')
//  const formattedGodId = godId.toLowerCase().replace(/-/g, " ");
//
//  let glosary: MythologyGlosaryData;
//  switch (mythType) {
//    case "greek":
//      glosary = greekGlosary;
//      break;
//    case "norse":
//      glosary = norseGlosary;
//      break;
//    case "egyptian":
//      glosary = egyptianGlosary;
//      break;
//    default:
//      return undefined;
//  }
//
//  // Iteramos sobre todas las entradas de cada letra para encontrar la coincidencia
//  for (const letter in glosary) {
//    const found = glosary[letter].find((entry) =>
//      entry.name.toLowerCase().includes(formattedGodId)
//    );
//    if (found) {
//      return found;
//    }
//  }
//
//  return undefined;
//};
//

export interface MythEntry {
  name: string;
  // La descripción ahora contiene la historia detallada.
  description: string;
  // largeImageUrl se mantiene para que puedas usar URLs externas.
  largeImageUrl: string;
}

export interface MythologyGlosaryData {
  [key: string]: MythEntry[];
}

// ---------------------------------------------------
// DATOS DEL GLOSARIO GRIEGO (31 Entradas)
// ---------------------------------------------------

export const greekGlosary: MythologyGlosaryData = {
  A: [
    {
      name: "Apolo",
      description:
        "Apolo, hijo de Zeus y Leto, es uno de los dioses más venerados del Olimpo. Es conocido por su habilidad con la lira, su control sobre la luz y su capacidad para predecir el futuro a través del Oráculo de Delfos. También representa la armonía, la luz solar y el orden.",
      largeImageUrl: "/assets/greek/apolo.jpg",
    },
    {
      name: "Afrodita",
      description:
        "Afrodita es la diosa del amor, la belleza y el deseo. Según la versión más famosa, nació de la espuma del mar (Afros). Estaba casada con Hefesto, el herrero divino, pero era famosa por sus numerosos romances.",
      largeImageUrl: "/assets/greek/afrodita.jpg",
    },
    {
      name: "Atlas",
      description:
        "Atlas es un Titán, hijo de Jápeto. Tras la Titanomaquia (la guerra entre los Titanes y los Olímpicos), fue castigado por Zeus a sostener el firmamento (o, en versiones posteriores, la Tierra) sobre sus hombros por toda la eternidad. Es un símbolo de resistencia y carga cósmica.",
      largeImageUrl: "/assets/greek/atlas.jpg",
    },
    {
      name: "Atenea",
      description:
        "Atenea es la diosa protectora de Atenas, destacada por su mente estratégica sobre la violencia bruta (a diferencia de Ares). Nació completamente formada y armada de la cabeza de Zeus. Es patrona de los héroes, la justicia, la sabiduría y las artes civilizadas.",
      largeImageUrl: "/assets/greek/atenea.jpg",
    },
    {
      name: "Artemisa",
      description:
        "Artemisa es la diosa virgen de la caza, los animales salvajes, el terreno virgen y la luna. Es hija de Zeus y Leto, y hermana gemela de Apolo. Es conocida por su destreza con el arco y su feroz protección de su castidad y de las doncellas, castigando severamente a quienes la ofendían.",
      largeImageUrl: "/assets/greek/artemisa.jpg",
    },
    {
      name: "Ares",
      description:
        "Ares encarna el aspecto físico y brutal de la guerra, el derramamiento de sangre y la violencia. Era impopular tanto entre los dioses como entre los humanos, ya que prefería la matanza sin sentido sobre la estrategia militar.",
      largeImageUrl: "/assets/greek/ares.jpg",
    },
  ],
  C: [
    {
      name: "Cerbero",
      description:
        "Cerbero, hijo de Tifón y Equidna, es el monstruoso perro de tres cabezas de Hades que impide a los muertos salir del Inframundo y a los vivos entrar. Hércules, como parte de sus Doce Trabajos, tuvo la difícil tarea de capturarlo, simbolizando su dominio sobre la muerte.",
      largeImageUrl: "/assets/greek/cerberus.jpg",
    },
    {
      name: "Cronos",
      description:
        "Cronos fue el hijo más joven de Urano (Cielo) y Gea (Tierra). Tras castrar a su padre, gobernó durante la Edad de Oro. Por miedo a la profecía, devoró a sus propios hijos al nacer, hasta que Zeus lo derrocó.",
      largeImageUrl: "/assets/greek/cronos.jpg",
    },
    {
      name: "Centauro",
      description:
        "Los centauros habitaban los bosques de Tesalia. Eran generalmente figuras salvajes y lujuriosas, aunque el centauro Quirón era conocido por su sabiduría y habilidades curativas, siendo tutor de muchos héroes.",
      largeImageUrl: "/assets/greek/centauro.jpg",
    },
  ],
  D: [
    {
      name: "Dionisio",
      description:
        "Dionisio es el único dios olímpico nacido de una mortal (Sémele). Representa tanto el éxtasis desenfrenado de la fiesta como el poder civilizador del vino. Sus ritos a menudo implicaban el trance y la locura, siendo el dios del vino y el teatro.",
      largeImageUrl: "/assets/greek/dionisio.jpg",
    },
    {
      name: "Dédalo e Ícaro",
      description:
        "Dédalo fue un arquitecto e inventor ateniense, creador del Laberinto de Creta. Fue encarcelado con su hijo Ícaro y, para escapar, fabricaron alas con plumas y cera. Dédalo advirtió a Ícaro que no volara demasiado bajo (por la humedad) ni demasiado alto (por el sol). Ícaro, por la euforia, voló cerca del sol, su cera se derritió y cayó al mar, muriendo.",
      largeImageUrl: "/assets/greek/dedalo_icaro.jpg",
    },
  ],
  E: [
    {
      name: "Eros",
      description:
        "En la tradición más antigua, Eros era una fuerza primordial. Más tarde fue conocido como el hijo de Afrodita y Ares, y su papel principal era incitar el deseo sexual y el amor, a menudo a través de sus flechas doradas, siendo el dios del amor y el deseo.",
      largeImageUrl: "/assets/greek/eros.jpg",
    },
  ],
  H: [
    {
      name: "Hades",
      description:
        "Hades gobierna el reino de los muertos, un lugar que lleva su nombre. Aunque temido, no era considerado malvado, sino simplemente el sombrío guardián de los límites finales. Raptó a Perséfone para hacerla su reina y es el dios del inframundo.",
      largeImageUrl: "/assets/greek/hades.jpg",
    },
    {
      name: "Hermes",
      description:
        "Hermes es el hijo de Zeus y la ninfa Maya. Es el mensajero alado de los dioses y un psicopompo, guiando a las almas al Inframundo. Es conocido por su ingenio, astucia y como protector de comerciantes, viajeros y ladrones.",
      largeImageUrl: "/assets/greek/hermes.jpg",
    },
    {
      name: "Hera",
      description:
        "Hera es la hermana y esposa de Zeus, reina de los dioses y protectora del matrimonio. Es famosa por sus celos y la ira vengativa que dirigía contra las amantes de Zeus y sus hijos ilegítimos, como Heracles.",
      largeImageUrl: "/assets/greek/hera.jpg",
    },
    {
      name: "Hermanas del Destino (Moiras)", // 🛑 NUEVA 🛑
      description:
        "Las Moiras, o Hermanas del Destino, son Cloto (la que hila el hilo de la vida), Láquesis (la que mide su longitud) y Átropos (la que lo corta). Ni siquiera los dioses podían revertir sus decisiones, representando una fuerza cósmica superior a todos.",
      largeImageUrl: "/assets/greek/moiras.jpg",
    },
    {
      name: "Hércules",
      description:
        "Hércules, o Heracles, era hijo de Zeus y la mortal Alcmena. Famoso por su fuerza sobrehumana y su temperamento, fue obligado a realizar doce trabajos como penitencia, logrando hazañas que ningún otro mortal podía realizar.",
      largeImageUrl: "/assets/greek/hercules.jpg",
    },
    {
      name: "Hefesto",
      description:
        "Hefesto era el único dios olímpico con una discapacidad física, y era un maestro artesano. Creó armas y armaduras mágicas para los dioses (como el tridente de Poseidón y los rayos de Zeus) en su fragua volcánica. Es el dios del fuego y la herrería.",
      largeImageUrl: "/assets/greek/hefesto.jpg",
    },
  ],
  K: [
    {
      name: "Kraken",
      description:
        "El Kraken es una criatura de la mitología nórdica, pero en la mitología griega, las bestias marinas como el Cetus (monstruo marino) o las serpientes de mar representaban amenazas similares en el vasto y temido dominio de Poseidón.",
      largeImageUrl: "/assets/greek/kraken_similar.jpg",
    },
  ],
  M: [
    {
      name: "Medusa",
      description:
        "Medusa fue originalmente una hermosa doncella que fue castigada por Atenea (o Poseidón) y convertida en un monstruo con serpientes por cabello. Fue decapitada por el héroe Perseo, quien usó su cabeza como arma antes de regalársela a Atenea.",
      largeImageUrl: "/assets/greek/medusa.jpg",
    },
    {
      name: "Minotauro",
      description:
        "El Minotauro fue el hijo de Pasífae (esposa del rey Minos) y un toro blanco. Era una bestia feroz con cuerpo de hombre y cabeza de toro que se alimentaba de carne humana y estaba encerrado en el complejo Laberinto hasta que fue asesinado por Teseo.",
      largeImageUrl: "/assets/greek/minotauro.jpg",
    },
  ],
  N: [
    {
      name: "Narciso",
      description:
        "Narciso fue un joven de gran belleza maldecido a enamorarse de su propio reflejo en el agua. Incapaz de apartarse de su imagen, se consumió hasta morir, y en su lugar creció una flor que lleva su nombre. Su historia advierte contra la vanidad.",
      largeImageUrl: "/assets/greek/narciso.jpg",
    },
  ],
  P: [
    {
      name: "Pegaso",
      description:
        "Pegaso es el famoso caballo alado, inmortal e hijo de Poseidón y Medusa. Nació de la sangre de Medusa cuando Perseo la decapitó. Fue montado por Belerofonte para luchar contra la Quimera y, más tarde, se convirtió en el portador de los rayos de Zeus. Simboliza la inspiración poética.",
      largeImageUrl: "/assets/greek/pegasus.jpg",
    },
    {
      name: "Perséfone",
      description:
        "Perséfone es la hija de Zeus y Deméter (diosa de la cosecha). Fue raptada por Hades para que fuera su esposa y reina del Inframundo. Debido a un pacto, pasa la mitad del año en el Inframundo (el invierno) y la otra mitad con su madre en la Tierra (la primavera y el verano), explicando el ciclo de las estaciones.",
      largeImageUrl: "/assets/greek/persefone.jpg",
    },

    {
      name: "Prometeo",
      description:
        "Prometeo es conocido por ser el benefactor de la humanidad, a la que moldeó a partir de arcilla. Desafió a Zeus al robar el fuego divino. Su castigo fue ser encadenado a una roca, donde un águila le devoraba el hígado cada día, el cual se regeneraba cada noche.",
      largeImageUrl: "/assets/greek/prometeo.jpg",
    },
    {
      name: "Pandora", // 🛑 NUEVA 🛑
      description:
        "Pandora fue la primera mujer, creada por Hefesto por orden de Zeus como castigo para la humanidad. Recibió un cofre (o jarra) que se le prohibió abrir. Al hacerlo, liberó todas las desgracias, enfermedades y vicios, dejando solo la Esperanza en el fondo.",
      largeImageUrl: "/assets/greek/pandora.jpg",
    },
    {
      name: "Poseidón",
      description:
        "Poseidón es el segundo en poder después de Zeus. Gobierna el mar con su tridente. Es conocido por su temperamento volátil, que se manifiesta en violentas tormentas y terremotos. Su ira fue una parte central de la Odisea de Homero.",
      largeImageUrl: "/assets/greek/poseidon.jpg",
    },
    {
      name: "Perseo",
      description:
        "Perseo fue el primer héroe conocido por la mitología griega, hijo de Zeus y Dánae. Sus hazañas más famosas son la decapitación de Medusa y la fundación de la ciudad de Micenas, después de rescatar a su futura esposa Andrómeda.",
      largeImageUrl: "/assets/greek/perseo.jpg",
    },
  ],
  S: [
    {
      name: "Sátiro",
      description:
        "Los Sátiros eran espíritus de la naturaleza con cuernos y patas de cabra, conocidos por su amor al vino, la música, el baile y las mujeres. A menudo se les asocia con el dios Dionisio, personificando el lado salvaje e indomable de la naturaleza.",
      largeImageUrl: "/assets/greek/satiro.jpg",
    },
    {
      name: "Sirenas",
      description:
        "Las sirenas habitaban cerca de las islas rocosas. Su canto era tan irresistible que hacía que los marineros encallaran sus barcos. Ulises fue el único que logró escucharlas y sobrevivir, atándose al mástil de su barco.",
      largeImageUrl: "/assets/greek/sirenas.jpg",
    },
  ],
  T: [
    {
      name: "Teseo",
      description:
        "Teseo es el héroe nacional de Atenas. Su hazaña más memorable fue viajar a Creta, obtener la ayuda de Ariadna y matar al Minotauro dentro del Laberinto. También se le atribuye la unificación de la región de Ática bajo Atenas.",
      largeImageUrl: "/assets/greek/teseo.jpg",
    },
    {
      name: "Titanes",
      description:
        "Los Titanes fueron la generación de deidades divinas que precedió a los Dioses Olímpicos. Gobernaban bajo Cronos hasta que fueron derrocados por Zeus y sus hermanos en la Titanomaquia, una gran guerra cósmica.",
      largeImageUrl: "/assets/greek/titanes.jpg",
    },
  ],
  Z: [
    {
      name: "Zeus",
      description:
        "Zeus es el gobernante supremo del Monte Olimpo, famoso por su fuerza, su dominio sobre el rayo y su tendencia a tener aventuras amorosas. Lideró a sus hermanos en la guerra contra los Titanes para asegurar el dominio olímpico. Es el Rey de los dioses.",
      largeImageUrl: "/assets/greek/zeus.jpg",
    },
  ],
};

// ---------------------------------------------------
// DATOS DEL GLOSARIO NÓRDICO (21 Entradas)
// ---------------------------------------------------

export const norseGlosary: MythologyGlosaryData = {
  A: [
    {
      name: "Æsir",
      description:
        "Los Æsir son la tribu principal de los dioses nórdicos, y viven en Asgard. Incluyen a deidades como Odín, Thor, Frigg, Tyr y Balder. Son el clan asociado con el poder, la guerra y el orden, a diferencia de los Vanir, que están asociados con la fertilidad y la prosperidad.",
      largeImageUrl: "/assets/norse/aesir.jpg",
    },
    {
      name: "Angrboda",
      description:
        "Angrboda es una giganta (Jötunn) de Jötunheimr y es conocida como la madre de los monstruos. Es la amante de Loki y con él engendró a tres de las criaturas más temidas del cosmos nórdico: Fenrir (el lobo), Jörmungandr (la serpiente del mundo) y Hel (la gobernante del inframundo).",
      largeImageUrl: "/assets/norse/angrboda.jpg",
    },
    {
      name: "Asgard",
      description:
        "Asgard es uno de los Nueve Mundos, hogar de la tribu de dioses conocida como los Æsir, gobernados por Odín. Dentro de Asgard se encuentra el Valhalla, la gran sala de Odín, y el reino está unido a Midgard por el puente Bifrost.",
      largeImageUrl: "/assets/norse/asgard.jpg",
    },
  ],
  B: [
    {
      name: "Bifrost",
      description:
        "El Bifrost es un puente ardiente de arco iris que conecta Midgard (la Tierra) con Asgard (el reino de los dioses). Está custodiado por el dios Heimdall. Se dice que será destruido durante el Ragnarök cuando las fuerzas de Jötunheimr lo atraviesen.",
      largeImageUrl: "/assets/norse/bifrost.jpg",
    },
    {
      name: "Balder",
      description:
        "Balder era el dios de la luz, la alegría, la pureza y la belleza. Era el más querido de los Æsir e hijo de Odín. Un sueño profético predijo su muerte, por lo que su madre, Frigg, hizo que todos los seres vivos y objetos juraran no hacerle daño. Loki descubrió que el muérdago era la única excepción y engañó al dios ciego Hodr para que arrojara una lanza de muérdago contra Balder, matándolo.",
      largeImageUrl: "/assets/norse/balder.jpg",
    },
  ],
  D: [
    {
      name: "Draupnir",
      description:
        "Draupnir es el anillo mágico de oro de Odín, forjado por los enanos Sindri y Brokkr. Su nombre significa 'el que gotea'. Su propiedad más notable es que, cada novena noche, 'gotea' o genera ocho anillos de oro del mismo peso y pureza que él mismo, siendo un símbolo inagotable de riqueza.",
      largeImageUrl: "/assets/norse/draupnir.jpg",
    },
  ],
  F: [
    {
      name: "Fenrir",
      description:
        "Fenrir fue un lobo monstruoso, hijo de Loki, encadenado por los Æsir por miedo a su inmenso poder. Solo el dios Tyr perdió su mano para encadenarlo. Está destinado a escapar durante el Ragnarök para matar a Odín.",
      largeImageUrl: "/assets/norse/fenrir.jpg",
    },
    {
      name: "Freyr",
      description:
        "Freyr es un dios Vanir de la fertilidad, el sol, la lluvia y la paz. Cabalga un jabalí dorado llamado Gullinbursti y posee el barco mágico Skidbladnir. Sacrificó su espada mágica por amor, lo que lo dejará desarmado en el Ragnarök.",
      largeImageUrl: "/assets/norse/freyr.jpg",
    },
    {
      name: "Freyja",
      description:
        "Freyja es una de las diosas más importantes del panteón nórdico, del clan Vanir. Es la diosa del amor, la belleza, la fertilidad, el oro y la guerra. Ella preside el campo celestial Fólkvangr, donde recibe la mitad de los guerreros caídos.",
      largeImageUrl: "/assets/norse/freyja.jpg",
    },
    {
      name: "Frigg",
      description:
        "Frigg es la esposa de Odín y la reina de los Æsir. Es la diosa del cielo, el matrimonio, la maternidad y el destino. A diferencia de Freyja (diosa del amor y la guerra), Frigg es conocida por su rol maternal y por ser la única que comparte el trono con Odín. Ella previó la muerte de su hijo Balder.",
      largeImageUrl: "/assets/norse/frigg.jpg",
    },
  ],
  G: [
    {
      name: "Jötnar (Gigantes)",
      description:
        "Los Jötnar son una raza de gigantes de hielo o de fuego, descendientes del primer ser, Ymir. Residen principalmente en Jötunheimr y son los enemigos ancestrales de los dioses Æsir. Son la fuente de muchas amenazas, pero también de la creación.",
      largeImageUrl: "/assets/norse/jotun.jpg",
    },
  ],
  H: [
    {
      name: "Heimdall",
      description:
        "Heimdall es el vigilante de los dioses, guardián del Bifrost, el puente del arcoíris que conecta Asgard y Midgard. Posee una vista tan aguda que puede ver crecer la hierba y el pelo de las ovejas, y un oído tan fino que puede oír el sonido de la lana. Su cuerno, Gjallarhorn, está destinado a sonar para advertir a los Æsir del inicio del Ragnarök. Es conocido también como el padre de la humanidad en algunas sagas.",
      largeImageUrl: "/assets/norse/heimdall.jpg",
    },
    {
      name: "Hel",
      description:
        "Hel es la diosa y gobernante de Helheim, el reino de los muertos para quienes no mueren en batalla. Hija de Loki, fue arrojada al Inframundo por Odín. Su cuerpo es descrito como mitad hermoso y mitad cadavérico.",
      largeImageUrl: "/assets/norse/hel.jpg",
    },
    {
      name: "Helheim",
      description:
        "Helheim (o Hel) es uno de los Nueve Mundos y el reino de los muertos para aquellos que no mueren en batalla. Es gobernado por la diosa Hel y se describe como un lugar oscuro y brumoso, custodiado por el perro Garmr, al que las almas deben viajar tras morir de vejez o enfermedad.",
      largeImageUrl: "/assets/norse/helheim.jpg",
    },
    {
      name: "Hugin y Munin",
      description:
        "Hugin (Pensamiento) y Munin (Memoria) son los dos cuervos que acompañan a Odín. Cada mañana, salen a volar por los Nueve Mundos, y regresan al atardecer para susurrar a Odín todo lo que han visto y oído, siendo su fuente de conocimiento.",
      largeImageUrl: "/assets/norse/hugin_munin.jpg",
    },
  ],
  J: [
    {
      name: "Jörmungandr",
      description:
        "Jörmungandr es la Serpiente del Mundo, uno de los hijos monstruosos de Loki. Fue arrojada al mar por Odín, y es tan grande que su cuerpo envuelve el mundo de Midgard y muerde su propia cola. Está destinada a luchar contra Thor en el Ragnarök.",
      largeImageUrl: "/assets/norse/jormungandr.jpg",
    },
    {
      name: "Jötunheimr",
      description:
        "Jötunheimr es el reino de los Jötnar (gigantes), enemigos de los dioses Æsir. Se encuentra en los confines del cosmos y está separado de Asgard y Midgard. Los dioses Æsir a menudo viajan allí para luchar o negociar con sus habitantes.",
      largeImageUrl: "/assets/norse/jotunheimr.jpg",
    },
  ],
  L: [
    {
      name: "Loki",
      description:
        "Loki, aunque figura entre los Æsir, es un gigante. Es el dios embaucador, la fuente de la mayoría de los problemas en Asgard, actuando a menudo como un agente del caos y el cambio. Es padre de Fenrir, Jörmungandr y Hel.",
      largeImageUrl: "/assets/norse/loki.jpg",
    },
  ],
  M: [
    {
      name: "Magni",
      description:
        "Hijo de Thor y la Giganta Járnsaxa, Magni (que significa 'Fuerza') es uno de los pocos dioses destinados a sobrevivir al Ragnarök. Demostró una fuerza prodigiosa desde niño al levantar la pierna del Gigante Hrungnir, y heredará el martillo Mjölnir de su padre después del crepúsculo de los dioses.",
      largeImageUrl: "/assets/norse/magni.jpg",
    },
    {
      name: "Modi",
      description:
        "Hijo de Thor, cuyo nombre significa 'Coraje' o 'Ira'. Al igual que su hermano Magni, Modi es uno de los pocos dioses que sobrevivirán al Ragnarök y que ayudarán a restaurar el orden en el nuevo mundo. Él y Magni representan la fuerza y el espíritu indomable de su padre.",
      largeImageUrl: "/assets/norse/modi.jpg",
    },

    {
      name: "Midgard",
      description:
        "Midgard (Tierra Media) es uno de los Nueve Mundos y es el hogar de la humanidad. Está situado en el centro del Yggdrasil y está rodeado por un vasto océano donde reside la serpiente Jörmungandr. Está conectado con Asgard por el puente Bifrost y es el lugar que los dioses Æsir protegen de los gigantes.",
      largeImageUrl: "/assets/norse/midgard.jpg",
    },
    {
      name: "Mimir",
      description:
        "Mimir era el guardián de la fuente de la sabiduría (Mímisbrunnr) ubicada bajo las raíces de Yggdrasil. Odín sacrificó uno de sus ojos para poder beber de sus aguas. Tras ser decapitado, Odín conservó su cabeza y la dotó de la capacidad de hablar.",
      largeImageUrl: "/assets/norse/mimir.jpg",
    },
    {
      name: "Mjölnir",
      description:
        "Mjölnir fue forjado por los enanos Sindri y Brokkr. Es el martillo mágico de Thor, el arma más poderosa de los dioses, capaz de derribar montañas y que siempre regresa a la mano de su portador.",
      largeImageUrl: "/assets/norse/mjolnir.jpg",
    },
  ],
  O: [
    {
      name: "Odín",
      description:
        "Odín es el Padre de Todo y líder del panteón nórdico. Es el dios de la sabiduría, la guerra y la muerte. Sacrificó un ojo por conocimiento y se colgó del árbol Yggdrasil durante nueve días para descubrir las runas. Reside en Valhalla.",
      largeImageUrl: "/assets/norse/odin.jpg",
    },
  ],
  R: [
    {
      name: "Ragnarök",
      description:
        "El Ragnarök es la profecía del destino final de los dioses. Es una inevitable sucesión de eventos que culminan en una gran batalla, la destrucción de los Nueve Mundos y la muerte de la mayoría de los dioses, antes de que el mundo renazca.",
      largeImageUrl: "/assets/norse/ragnarok.jpg",
    },
  ],
  S: [
    {
      name: "Sif",
      description:
        "Sif es la esposa del dios Thor. Es conocida principalmente por su hermoso cabello dorado, que fue cortado maliciosamente por Loki. Thor obligó a Loki a reemplazarlo con un nuevo cabello hecho de oro puro forjado por los enanos, que crecía como cabello real. Es una diosa asociada con la Tierra y la fertilidad.",
      largeImageUrl: "/assets/norse/sif.jpg",
    },
    {
      name: "Sindri y Brokkr",
      description:
        "Sindri (también conocido como Eitri) y Brokkr son los dos hermanos enanos herreros que forjaron los tesoros más valiosos de los dioses, incluyendo Mjölnir (martillo de Thor), Gúllinbursti (jabalí de Freyr) y Draupnir (anillo de Odín).",
      largeImageUrl: "/assets/norse/sindri_brokkr.jpg",
    },
  ],
  T: [
    {
      name: "Thor",
      description:
        "Thor es el dios del trueno, el relámpago y la fuerza. Es el protector de Midgard y Asgard contra los gigantes. Su fuerza es legendaria, y su martillo Mjölnir regresa a su mano después de ser lanzado. A menudo viaja en un carro tirado por cabras.",
      largeImageUrl: "/assets/norse/thor.jpg",
    },
    {
      name: "Thrud",
      description:
        "Thrud es la hija de Thor y Sif. Su nombre significa 'Fuerza' o 'Poder'. Es una valquiria que sirve en el Valhalla y, a menudo, se la considera una personificación del poder de su padre. En algunas leyendas, se cuenta que fue prometida a un enano, Alvíss, pero Thor lo engañó y lo convirtió en piedra.",
      largeImageUrl: "/assets/norse/thrud.jpg",
    },
  ],
  V: [
    {
      name: "Valquirias",
      description:
        "Las Valquirias son doncellas guerreras de Odín. Cabalgan por el campo de batalla, escogiendo a los guerreros más valientes y aptos (los 'einherjer') para llevarlos al Valhalla. Allí, sirven hidromiel a los héroes que esperarán el Ragnarök.",
      largeImageUrl: "/assets/norse/valkyries.jpg",
    },
    {
      name: "Valhalla",
      description:
        "Valhalla (Sala de los caídos) es la majestuosa sala de Odín en Asgard. Es donde Odín acoge a la mitad de los Einherjar (guerreros dignos caídos en combate). Allí comen, beben y entrenan para el Ragnarök.",
      largeImageUrl: "/assets/norse/valhalla.jpg",
    },
    {
      name: "Vanir",
      description:
        "Los Vanir son la segunda tribu de dioses principales en la mitología nórdica. Viven en Vanaheimr y están principalmente asociados con la fertilidad, la sabiduría, la magia y la prosperidad. Después de una larga guerra contra los Æsir, ambas tribus se unieron en paz, e importantes Vanir como Njörðr, Freyr y Freyja pasaron a vivir en Asgard.",
      largeImageUrl: "/assets/norse/vanir.jpg",
    },
  ],
  Y: [
    {
      name: "Yggdrasil",
      description:
        "Yggdrasil es el árbol del mundo, un fresno gigante que conecta los nueve mundos de la cosmología nórdica. Es el pilar central del cosmos. Bajo sus raíces viven criaturas como el dragón Níðhöggr. Es un símbolo de la vida y la interconexión.",
      largeImageUrl: "/assets/norse/yggdrasil.jpg",
    },
  ],
};

// ---------------------------------------------------
// DATOS DEL GLOSARIO EGIPCIO (18 Entradas)
// ---------------------------------------------------

export const egyptianGlosary: MythologyGlosaryData = {
  A: [
    {
      name: "Anubis",
      description:
        "Anubis es representado con la cabeza de un chacal negro. Su papel principal era supervisar el embalsamamiento y guiar las almas en el Inframundo (Duat). También era crucial en la 'Ceremonia del Pesaje del Corazón' contra la pluma de Ma'at.",
      largeImageUrl: "/assets/egyptian/anubis.jpg",
    },
  ],
  B: [
    {
      name: "Bastet",
      description:
        "Bastet fue originalmente una diosa guerrera con cabeza de leona (similar a Sekhmet), pero con el tiempo se suavizó a la forma de un gato doméstico. Protegía el hogar, las mujeres, los niños, la alegría y los secretos. Los gatos eran animales sagrados dedicados a ella.",
      largeImageUrl: "/assets/egyptian/bastet.jpg",
    },
  ],
  G: [
    {
      name: "Geb",
      description:
        "Geb es la personificación de la Tierra, el suelo donde crecen las plantas y se entierran los muertos. A menudo se le representa acostado debajo de Nut (el cielo) con Shu (el aire) separándolos. Es padre de Osiris, Isis, Set y Neftis, y sus risas causaban terremotos.",
      largeImageUrl: "/assets/egyptian/geb.jpg",
    },
  ],
  H: [
    {
      name: "Hathor",
      description:
        "Hathor era una deidad celeste importante, a menudo representada con cuernos de vaca y un disco solar. Era una diosa de amor, belleza, música, danza y placer.También era una deidad funeraria que recibía a los muertos, siendo la diosa del cielo y la alegría.",
      largeImageUrl: "/assets/egyptian/hathor.jpg",
    },

    {
      name: "Horus",
      description:
        "Horus es el dios con cabeza de halcón que vengó la muerte de su padre, Osiris, derrotando a su tío Set en una larga batalla. Los faraones eran considerados la encarnación de Horus en vida, representando la autoridad legítima y el orden (Ma'at).",
      largeImageUrl: "/assets/egyptian/horus.jpg",
    },
  ],
  I: [
    {
      name: "Isis",
      description:
        "Isis era una diosa principal en el panteón egipcio, conocida como la gran maga. Es famosa por haber devuelto a la vida a su esposo Osiris tras su asesinato por Set, y por proteger a su hijo Horus. Es un símbolo de la fidelidad, la maternidad y la sanación.",
      largeImageUrl: "/assets/egyptian/isis.jpg",
    },
  ],
  K: [
    {
      name: "Ka",
      description:
        "El Ka es uno de los componentes más importantes del alma en la creencia egipcia. Representa la 'fuerza vital' o 'doble espiritual' de una persona. Nacía con el individuo y permanecía en la tumba después de la muerte, requiriendo alimento y bebida para sustentarse en el más allá.",
      largeImageUrl: "/assets/egyptian/ka.jpg",
    },
    {
      name: "Kek/Kuk",
      description:
        "Kek, o Kuk, es una deidad primordial del caos y la oscuridad, y personificación de la Noche anterior a la creación. Él y su contraparte femenina, Kauket, representan el concepto de oscuridad primordial y el infinito antes de que Ra creara la luz.",
      largeImageUrl: "/assets/egyptian/kek_kuk.jpg",
    },
  ],
  M: [
    {
      name: "Ma'at",
      description:
        "Ma'at no es solo una diosa, sino un concepto fundamental para el cosmos egipcio: la verdad, la justicia, la armonía y el orden cósmico. En el Juicio de las almas, su pluma se usaba para pesar el corazón del difunto; si era más pesado, el alma era devorada.",
      largeImageUrl: "/assets/egyptian/maat.jpg",
    },
    {
      name: "Meskhenet",
      description:
        "Meskhenet es la diosa egipcia del parto y la creadora del Ka (la fuerza vital o alma) de cada persona en el momento de su nacimiento. Se la representa a menudo como un ladrillo con cabeza humana (el ladrillo sobre el que parían las mujeres) o como una mujer con cabeza de útero de vaca. Ella predice el destino de los recién nacidos.",
      largeImageUrl: "/assets/egyptian/meskhenet.jpg",
    },
  ],
  N: [
    {
      name: "Neftis",
      description:
        "Neftis, hermana de Isis, Set y Osiris, es una deidad de la oscuridad, la noche y los ritos funerarios. Aunque es esposa de Set, ayudó a Isis a resucitar a Osiris y proteger a Horus, lo que la convierte en una aliada importante de los dioses del orden. Su nombre significa 'Señora de la Casa'.",
      largeImageUrl: "/assets/egyptian/neftis.jpg",
    },
  ],
  O: [
    {
      name: "Osiris",
      description:
        "Originalmente rey de Egipto, Osiris fue asesinado y desmembrado por su celoso hermano Set. Isis lo reconstruyó y le devolvió la vida, convirtiéndolo en el gobernante del reino de los muertos, el más allá y el símbolo de la resurrección.",
      largeImageUrl: "/assets/egyptian/osiris.jpg",
    },
  ],
  R: [
    {
      name: "Ra",
      description:
        "Ra era la deidad solar y la más importante de la mitología egipcia, creador de todo. Cada noche, viajaba en su barca solar a través del Inframundo, combatiendo a Apep, la serpiente del caos, para renacer al amanecer.",
      largeImageUrl: "/assets/egyptian/ra.jpg",
    },
    {
      name: "Renenutet",
      description:
        "Renenutet es la diosa de la alimentación, la cosecha, la abundancia y la buena fortuna. A menudo se la representa como una cobra o como una mujer con cabeza de cobra. Su importancia radicaba en la prosperidad de las cosechas del Nilo, y a veces se la consideraba la 'Señora de la Ropa' y la que provee el sustento.",
      largeImageUrl: "/assets/egyptian/renenutet.jpg",
    },
  ],
  S: [
    {
      name: "Sobek",
      description:
        "Sobek era el dios cocodrilo que personificaba la fuerza, el poder real y la naturaleza impredecible del Nilo. Era venerado en zonas pantanosas por su poder y para apaciguar a los cocodrilos. Se le considera un dios protector, especialmente de los faraones.",
      largeImageUrl: "/assets/egyptian/sobek.jpg",
    },
    {
      name: "Set",
      description:
        "Set representa las fuerzas destructivas de la naturaleza. Era el dios del desierto, el caos, la violencia y los extranjeros, y el antagonista de su hermano Osiris y su sobrino Horus. Aunque visto como maligno, también era una fuerza necesaria para equilibrar el cosmos.",
      largeImageUrl: "/assets/egyptian/set.jpg",
    },
    {
      name: "Sekhmet",
      description:
        "Sekhmet es una diosa poderosa asociada con el sol, la guerra y la sanación, a menudo representada con cabeza de leona. Fue creada originalmente por Ra para castigar a la humanidad, casi destruyéndola. Se la invoca tanto para traer plagas como para curarlas.",
      largeImageUrl: "/assets/egyptian/sekhmet.jpg",
    },
    {
      name: "Shu",
      description:
        "Shu es la personificación del aire y el padre de Geb (tierra) y Nut (cielo). Su principal tarea mitológica fue sostener a Nut por encima de Geb, separando el cielo y la tierra y creando el espacio habitable para la humanidad.",
      largeImageUrl: "/assets/egyptian/shu.jpg",
    },
  ],
  T: [
    {
      name: "Thot",
      description:
        "Thot es el dios del conocimiento, la medición y la escritura. Jugó un papel fundamental en muchos mitos y a menudo se le representa con la cabeza de un ibis. Se le considera el inventor de los jeroglíficos y el escriba de los dioses.",
      largeImageUrl: "/assets/egyptian/thot.jpg",
    },
  ],
};

// ---------------------------------------------------
// FUNCIÓN DE BÚSQUEDA (Mantenida)
// ---------------------------------------------------

export const getMythDetail = (
  mythType: string,
  godId: string
): MythEntry | undefined => {
  // Limpiamos el nombre del dios para la búsqueda (ej: 'apolo-detail' -> 'apolo')
  const formattedGodId = godId
    .toLowerCase()
    .replace(/-/g, " ")
    .replace(/[^\w\s]/g, "");

  let glosary: MythologyGlosaryData;
  switch (mythType) {
    case "greek":
      glosary = greekGlosary;
      break;
    case "norse":
      glosary = norseGlosary;
      break;
    case "egyptian":
      glosary = egyptianGlosary;
      break;
    default:
      return undefined;
  }

  // Iteramos sobre todas las entradas de cada letra para encontrar la coincidencia
  for (const letter in glosary) {
    // La búsqueda se realiza sobre el 'name' de la entrada
    const found = glosary[letter].find((entry) =>
      entry.name
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .includes(formattedGodId)
    );
    if (found) {
      return found;
    }
  }

  return undefined;
};
