export interface LayerContent {
  title: string;
  accentColor: 'green' | 'cyan' | 'magenta';
  image: string;
  paragraphs: string[];
  stats: { value: number; suffix?: string; prefix?: string; label: string }[];
  quotes: string[];
}

export interface Reference {
  id: number;
  author: string;
  title: string;
  source: string;
  year: string;
  detail?: string;
  category?: 'perfilado' | 'vigilancia' | 'brokers' | 'filosofia' | 'espana' | 'historico' | 'neurociencia' | 'infraestructura' | 'vigilancia_fin' | 'geopolitica' | 'datos_comercio' | 'alternativas';
  url?: string;
  quote?: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  openingPhrase: string;
  layers: [LayerContent, LayerContent, LayerContent];
  closingPhrase: string;
  publishedDate: string;
  references?: Reference[];
}

export const articles: Article[] = [
  {
    id: 'nada-que-esconder',
    title: '"No tengo nada que esconder"',
    subtitle: 'Anatomía de la frase más peligrosa de la era digital',
    openingPhrase:
      'Estás generando datos ahora mismo. Esto es lo que revelan.',
    layers: [
      {
        title: 'Lo visible: lo que crees que compartes',
        accentColor: 'green',
        image:
          'https://mgx-backend-cdn.metadl.com/generate/images/1048399/2026-03-24/69c41781-d52e-410d-92ae-92cbf933af21.png',
        paragraphs: [
          'La mayoría de usuarios de internet cree que sus datos son lo que publican conscientemente: fotos, comentarios, mensajes. Pero el contenido explícito es solo la superficie de un iceberg de recopilación masiva que opera en capas invisibles.',
          'Google recopila 39 categorías distintas de datos por usuario: contactos, fotografías, documentos, búsquedas, historial de YouTube, interacciones con anuncios, datos de llamadas y detalles de ubicación. Procesa más de 3.500 millones de búsquedas diarias, cada una almacenada y vinculada a un perfil. En 2018, Associated Press y la Universidad de Princeton confirmaron que Google seguía rastreando la ubicación de los usuarios incluso después de que estos desactivaran el "Historial de ubicaciones". Correos internos desclasificados revelaron que Google celebró una reunión de emergencia el día de la publicación; sus propios ingenieros reprocharon a la compañía haber engañado a los usuarios. Resultado: 391,5 millones de dólares en acuerdos con 40 estados norteamericanos.',
          'Facebook/Meta acumula entre 90 y 52.000 puntos de datos por usuario, dependiendo de si se cuentan solo los explícitos o también los inferidos. Tras Cambridge Analytica, se revelaron 98 categorías de "datos personales": desde información demográfica hasta etiquetas como "madres según tipo (deportista, trendy, etc.)", "cuánto gastará el usuario en su próximo coche" o "comprador frecuente de alcohol".',
          'Los llamados "perfiles sombra" (shadow profiles) de Facebook recogen datos sobre personas que nunca se han registrado en la plataforma, a partir de contactos subidos por otros usuarios, reconocimiento facial en fotos y cookies en webs externas. Un estudio de 2022 demostró que Facebook puede rastrear el 40% del tiempo de navegación tanto de usuarios como de no usuarios. Los no usuarios no pueden solicitar la eliminación de sus datos sin crear una cuenta: una paradoja kafkiana señalada en la propia audiencia del Congreso de EE.UU.',
        ],
        stats: [
          { value: 3500, suffix: 'M', label: 'búsquedas diarias procesadas por Google' },
          { value: 52000, label: 'puntos de datos por usuario en Meta (inferidos)' },
          { value: 391, suffix: 'M', prefix: '$', label: 'multa colectiva a Google por rastreo oculto' },
          { value: 40, suffix: '%', label: 'de tu navegación rastreada aunque no tengas cuenta' },
        ],
        quotes: [
          'Si el servicio es gratuito, el producto eres tú. Pero la realidad es peor: no eres el producto, eres la materia prima de una cadena de extracción industrial.',
        ],
      },
      {
        title: 'Lo oculto: metadatos, patrones y perfilado conductual',
        accentColor: 'cyan',
        image:
          'https://mgx-backend-cdn.metadl.com/generate/images/1048399/2026-03-24/de5df12f-2ec5-4d9d-ae46-034e57b8b384.png',
        paragraphs: [
          'La distinción entre contenido y metadatos es el punto ciego fundamental del debate sobre privacidad. El contenido es lo que dices; los metadatos son a quién llamas, cuándo, durante cuánto tiempo, desde dónde, con qué frecuencia, en qué orden. El general Michael Hayden — exdirector de la NSA y de la CIA — declaró en la Universidad Johns Hopkins: "We kill people based on metadata" (Matamos personas basándonos en metadatos). No era una hipérbole: The Intercept reveló que el programa de drones de EE.UU. usaba metadatos telefónicos para localizar y ejecutar objetivos.',
          'El estudio MetaPhone de Stanford (publicado en PNAS, 2016) lo demostró empíricamente: con los metadatos telefónicos de 823 voluntarios, los investigadores infirieron condiciones médicas específicas (esclerosis múltiple, arritmia cardíaca), posesión de armas de fuego, afiliaciones religiosas y situaciones financieras. El 57% de los participantes había realizado al menos una llamada médica. Solo con los patrones de llamada — sin escuchar ni una palabra — reconstruyeron vidas completas.',
          'El investigador Michal Kosinski demostró que los "Me gusta" de Facebook predicen orientación sexual (88% de precisión en hombres), raza (95%), afiliación política (85%) y religión (82%). Solo el 5% de los usuarios homosexuales había dado "Me gusta" a contenido explícitamente relacionado con la homosexualidad. Con 10 "Me gusta", un algoritmo evalúa tu personalidad mejor que un compañero de trabajo; con 70, mejor que un amigo; con 150, mejor que un familiar; y con 300 "Me gusta", mejor que tu pareja.',
          'Los datos no solo dicen quién eres ahora: predicen quién serás. Target, la cadena de supermercados, desarrolló un modelo que identificaba clientas embarazadas con 25 productos. Un padre de Minneapolis irrumpió furioso en una tienda porque su hija adolescente recibía cupones para ropa de bebé. Cuando el gerente llamó para disculparse, el padre respondió: "Resulta que ha habido actividades en mi casa de las que no estaba completamente enterado. Sale de cuentas en agosto." El algoritmo lo supo antes que el padre.',
        ],
        stats: [
          { value: 88, suffix: '%', label: 'de precisión prediciendo orientación sexual con "Me gusta"' },
          { value: 300, label: '"Me gusta" para que un algoritmo te conozca mejor que tu pareja' },
          { value: 83, suffix: '%', label: 'de precisión prediciendo episodios depresivos con tu móvil' },
          { value: 25, label: 'productos bastaron para que Target supiera de un embarazo antes que el padre' },
        ],
        quotes: [
          'Los metadatos cuentan absolutamente todo sobre la vida de alguien. Si tienes suficientes metadatos, no necesitas realmente el contenido. — Stewart Baker, ex consejero general de la NSA',
        ],
      },
      {
        title: 'Lo invisible: vigilancia estatal, poder político y el mercado de datos',
        accentColor: 'magenta',
        image:
          'https://mgx-backend-cdn.metadl.com/generate/images/1048399/2026-03-24/ab6ed0fc-604d-4d4f-a38c-4e112fc0edf8.png',
        paragraphs: [
          'El 6 de junio de 2013, Edward Snowden filtró documentos que revelaron la mayor infraestructura de vigilancia masiva de la historia. PRISM daba acceso directo a los servidores de Microsoft, Google, Facebook y Apple — representando el 91% de las comunicaciones de internet adquiridas bajo la Sección 702. XKeyscore, con 700 servidores en 150 ubicaciones, permitía buscar correos, historiales y redes sociales sin orden judicial. TEMPORA interceptaba más de 200 cables submarinos de fibra óptica; 850.000 personas tenían acceso a los datos. Boundless Informant documentó 97.000 millones de piezas de inteligencia recopiladas solo en marzo de 2013.',
          'La vigilancia tiene un historial documentado de abuso político. El FBI vigiló a Martin Luther King con escuchas y agentes infiltrados, enviándole una carta anónima interpretada como incitación al suicidio. En 2022, Citizen Lab documentó que al menos 65 personas fueron espiadas con Pegasus en España: presidentes de la Generalitat, eurodiputados, periodistas y activistas. Google mantiene "Sensorvault" con datos de localización de 592 millones de cuentas; las órdenes de geolocalización aumentaron un 1.500% entre 2017 y 2018. Jorge Molina fue encarcelado 6 días por un asesinato que no cometió: sus datos de localización lo situaban en las cercanías.',
          'Detrás de las plataformas existe un mercado de datos personales valorado en 323.000 millones de dólares, con más de 4.000 data brokers. Acxiom posee datos de 700 millones de consumidores con hasta 3.000 puntos de datos por persona. Listas de 1.000 personas con condiciones de salud específicas — anorexia, depresión, abuso de sustancias — se venden por 79 dólares. Fog Data Science vende acceso a datos de localización de 250 millones de dispositivos a policías por entre 6.000 y 9.000 dólares anuales. Clearview AI construyó una base de datos de más de 50.000 millones de imágenes faciales y acumuló más de 100 millones de euros en multas que simplemente ignora.',
          'El concepto "Harvest Now, Decrypt Later" describe cómo estados recopilan datos cifrados hoy sabiendo que la computación cuántica futura permitirá descifrarlos. Pero el riesgo no es solo tecnológico: es político. Edwin Black documentó cómo la tecnología de tarjetas perforadas de IBM permitió al régimen nazi usar datos censales para identificar judíos y disidentes. Perforación 3 significaba homosexual; perforación 8 designaba judío. En Francia, René Carmille saboteó las operaciones censales: el 75% de los judíos holandeses murió, frente al 25% de los franceses. Los datos del censo eran legales, rutinarios y aparentemente inocuos. El régimen que los utilizó fue el que los convirtió en armas.',
        ],
        stats: [
          { value: 323, suffix: 'B', prefix: '$', label: 'mercado global de datos personales en 2024' },
          { value: 97, suffix: 'B', label: 'piezas de inteligencia recopiladas por la NSA en un solo mes' },
          { value: 65, label: 'personas espiadas con Pegasus en España (CatalanGate)' },
          { value: 50, suffix: 'B', label: 'imágenes faciales en la base de datos de Clearview AI' },
        ],
        quotes: [
          'Argumentar que no te importa la privacidad porque no tienes nada que esconder es como decir que no te importa la libertad de expresión porque no tienes nada que decir. — Edward Snowden',
        ],
      },
    ],
    closingPhrase:
      'La pregunta no es qué escondes. La pregunta es: ¿quién tiene el poder de decidir qué es lo que debiste haber escondido?',
    publishedDate: '2026-03-24',
    references: [
      // ─── PERFILADO CONDUCTUAL ───
      { id: 1, author: 'Kosinski et al. — PNAS (2013)', title: 'Predicción de atributos personales con "Me gusta"', source: 'Universidad de Cambridge / Stanford. 58.000 voluntarios', year: '2013', category: 'perfilado', quote: 'Los "Me gusta" de Facebook predicen raza (95%), orientación sexual (88%), afiliación política (85%), religión (82%), consumo de sustancias (73%). Solo el 5% de usuarios homosexuales había dado like a contenido explícito.', url: 'https://www.pnas.org/doi/10.1073/pnas.1218772110' },
      { id: 2, author: 'Youyou, Kosinski & Stillwell — PNAS (2015)', title: 'Algoritmos vs. humanos en evaluación de personalidad', source: 'Universidad de Cambridge. 86.000 voluntarios', year: '2015', category: 'perfilado', quote: 'Con 10 likes, el algoritmo evalúa la personalidad mejor que un compañero de trabajo; con 70 mejor que un amigo; con 150 mejor que un familiar; con 300 mejor que la pareja.', url: 'https://www.cam.ac.uk/research/news/computers-using-digital-footprints-are-better-judges-of-personality-than-friends-and-family' },
      { id: 3, author: 'Mayer & Mutchler — Stanford (MetaPhone Study)', title: 'Inferencia de datos sensibles con metadatos telefónicos', source: 'Berkeley Technology Law Journal / PNAS, 2016. 823 voluntarios', year: '2016', category: 'perfilado', quote: 'Con metadatos telefónicos se infirieron condiciones médicas (esclerosis múltiple, arritmia), posesión de armas, afiliaciones religiosas y situaciones financieras. Sin escuchar ni una llamada.', url: 'https://engineering.stanford.edu/news/stanford-students-show-phone-record-surveillance-can-yield-vast-amounts-information' },
      { id: 4, author: 'Target / Andrew Pole (2012)', title: 'Predicción de embarazos con 25 productos', source: 'New York Times Magazine. Charles Duhigg', year: '2012', category: 'perfilado', quote: '25 productos permiten predecir embarazos antes de que las propias mujeres lo sepan, estimando la fecha probable de parto. El algoritmo informó al padre de una adolescente antes que ella misma.', url: 'https://www.nytimes.com/2012/02/19/magazine/shopping-habits.html' },
      { id: 5, author: 'Tactile Typing & Depression — Nature Sci. Reports', title: 'Patrones de tecleo y detección de depresión', source: 'npj / Scientific Reports', year: '2019', category: 'perfilado', quote: 'Los patrones de tecleo en pantalla —velocidad, pausas, ritmo— discriminan entre personas con tendencia depresiva y controles sanos.', url: 'https://www.nature.com/articles/s41598-019-50002-9' },
      { id: 6, author: 'Fenotipado digital — npj Digital Medicine', title: 'Predicción de episodios depresivos con smartphone', source: 'Revisión de 118 artículos. Nature', year: '2023', category: 'perfilado', quote: 'Los sensores del smartphone predicen episodios depresivos con 83% de precisión, detectan fases maníacas por variabilidad en llamadas salientes y anticipan recaídas en trastornos bipolares.', url: 'https://www.nature.com/articles/s41746-023-00977-7' },
      { id: 7, author: 'Stewart Baker — Ex Consejero General NSA', title: 'Cita sobre metadatos', source: 'Citado por múltiples fuentes', year: '2014', category: 'perfilado', quote: '"Los metadatos te dicen absolutamente todo sobre la vida de alguien. Si tienes suficientes metadatos, realmente no necesitas contenido."', url: 'https://www.nybooks.com/online/2014/05/10/we-kill-people-based-metadata/' },
      { id: 8, author: 'Facebook / Meta — Shadow Profiles', title: 'Rastreo del 40% de la navegación de usuarios y no-usuarios', source: 'arXiv:2202.04131. Estudio académico peer-reviewed', year: '2022', category: 'perfilado', quote: 'Facebook puede rastrear el 40% del tiempo de navegación tanto de usuarios como de no-usuarios, generando predicciones precisas de edad, género y otros atributos sin consentimiento.', url: 'https://arxiv.org/abs/2202.04131' },
      { id: 9, author: 'Google — Location Tracking (AP/Princeton)', title: 'Rastreo de ubicación con historial desactivado', source: 'Investigación Associated Press confirmada por Universidad de Princeton', year: '2018', category: 'perfilado', quote: 'Google rastreaba la ubicación de usuarios incluso con "Historial de ubicaciones" desactivado. Correos internos revelaron que Google celebró reunión de emergencia el día de la publicación.', url: 'https://learningenglish.voanews.com/a/report-google-still-tracks-you-even-with-location-history-off/4529833.html' },
      { id: 10, author: 'Google — Multa $391.5M', title: 'Mayor multa colectiva por privacidad en EE.UU.', source: '40 estados de EE.UU.', year: '2022', category: 'perfilado', quote: 'Google acordó pagar 391,5 millones de dólares por rastreo de ubicación sin consentimiento claro a 40 fiscales generales estatales.', url: 'https://www.pbs.org/newshour/politics/google-settles-charges-of-user-location-tracking-charges-for-391-5-million' },
      // ─── VIGILANCIA ESTATAL ───
      { id: 11, author: 'General Michael Hayden — Johns Hopkins', title: '"We kill people based on metadata"', source: 'Ex Director NSA y CIA. Debate público en Johns Hopkins University', year: '2014', category: 'vigilancia', quote: '"We kill people based on metadata." Documentado por David Cole en The New York Review of Books, 10 mayo 2014.', url: 'https://www.nybooks.com/online/2014/05/10/we-kill-people-based-metadata/' },
      { id: 12, author: 'PRISM — NSA', title: 'Acceso directo a servidores de Google, Facebook, Microsoft, Apple', source: 'Documentos Snowden. Tribunal FISA 2011', year: '2007/2013', category: 'vigilancia', quote: 'Representaba el 91% de las ~250M comunicaciones de internet adquiridas anualmente bajo Sección 702 de FISA.', url: 'https://epic.org/documents/epic-v-doj-prism/' },
      { id: 13, author: 'XKeyscore — NSA', title: '"El Google de las comunicaciones privadas del mundo"', source: 'The Intercept / TechCrunch. 700 servidores en 150 ubicaciones', year: '2013', category: 'vigilancia', quote: 'Algunos sitios ingerían más de 20 TB/día. Analistas podían acceder a correos e historial de navegación sin orden judicial.', url: 'https://theintercept.com/2015/07/01/nsas-google-worlds-private-communications/' },
      { id: 14, author: 'TEMPORA — GCHQ, Reino Unido', title: 'Interceptación de 200+ cables submarinos', source: 'Wikipedia / Privacy International. TEDH 2018', year: '2013', category: 'vigilancia', quote: 'Interceptación de 200+ cables submarinos de fibra óptica (99% del tráfico intercontinental). 850.000 personas con acceso. El TEDH declaró la vigilancia masiva británica ilegal en septiembre de 2018.', url: 'https://privacyinternational.org/long-read/1678/gchq-tapping-international-fibre-optic-cables-shares-intel-nsa' },
      { id: 15, author: 'Edward Snowden — Declaraciones', title: 'Capacidad de interceptar comunicaciones de cualquiera', source: 'Múltiples fuentes documentadas', year: '2013–2019', category: 'vigilancia', quote: '"Sentado en mi escritorio podía interceptar las comunicaciones de cualquiera: tú, tu contable, un juez federal o incluso el presidente."', url: 'https://en.wikipedia.org/wiki/Snowden_disclosures' },
      { id: 16, author: 'Boundless Informant — NSA', title: '97.000 millones de piezas de inteligencia en un mes', source: 'Documentos Snowden. The Guardian', year: '2013', category: 'vigilancia', quote: 'La NSA recopiló 97.000 millones de piezas de inteligencia de redes informáticas globales solo en marzo de 2013. ~500M comunicaciones alemanas interceptadas en un trimestre.', url: 'https://www.osw.waw.pl/en/publikacje/osw-commentary/2014-01-14/nsa-impact-wiretapping-scandal-german-american-relations' },
      { id: 17, author: 'COINTELPRO / FBI vs Martin Luther King', title: 'Vigilancia política y chantaje', source: 'Comité Church (1975). King Institute, Stanford', year: '1955–1975', category: 'vigilancia', quote: 'El FBI vigiló a King desde 1955 con escuchas y micrófonos. En 1964 envió carta anónima con material para chantaje, días antes de que recibiera el Nobel de la Paz.', url: 'https://kinginstitute.stanford.edu/federal-bureau-investigation-fbi' },
      { id: 18, author: 'Geofence Warrants — Google Sensorvault', title: 'Órdenes de geolocalización y arrestos erróneos', source: 'Harvard Law Review (2025). Suffolk University JHTL. EFF', year: '2017–2025', category: 'vigilancia', quote: 'Google mantiene datos de localización de 592M cuentas. Las órdenes de geolocalización aumentaron un 1.500% entre 2017–2018. Jorge Molina fue arrestado por un asesinato que no cometió basándose en sus datos de ubicación.', url: 'https://harvardlawreview.org/blog/2025/02/much-ado-about-geofence-warrants/' },
      { id: 19, author: 'Harvest Now, Decrypt Later (HNDL)', title: 'Recopilación de datos cifrados para descifrado cuántico futuro', source: 'NIST, NCSC (UK), ENISA. Encryption Consulting', year: '2024', category: 'vigilancia', quote: 'Estados recopilan datos cifrados hoy para descifrarlos con computación cuántica futura. El algoritmo de Shor rompería RSA-2048 en segundos vs. 300 billones de años para ordenadores clásicos.', url: 'https://www.encryptionconsulting.com/harvest-now-decrypt-later-preparing-for-the-quantum-threat/' },
      // ─── ESPAÑA / EUROPA ───
      { id: 20, author: 'CatalanGate — Citizen Lab', title: '65 personas espiadas con Pegasus/Candiru', source: 'Universidad de Toronto. Validado por Amnistía Internacional', year: '2022', category: 'espana', quote: '65 personas espiadas con Pegasus/Candiru: 4 presidentes de la Generalitat, presidentes del Parlamento catalán, eurodiputados, juristas, periodistas, activistas.', url: 'https://citizenlab.ca/research/catalangate-extensive-mercenary-spyware-operation-against-catalans-using-pegasus-candiru/' },
      { id: 21, author: 'Comité PEGA — Parlamento Europeo', title: 'Pegasus como herramienta de control ciudadano', source: 'Informe sobre uso de Pegasus en estados miembros de la UE', year: '2022', category: 'espana', quote: 'En Hungría, Pegasus fue "parte integral de un sistema para controlar y oprimir a los ciudadanos". En Polonia, el senador opositor Brejza fue vigilado mientras dirigía la campaña electoral opositora.', url: 'https://balkaninsight.com/2022/11/09/ep-report-poland-hungary-used-pegasus-to-control-citizens/' },
      { id: 22, author: 'AEPD — Multas 2024 (España)', title: 'Autoridad más activa de Europa en protección de datos', source: 'Agencia Española de Protección de Datos. Linklaters Tech Insights', year: '2024', category: 'espana', quote: 'En 2024 impuso multas récord por 35,6M€ (+19,4% vs 2023). Mayores: Google (10M), Vodafone España (8,15M), CaixaBank (7,14M).', url: 'https://techinsights.linklaters.com/post/102kcof/the-spanish-data-watchdog-ramps-up-enforcement-with-fines-totalling-over-35-5-mi' },
      { id: 23, author: 'AEPD vs Informa D&B', title: 'Sanción a data broker por procesamiento sin base legal', source: 'PPC Land', year: '2025', category: 'espana', quote: 'La AEPD sancionó al data broker Informa D&B con 1,8M€ por procesar datos de 1,6 millones de propietarios de negocios sin base legal válida.', url: 'https://ppc.land/spanish-data-protection-authority-orders-business-data-firm-to-delete-eu1-8-million-worth-of-records/' },
      { id: 24, author: 'Clearview AI — Multas Europa', title: '+100M€ en multas RGPD por base de datos facial', source: 'EDPB. Países Bajos, Francia, Italia, Grecia', year: '2022–2024', category: 'espana', quote: 'Clearview AI acumuló +100M€ en multas RGPD por su base de datos de 50.000M imágenes faciales. Países Bajos (30,5M€), Francia (20M€), Italia (20M€), Grecia (20M€). La empresa sigue operando.', url: 'https://www.edpb.europa.eu/news/national-news/2022/french-sa-fines-clearview-ai-eur-20-million_en' },
      { id: 25, author: 'Meta — Multa 1.200M€', title: 'Mayor multa RGPD individual de la historia', source: 'DPC Irlanda', year: '2023', category: 'espana', quote: 'Meta multada con 1.200M€ por transferencias ilegales de datos UE–EE.UU., determinando que la legislación de vigilancia estadounidense es incompatible con los derechos fundamentales europeos.', url: 'https://cms.law/en/int/publication/gdpr-enforcement-tracker-report/numbers-and-figures' },
      { id: 26, author: 'Amnistía Internacional — Pegasus España', title: 'Riesgo de impunidad de servicios de inteligencia', source: 'Amnistía Internacional', year: '2022', category: 'espana', quote: 'Amnistía Internacional validó de forma independiente los hallazgos de CatalanGate y denunció el riesgo de que los servicios de inteligencia actúen con total impunidad.', url: 'https://www.amnesty.org/en/latest/news/2022/05/spain-pegasus-spyware-scandal-reveals-risk-of-intelligence-services-acting-with-total-impunity/' },
      // ─── DATA BROKERS ───
      { id: 27, author: 'Mercado de Data Brokers — Market.us', title: 'Mercado valorado en 323.000 millones de dólares', source: 'Market.us', year: '2024', category: 'brokers', quote: 'Más de 4.000 empresas operan como intermediarios de datos. Crecimiento anual del 8%.', url: 'https://market.us/report/data-broker-market/' },
      { id: 28, author: 'FTC — Data Brokers Report', title: 'Categorías de clasificación de personas', source: 'Federal Trade Commission. 9 grandes data brokers analizados', year: '2014', category: 'brokers', quote: 'Los data brokers clasifican personas en categorías como "luchadores étnicos de segunda ciudad", "apenas sobreviviendo en el campo". Listas de personas con anorexia, depresión o abuso de sustancias (1.000 personas): 79 dólares.', url: 'https://www.ftc.gov/system/files/documents/reports/data-brokers-call-transparency-accountability-report-federal-trade-commission-may-2014/140527databrokerreport.pdf' },
      { id: 29, author: 'Acxiom / LiveRamp', title: '700 millones de consumidores, 3.000 puntos de datos por persona', source: 'Uno de los mayores data brokers del mundo', year: '2024', category: 'brokers', quote: 'Posee datos de 700 millones de consumidores en todo el mundo con hasta 3.000 puntos de datos por persona. El valor medio de los datos de una persona de 18–25 años: 0,36 dólares.', url: 'https://www.webfx.com/blog/internet/what-are-data-brokers-and-what-is-your-data-worth-infographic/' },
      { id: 30, author: 'Fog Data Science — EFF Investigation', title: 'Venta de datos de localización a policías', source: 'Electronic Frontier Foundation', year: '2022', category: 'brokers', quote: 'Vendía datos de localización de 250 millones de dispositivos a cuerpos policiales locales por 6.000–9.000 $/año sin necesidad de orden judicial.', url: 'https://www.eff.org/deeplinks/2022/06/what-fog-data-science-why-surveillance-company-so-dangerous' },
      { id: 31, author: 'FTC — Prohibición X-Mode / InMarket', title: 'Primera prohibición de venta de datos de localización', source: 'FTC', year: '2024', category: 'brokers', quote: 'La FTC prohibió por primera vez a dos empresas vender datos de localización precisa. En diciembre 2024, extendió la prohibición a Gravy Analytics y Mobilewalla.', url: 'https://www.eff.org/deeplinks/2024/12/federal-regulators-limit-location-brokers-selling-your-whereabouts-2024-review' },
      { id: 32, author: 'Cambridge Analytica — PNAS / Sage Journals', title: '5.000 puntos de datos sobre 230 millones de estadounidenses', source: 'Margaret Hu (2020). Big Data Surveillance', year: '2020', category: 'brokers', quote: 'Cambridge Analytica afirmó manejar 5.000 puntos de datos sobre 230 millones de estadounidenses, utilizando modelos psicográficos derivados de la investigación de Kosinski para targeting político.', url: 'https://journals.sagepub.com/doi/10.1177/2053951720938091' },
      { id: 33, author: 'Edith Ramirez — Presidenta FTC', title: 'Cita sobre conocimiento de los data brokers', source: 'FTC', year: '2014', category: 'brokers', quote: '"Los data brokers frecuentemente saben tanto —o incluso más— sobre nosotros que nuestra familia y amigos."', url: 'https://www.ftc.gov/news-events/news/press-releases/2014/05/ftc-recommends-congress-require-data-broker-industry-be-more-transparent-give-consumers-greater' },
      // ─── MARCO FILOSÓFICO / LEGAL ───
      { id: 34, author: 'Edward Snowden', title: 'Cita sobre privacidad y libertad de expresión', source: 'Múltiples entrevistas y conferencias', year: '2015', category: 'filosofia', quote: '"Decir que no te importa la privacidad porque no tienes nada que esconder es como decir que no te importa la libertad de expresión porque no tienes nada que decir."', url: 'https://www.goodreads.com/quotes/7308507-ultimately-arguing-that-you-don-t-care-about-the-right-to' },
      { id: 35, author: 'Glenn Greenwald — TED Talk "Why Privacy Matters"', title: 'La prueba de las contraseñas', source: 'TED', year: '2014', category: 'filosofia', quote: 'Propone una prueba directa: pide al interlocutor que entregue sus contraseñas de correo. Ninguna persona ha aceptado. Expone la hipocresía de Schmidt y Zuckerberg.', url: 'https://wordpress.lehigh.edu/comm298-398-2022/2022/10/16/glenn-greenwald-why-privacy-matters-ted-talk/' },
      { id: 36, author: 'Daniel J. Solove — "Nothing to Hide"', title: 'Errores lógicos del argumento "nada que esconder"', source: 'Yale University Press', year: '2011', category: 'filosofia', quote: 'Reduce privacidad a ocultamiento de delitos, invierte la carga de la prueba, comete falacia de composición al asumir que datos inofensivos individualmente son inofensivos agregados.', url: 'https://www.danielsolove.com/nothing-to-hide/' },
      { id: 37, author: 'Hannah Arendt — "La condición humana"', title: 'La vida pública y la profundidad del ser', source: 'Publicación original', year: '1958', category: 'filosofia', quote: '"Una vida vivida enteramente en público, en presencia de otros, se vuelve superficial. Aunque conserva su visibilidad, pierde la cualidad de surgir de un terreno más oscuro que debe permanecer oculto."', url: 'https://hac.bard.edu/amor-mundi/the-public-life-2015-08-23' },
      { id: 38, author: 'Alan Westin — "Privacy and Freedom"', title: 'Definición de privacidad y sus cuatro estados', source: 'Publicación original', year: '1967', category: 'filosofia', quote: 'Define privacidad como "la pretensión de individuos de determinar por sí mismos cuándo, cómo y en qué medida la información sobre ellos se comunica a otros". Cuatro estados: soledad, intimidad, anonimato y reserva.', url: 'https://iapp.org/news/a/alan-westins-legacy-of-privacy-and-freedom' },
      { id: 39, author: 'TC Alemán — Sentencia del Censo', title: 'Autodeterminación informativa', source: 'Bundesverfassungsgericht. Volkszählungsurteil', year: '1983', category: 'filosofia', quote: 'Crea el concepto de "autodeterminación informativa": el libre desarrollo de la personalidad presupone la protección del individuo contra la recopilación ilimitada de sus datos. Influyó directamente en el RGPD.', url: 'https://www.efdpo.eu/a-landmark-judgment-turns-40-the-german-census-judgment-of-1983/' },
      { id: 40, author: 'Bruce Schneier — "Data and Goliath"', title: 'Libertad vs. control', source: 'Publicación original', year: '2015', category: 'filosofia', quote: '"La verdadera elección no es seguridad vs. privacidad. La verdadera elección es libertad vs. control. La vigilancia nos hace sentir como presas."', url: 'https://www.schneier.com/news/archives/2015/03/security_guru_bruce_.html' },
      { id: 41, author: 'Michel Foucault — "Vigilar y castigar"', title: 'El Panóptico como metáfora del poder moderno', source: 'Panoptismo / Panóptico de Bentham', year: '1975', category: 'filosofia', quote: '"La visibilidad es una trampa". La vigilancia percibida genera autorregulación. Las personas ajustan su comportamiento por la posibilidad de ser observadas.', url: 'https://www.philosopheasy.com/p/panopticism-and-power-how-surveillance' },
      { id: 42, author: 'Byung-Chul Han — "Psicopolítica"', title: 'El smartphone como confesionario móvil', source: 'Publicación original', year: '2017', category: 'filosofia', quote: '"El smartphone no es solo un aparato de vigilancia eficaz; es también un confesionario móvil. Los residentes del panóptico digital se creen en libertad. La libertad resulta ser una forma de control."', url: 'https://amil.mohanan.net/posts/2018/02/psychopolitics-by-byung-chul-han/' },
      { id: 43, author: 'Jon Penney — "Chilling Effects"', title: 'Caída del 30% en tráfico a artículos sobre terrorismo en Wikipedia', source: 'Berkeley Technology Law Journal. Citizen Lab / SSRN', year: '2016', category: 'filosofia', quote: 'El tráfico a artículos de Wikipedia sobre terrorismo cayó ~30% tras las revelaciones de Snowden. El efecto fue persistente: no se recuperó con el tiempo.', url: 'https://citizenlab.ca/research/jon-penney-publishes-paper-chilling-effects-online-surveillance/' },
      { id: 44, author: 'PEN America — "Chilling Effects" Report', title: 'Autocensura de escritores por vigilancia', source: 'PEN America', year: '2013/2015', category: 'filosofia', quote: '85% de escritores expresó preocupación por la vigilancia gubernamental; 28% restringió actividades en redes sociales; 16% dejó de escribir sobre ciertos temas.', url: 'https://pen.org/report/chilling-effects/' },
      { id: 45, author: 'Shoshana Zuboff — "La era del capitalismo de vigilancia"', title: 'Definición de capitalismo de vigilancia', source: 'Publicación original', year: '2019', category: 'filosofia', quote: 'Nuevo orden económico que usa la experiencia humana como materia prima gratuita para prácticas ocultas de extracción, predicción y venta de comportamiento futuro.', url: 'https://www.philosopheasy.com/p/michel-foucault-and-surveillance' },
      { id: 46, author: 'Edward Snowden — Privacidad como derecho fundacional', title: 'La privacidad como sustrato de todos los derechos', source: 'Múltiples fuentes', year: '2015', category: 'filosofia', quote: '"La privacidad es el sustrato de todos los demás derechos. Si te quitan la privacidad, puedes perder cualquier otro derecho."', url: 'https://www.rightsanddissent.org/news/privacy-fountainhead-rights-ed-snowden-says-need-protect/' },
      { id: 47, author: 'DUDH Art. 12 / CEDH Art. 8 / Carta UE Arts. 7–8', title: 'Marco legal internacional de la privacidad', source: 'Naciones Unidas / Consejo de Europa / UE', year: '1948–2000', category: 'filosofia', quote: 'Artículo 12 DUDH (1948): protección contra "injerencias arbitrarias en la vida privada". Artículo 8 CEDH (1950): derecho al respeto de la vida privada y las comunicaciones.', url: 'https://en.wikipedia.org/wiki/Nothing_to_hide_argument' },
      // ─── HISTÓRICO ───
      { id: 48, author: 'Edwin Black — "IBM and the Holocaust"', title: 'Tarjetas perforadas IBM y listas de exterminio', source: 'Crown Publishers. ISBN 0-609-60799-5', year: '2001', category: 'historico', quote: 'El censo prusiano de 1933, procesado por la filial alemana de IBM (Dehomag), transformó registros rutinarios en listas de exterminio. Código: perforación 3 = "homosexual", perforación 8 = "judío".', url: 'https://en.wikipedia.org/wiki/IBM_and_the_Holocaust' },
      { id: 49, author: 'René Carmille — Francia, 1940–1942', title: 'Sabotaje censal que salvó vidas', source: 'Documentación histórica', year: '1940–1942', category: 'historico', quote: 'Carmille saboteó las operaciones censales impidiendo que el dato de religión se perforara en las tarjetas. Resultado: el 75% de los judíos holandeses murió; el 25% de los franceses.', url: 'https://blogs.oregonstate.edu/glencora/2017/11/27/ibm-holocaust/' },
      { id: 50, author: 'Cardenal Richelieu (atrib.) — S. XVII', title: 'Con suficientes datos, siempre hay acusación posible', source: 'Atribución disputada; puede provenir de sus agentes o del retórico romano Quintiliano', year: 'S. XVII', category: 'historico', quote: '"Dadme seis líneas escritas por la mano del hombre más honesto y encontraré en ellas algo para hacerle colgar."', url: 'https://www.brainyquote.com/quotes/cardinal_richelieu_183310' },
      // ─── ADICIONALES ───
      { id: 51, author: 'Facebook Shadow Profiles — Congreso EE.UU.', title: 'Zuckerberg reconoce recopilación de datos de no usuarios', source: 'TechCrunch. Audiencia Luján-Zuckerberg, abril 2018', year: '2018', category: 'vigilancia', quote: 'El representante Ben Luján preguntó directamente si Facebook tenía perfiles de personas no registradas. Zuckerberg reconoció que recopilaban datos de no usuarios "por razones de seguridad".', url: 'https://techcrunch.com/2018/04/11/facebook-shadow-profiles-hearing-lujan-zuckerberg/' },
      { id: 52, author: 'Facebook — 98 categorías publicitarias', title: 'Categorías de targeting de Meta', source: 'Knapton Wright / BroadbandSearch', year: '2024', category: 'perfilado', quote: 'Meta utiliza 98 categorías de datos personales para targeting: desde información demográfica hasta "madres según tipo (deportista, trendy)", "cuánto gastará en su próximo coche".', url: 'https://www.knaptonwright.co.uk/insights/personal-information-facebook/' },
      { id: 53, author: '404 Media — Location Data & Doctor Visits', title: 'Datos de salud como herramientas de vigilancia', source: '404 Media', year: '2024', category: 'brokers', quote: 'Una empresa de datos de localización ofreció a la policía rastrear objetivos a través de sus visitas médicas, revelando cómo los datos de salud se convierten en herramientas de vigilancia.', url: 'https://www.404media.co/email/8e275617-3c4c-4837-92d3-79d74f595fc4/' },
      { id: 54, author: 'Bruce Schneier — "The Eternal Value of Privacy"', title: 'La privacidad protege de los abusos de poder', source: 'schneier.com', year: '2006', category: 'filosofia', quote: '"El argumento \'nada que esconder, nada que temer\' malinterpreta completamente en qué consiste la privacidad. [...] La privacidad nos protege de los abusos de poder de quienes tienen autoridad."', url: 'https://www.schneier.com/essays/archives/2006/05/the_eternal_value_of.html' },
      { id: 55, author: '"Nada que esconder" — Origen nazi (atrib.)', title: 'Orígenes de la frase en propaganda nazi', source: 'TheJournal.ie (2015). Snowden declaraciones', year: '2015', category: 'historico', quote: 'Snowden declaró que la frase "si no tienes nada que esconder, no tienes nada que temer" tiene "orígenes literalmente en la propaganda nazi".', url: 'https://www.thejournal.ie/surveillance-bill-goebbels-2426368-Nov2015/' },
      { id: 56, author: 'The Intercept — Drone Program & Metadata', title: 'Programa de drones basado en metadatos telefónicos', source: 'The Intercept', year: '2014', category: 'vigilancia', quote: 'El programa de drones de EE.UU. usaba metadatos telefónicos para localizar y ejecutar objetivos. Un ex piloto declaró: "Realmente no perseguimos personas: perseguimos sus teléfonos."', url: 'https://theintercept.com/2015/07/01/nsas-google-worlds-private-communications/' },
      { id: 57, author: 'Elizabeth Stoycheff — Wayne State University', title: 'Autocensura bajo vigilancia percibida', source: 'Wayne State University', year: '2016', category: 'filosofia', quote: 'Incluso quienes afirmaban "no tener nada que esconder" modificaban su comportamiento político online: expresaban opiniones en mayoría, pero las suprimían en minoría bajo vigilancia percibida.', url: 'https://www.eff.org/deeplinks/2016/05/when-surveillance-chills-speech-new-studies-show-our-rights-free-association' },
      { id: 58, author: 'Schrems I (2015) y Schrems II (2020) — TJUE', title: 'Invalidación de Safe Harbor y Privacy Shield', source: 'Max Schrems. TJUE', year: '2015/2020', category: 'espana', quote: 'El TJUE invalidó sucesivamente Safe Harbor y Privacy Shield, determinando que la legislación de vigilancia estadounidense (Sección 702 FISA) es incompatible con los derechos fundamentales europeos.', url: 'https://www.edpb.europa.eu/news/national-news/2022/french-sa-fines-clearview-ai-eur-20-million_en' },
    ],
  },
  {
    id: 'gesto-3-segundos',
    title: 'El gesto de 3 segundos que sostiene un imperio invisible',
    subtitle: 'Cómo un pago con tarjeta activa una cadena de poder que atraviesa bancos, redes, estados y continentes',
    openingPhrase:
      'Cada vez que acercas tu tarjeta a un terminal, activas una cadena de poder invisible.',
    layers: [
      {
        title: 'UNA persona: el microcomportamiento que te delata',
        accentColor: 'green',
        image:
          'https://mgx-backend-cdn.metadl.com/generate/images/1048399/2026-03-24/25c8a620-d1bb-4d9c-8b10-774bf42f154a.png',
        paragraphs: [
          'Cuando una tarjeta toca el terminal, un mensaje codificado en el estándar ISO 8583 recorre la cadena POS → procesador adquirente → red de pago (VisaNet o Banknet) → banco emisor → autorización de vuelta, en un viaje de ida y vuelta que tarda entre 500 milisegundos (contactless) y 3 segundos. En ese parpadeo se generan más de 40 puntos de datos: número de cuenta, nombre del titular, monto, divisa, fecha y hora exacta, código de categoría del comercio, nombre y dirección del establecimiento, identificador del terminal, método de entrada, código de autorización, y — en transacciones online — dirección IP, huella digital del dispositivo, dirección de envío y correo electrónico.',
          'Estos datos no desaparecen. El banco emisor los retiene 7-10 años. Visa almacena 500 petabytes solo en su centro de datos de Ashburn, Virginia — un búnker de 18 hectáreas con muros de hormigón de 45 centímetros y 28 megavatios de respaldo energético. El resultado es una radiografía financiera permanente de cada individuo conectado al sistema.',
          'La neurociencia ha demostrado que pagar con tarjeta no es psicológicamente equivalente a pagar en efectivo. El concepto de "pain of paying" describe cómo el efectivo genera un dolor visceral al ver físicamente cómo el dinero abandona tus manos, mientras que la tarjeta desacopla temporalmente la compra del pago. Estudiantes de MBA pujaban hasta un 100% más por entradas cuando se les decía que pagarían con tarjeta frente a efectivo.',
          'La progresión desde el efectivo hasta los "pagos invisibles" (Uber, Amazon Go) no es accidental: cada iteración elimina una capa de fricción psicológica. Los pagos contactless son el método menos doloroso de todos, y quienes los usan con mayor frecuencia experimentan aún menos dolor — un efecto de habituación que erosiona progresivamente el mecanismo de autocontrol. La deuda de tarjetas de crédito en EE.UU. ya supera $1,2 billones.',
        ],
        stats: [
          { value: 2200, suffix: 'M', label: 'pagos con tarjeta cada día en el mundo' },
          { value: 40, label: 'puntos de datos generados por cada transacción' },
          { value: 500, suffix: 'PB', label: 'almacenados solo en el búnker de Visa en Virginia' },
          { value: 100, suffix: '%', label: 'más se gasta con tarjeta vs. efectivo en estudios' },
        ],
        quotes: [
          'La tarjeta de crédito no solo "suelta el freno" reduciendo el dolor, sino que "pisa el acelerador" activando intensamente el sistema de recompensa, con patrones neurales similares a los de conductas adictivas. — Banker, Dunfield, Huang y Prelec, Scientific Reports (Nature), 2021',
        ],
      },
      {
        title: 'MILES de personas: el mercado como panóptico',
        accentColor: 'cyan',
        image:
          'https://mgx-backend-cdn.metadl.com/generate/images/1048399/2026-03-24/7896ab27-67a0-4c4b-9e4f-05406764a289.png',
        paragraphs: [
          'Cuando miles de personas pagan con tarjeta en una ciudad, un barrio o un sector comercial, los datos individuales se agregan en patrones que revelan mucho más que la suma de sus partes. Los servicios de valor añadido de Visa generaron $17.500 millones en el año fiscal 2025 — el 44% de sus ingresos totales. Mastercard vende datos a través de Amazon Web Services, LiveRamp, Snowflake y The Trade Desk. Google tiene acceso al 70% de las transacciones con tarjeta en EE.UU. para atribución publicitaria.',
          'Para una compra de $100 con tarjeta de crédito en EE.UU., el comerciante paga aproximadamente $2,00-$2,65 en comisiones. Las comisiones totales alcanzaron un récord de $187.200 millones en 2024 — cuadruplicando desde 2010. Son el mayor coste operativo para los comercios después de la mano de obra. Las comisiones encarecen los precios al consumidor en ~$1.200 por hogar al año, una transferencia invisible que pagan incluso quienes pagan en efectivo.',
          'El sistema de pagos funciona simultáneamente como infraestructura de vigilancia gubernamental. Las instituciones financieras presentaron 4,6 millones de Informes de Actividad Sospechosa ante FinCEN en 2023. Para 2024, se presentaban más de 10.000 cada día. Sin embargo, menos del 0,3% se vinculan directamente a investigaciones, revelando un sistema de vigilancia masiva con eficacia cuestionable.',
          'Las revelaciones de Snowden expusieron el programa "Follow the Money" de la NSA, que monitorizaba pagos internacionales y datos de tarjetas de crédito. Su base de datos, Tracfin, contenía 180 millones de registros, de los cuales el 84% eran transacciones de tarjeta. El coste global de cumplimiento regulatorio (KYC/AML) alcanza los $206.000 millones anuales.',
        ],
        stats: [
          { value: 187, suffix: 'B', prefix: '$', label: 'en comisiones de tarjetas en EE.UU. en 2024' },
          { value: 70, suffix: '%', label: 'de transacciones con tarjeta en EE.UU. accesibles por Google' },
          { value: 1200, prefix: '$', label: 'coste oculto por hogar al año en comisiones' },
          { value: 10000, label: 'informes de actividad sospechosa presentados cada día' },
        ],
        quotes: [
          'Aunque los datos que ofrece Mastercard puedan estar agregados, claramente se usan para identificar objetivos y alcanzarlos a nivel individual. — U.S. PIRG',
        ],
      },
      {
        title: 'MILLONES de personas: la infraestructura del poder global',
        accentColor: 'magenta',
        image:
          'https://mgx-backend-cdn.metadl.com/generate/images/1048399/2026-03-24/09972571-ca41-42c3-b957-f0bcd0c9531d.png',
        paragraphs: [
          'Visa, Mastercard y UnionPay procesan conjuntamente el 97% de todas las transacciones de tarjeta de crédito del mundo. Visa opera 4.700 millones de tarjetas en 200 países. SWIFT conecta 11.000 instituciones financieras transmitiendo 53,3 millones de mensajes diarios que mueven aproximadamente $7,5 billones al día. Dos corporaciones y una red de mensajería median la mayor parte del comercio global.',
          'Tras la invasión de Ucrania, siete bancos rusos fueron desconectados de SWIFT. Visa y Mastercard suspendieron operaciones. El rublo se desplomó un 30%. En Irán, la desconexión de SWIFT redujo las exportaciones de petróleo de 2,2 millones a 700.000 barriles/día y el PIB se contrajo un 5,8%. WikiLeaks perdió el 95% de sus ingresos cuando Visa, Mastercard y PayPal bloquearon donaciones — sin cargos judiciales. En Afganistán, EE.UU. congeló ~$9.000 millones en reservas y el 95% de los hogares experimentó insuficiencia alimentaria.',
          'La Operation Choke Point (2012-2017) presionó a bancos para cerrar cuentas de industrias legales pero "indeseables". Nigel Farage reveló un dossier interno de Coutts Bank que afirmaba que sus opiniones eran "incompatibles con Coutts". En Canadá, el gobierno congeló entre 206 y 257 cuentas bancarias de manifestantes — un tribunal federal dictaminó que fue irrazonable. Mastercard forzó la eliminación del 80% del contenido de Pornhub — regulación de facto por una empresa de pagos.',
          'El efectivo es la última tecnología de pago que funciona sin electricidad, sin internet, sin permiso de intermediarios y sin generar datos. Abandonar el efectivo excluye a los 1.300 millones de adultos no bancarizados del mundo. 134 países exploran monedas digitales de banco central (CBDCs), pero estas introducen capacidades sin precedentes: en China, el yuan digital fue programado con fecha de caducidad para forzar el gasto. El dinero programable permite restringir en qué se puede gastar.',
        ],
        stats: [
          { value: 97, suffix: '%', label: 'del crédito mundial procesado por 3 empresas' },
          { value: 7.5, suffix: 'T', prefix: '$', label: 'movidos diariamente a través de SWIFT' },
          { value: 1300, suffix: 'M', label: 'adultos no bancarizados excluidos del sistema' },
          { value: 134, label: 'países explorando monedas digitales de banco central' },
        ],
        quotes: [
          'Si perdemos el control de nuestro dinero, perdemos el control de nuestro destino económico. — Christine Lagarde, presidenta del BCE',
        ],
      },
    ],
    closingPhrase:
      'La pregunta que define esta era no es si los pagos digitales son convenientes — lo son — sino quién tiene el interruptor, y ¿qué ocurre cuando lo apaga?',
    publishedDate: '2026-03-24',
    references: [
      // ─── NEUROCIENCIA Y PSICOLOGÍA DEL PAGO ───
      { id: 1, author: 'Banker, Dunfield, Huang & Prelec', title: 'Neural Mechanisms of Credit Card Spending', source: 'Scientific Reports (Nature), 2021', year: '2021', category: 'neurociencia', quote: 'La tarjeta de crédito no solo "suelta el freno" reduciendo el dolor, sino que "pisa el acelerador" activando intensamente el sistema de recompensa, con patrones neurales similares a conductas adictivas.', url: 'https://www.nature.com/articles/s41598-021-83488-3' },
      { id: 2, author: 'Drazen Prelec & Duncan Simester — MIT', title: 'Always Leave Home Without It: Credit Card Effect on Willingness to Pay', source: 'Marketing Letters, 2001', year: '2001', category: 'neurociencia', quote: 'Estudiantes de MBA pujaban hasta un 100% más por entradas deportivas cuando se les decía que pagarían con tarjeta frente a efectivo.', url: 'https://link.springer.com/article/10.1023/A:1008196717017' },
      { id: 3, author: 'Zellermayer — "The Pain of Paying"', title: 'The Pain of Paying: Psychological Foundations', source: 'Carnegie Mellon University, Tesis doctoral, 1996', year: '1996', category: 'neurociencia', quote: 'Acuña el concepto "pain of paying": el efectivo genera dolor visceral al ver físicamente cómo el dinero abandona las manos; la tarjeta desacopla temporalmente la compra del pago.' },
      { id: 4, author: 'Knutson et al. — Stanford', title: 'Neural Predictors of Purchases', source: 'Neuron, 2007', year: '2007', category: 'neurociencia', quote: 'La activación de la ínsula anterior (región del dolor) predice la decisión de no comprar. Los pagos con tarjeta suprimen esta activación, eliminando el "freno" natural del gasto.', url: 'https://www.cell.com/neuron/fulltext/S0896-6273(06)00904-4' },
      { id: 5, author: 'Shah et al. — Contactless Payment Habituation', title: 'Contactless Payments and Spending Behavior', source: 'Journal of Marketing Research, 2023', year: '2023', category: 'neurociencia', quote: 'Los pagos contactless son el método menos doloroso; quienes los usan con mayor frecuencia experimentan aún menos dolor — un efecto de habituación que erosiona el mecanismo de autocontrol.' },
      { id: 6, author: 'Federal Reserve Bank of New York', title: 'Household Debt and Credit Report Q4 2024', source: 'New York Fed', year: '2024', category: 'neurociencia', quote: 'La deuda de tarjetas de crédito en EE.UU. superó $1,2 billones (trillones americanos), un récord histórico.', url: 'https://www.newyorkfed.org/microeconomics/hhdc' },
      // ─── INFRAESTRUCTURA DE PAGOS ───
      { id: 7, author: 'ISO 8583 — Estándar internacional', title: 'Financial Transaction Card Originated Messages', source: 'ISO/IEC 8583. Estándar de mensajería para transacciones con tarjeta', year: '1987/2023', category: 'infraestructura', quote: 'Cada transacción genera un mensaje ISO 8583 con más de 40 puntos de datos: número de cuenta, monto, divisa, código de comercio, terminal, método de entrada, código de autorización.' },
      { id: 8, author: 'Visa Inc. — Ashburn Data Center', title: 'VisaNet Processing Center', source: 'Visa Corporate. Múltiples fuentes', year: '2024', category: 'infraestructura', quote: 'Visa almacena 500 petabytes solo en su centro de datos de Ashburn, Virginia — un búnker de 18 hectáreas con muros de hormigón de 45 cm y 28 megavatios de respaldo energético.', url: 'https://usa.visa.com/about-visa/visanet.html' },
      { id: 9, author: 'Visa Inc. — Annual Report FY2025', title: 'Value-Added Services Revenue', source: 'Visa Inc. Informe anual', year: '2025', category: 'infraestructura', quote: 'Los servicios de valor añadido de Visa generaron $17.500 millones en el año fiscal 2025 — el 44% de sus ingresos totales.', url: 'https://investor.visa.com/financial-information/annual-reports/' },
      { id: 10, author: 'Visa, Mastercard, UnionPay — Cuota de mercado', title: '97% del crédito mundial procesado por 3 empresas', source: 'Nilson Report / Statista', year: '2024', category: 'infraestructura', quote: 'Visa, Mastercard y UnionPay procesan conjuntamente el 97% de todas las transacciones de tarjeta de crédito del mundo. Visa opera 4.700 millones de tarjetas en 200 países.', url: 'https://nilsonreport.com/' },
      { id: 11, author: 'SWIFT — Society for Worldwide Interbank Financial Telecommunication', title: 'Red de mensajería financiera global', source: 'SWIFT', year: '2024', category: 'infraestructura', quote: 'SWIFT conecta 11.000 instituciones financieras transmitiendo 53,3 millones de mensajes diarios que mueven aproximadamente $7,5 billones al día.', url: 'https://www.swift.com/about-us/discover-swift' },
      { id: 12, author: 'Nilson Report — Merchant Fees', title: 'Comisiones de tarjetas en EE.UU.: récord de $187.200M', source: 'Nilson Report / Merchants Payments Coalition', year: '2024', category: 'infraestructura', quote: 'Las comisiones totales alcanzaron $187.200 millones en 2024 — cuadruplicando desde 2010. Mayor coste operativo para comercios después de la mano de obra. ~$1.200 por hogar al año.', url: 'https://merchantspaymentscoalition.com/credit-card-swipe-fees/' },
      // ─── DATOS Y COMERCIALIZACIÓN ───
      { id: 13, author: 'Google — Ad Attribution via Card Data', title: 'Acceso al 70% de transacciones con tarjeta en EE.UU.', source: 'Bloomberg / Washington Post, 2018', year: '2018', category: 'datos_comercio', quote: 'Google tiene acceso al 70% de las transacciones con tarjeta en EE.UU. para atribución publicitaria, vinculando compras físicas con anuncios digitales.', url: 'https://www.washingtonpost.com/news/the-switch/wp/2017/05/23/google-now-knows-when-you-are-at-a-cash-register-and-its-telling-advertisers/' },
      { id: 14, author: 'Mastercard — Data Partnerships', title: 'Venta de datos a través de AWS, LiveRamp, Snowflake, The Trade Desk', source: 'U.S. PIRG / Mastercard Data & Services', year: '2024', category: 'datos_comercio', quote: '"Aunque los datos que ofrece Mastercard puedan estar agregados, claramente se usan para identificar objetivos y alcanzarlos a nivel individual." — U.S. PIRG', url: 'https://pirg.org/articles/mastercard-is-selling-your-data/' },
      { id: 15, author: 'Mastercard — SpendingPulse & Test & Learn', title: 'Servicios analíticos y predicción de comportamiento', source: 'Mastercard Data & Services', year: '2024', category: 'datos_comercio', quote: 'Mastercard vende datos de transacciones agregados a través de Amazon Web Services, LiveRamp, Snowflake y The Trade Desk para targeting publicitario y análisis de mercado.' },
      // ─── VIGILANCIA FINANCIERA ───
      { id: 16, author: 'FinCEN — Financial Crimes Enforcement Network', title: 'Suspicious Activity Reports (SARs)', source: 'U.S. Department of the Treasury', year: '2023/2024', category: 'vigilancia_fin', quote: 'Las instituciones financieras presentaron 4,6 millones de Informes de Actividad Sospechosa ante FinCEN en 2023. Para 2024, más de 10.000 cada día. Menos del 0,3% se vinculan a investigaciones.', url: 'https://www.fincen.gov/reports/sar-stats' },
      { id: 17, author: 'NSA — "Follow the Money" / Tracfin', title: 'Monitorización de pagos internacionales y tarjetas de crédito', source: 'Documentos Snowden. Der Spiegel, 2013', year: '2013', category: 'vigilancia_fin', quote: 'El programa "Follow the Money" de la NSA monitorizaba pagos internacionales. Su base de datos Tracfin contenía 180 millones de registros, el 84% transacciones de tarjeta.', url: 'https://www.spiegel.de/international/world/how-the-nsa-spies-on-international-bank-transactions-a-922430.html' },
      { id: 18, author: 'LexisNexis — True Cost of AML Compliance', title: 'Coste global de cumplimiento KYC/AML: $206.000M anuales', source: 'LexisNexis Risk Solutions', year: '2024', category: 'vigilancia_fin', quote: 'El coste global de cumplimiento regulatorio (KYC/AML) alcanza los $206.000 millones anuales, una infraestructura de vigilancia financiera masiva con eficacia cuestionable.', url: 'https://risk.lexisnexis.com/insights-resources/research/true-cost-of-financial-crime-compliance-study-global-report' },
      // ─── GEOPOLÍTICA Y ARMA FINANCIERA ───
      { id: 19, author: 'Sanciones a Rusia — SWIFT 2022', title: 'Desconexión de 7 bancos rusos de SWIFT', source: 'Reuters / Council of the EU', year: '2022', category: 'geopolitica', quote: 'Tras la invasión de Ucrania, 7 bancos rusos fueron desconectados de SWIFT. Visa y Mastercard suspendieron operaciones. El rublo se desplomó un 30%.', url: 'https://www.consilium.europa.eu/en/press/press-releases/2022/03/02/russia-s-aggression-against-ukraine-eu-bans-certain-russian-banks-from-swift/' },
      { id: 20, author: 'Irán — Desconexión SWIFT', title: 'Impacto económico de la exclusión financiera', source: 'Congressional Research Service / IMF', year: '2012/2018', category: 'geopolitica', quote: 'La desconexión de SWIFT redujo las exportaciones de petróleo iraníes de 2,2M a 700.000 barriles/día y el PIB se contrajo un 5,8%.', url: 'https://sgp.fas.org/crs/mideast/RS20871.pdf' },
      { id: 21, author: 'WikiLeaks — Bloqueo financiero', title: 'Pérdida del 95% de ingresos sin proceso judicial', source: 'WikiLeaks / Wau Holland Foundation', year: '2010', category: 'geopolitica', quote: 'WikiLeaks perdió el 95% de sus ingresos cuando Visa, Mastercard y PayPal bloquearon donaciones — sin cargos judiciales. Regulación extrajudicial por empresas privadas.', url: 'https://wikileaks.org/Banking-Blockade.html' },
      { id: 22, author: 'Afganistán — Congelación de reservas', title: 'EE.UU. congela ~$9.000M en reservas afganas', source: 'UNDP / Human Rights Watch', year: '2021', category: 'geopolitica', quote: 'EE.UU. congeló ~$9.000 millones en reservas del banco central afgano. El 95% de los hogares experimentó insuficiencia alimentaria.', url: 'https://www.hrw.org/news/2022/03/22/afghanistan-economic-crisis-threatens-rights' },
      { id: 23, author: 'Operation Choke Point — FDIC/DOJ', title: 'Presión bancaria contra industrias legales "indeseables"', source: 'U.S. House Committee on Oversight / FDIC OIG', year: '2012–2017', category: 'geopolitica', quote: 'Operation Choke Point presionó a bancos para cerrar cuentas de industrias legales pero "indeseables": vendedores de armas, prestamistas, empresas de tabaco.', url: 'https://oversight.house.gov/wp-content/uploads/2014/12/Staff-Report-Operation-Choke-Point1.pdf' },
      { id: 24, author: 'Nigel Farage — Coutts Bank', title: 'Desbancarización por opiniones políticas', source: 'BBC / Financial Times, 2023', year: '2023', category: 'geopolitica', quote: 'Farage reveló un dossier interno de Coutts Bank que afirmaba que sus opiniones eran "incompatibles con Coutts". Provocó la dimisión del CEO de NatWest.', url: 'https://www.bbc.com/news/business-66232647' },
      { id: 25, author: 'Canadá — Emergencies Act & Convoy Protests', title: 'Congelación de 206–257 cuentas bancarias de manifestantes', source: 'Federal Court of Canada / CBC', year: '2022', category: 'geopolitica', quote: 'El gobierno canadiense congeló entre 206 y 257 cuentas bancarias de manifestantes del Freedom Convoy. Un tribunal federal dictaminó que la invocación fue irrazonable.', url: 'https://www.cbc.ca/news/politics/emergencies-act-federal-court-ruling-1.7074486' },
      { id: 26, author: 'Mastercard vs Pornhub', title: 'Regulación de facto por empresa de pagos', source: 'New York Times / Nicholas Kristof, 2020', year: '2020', category: 'geopolitica', quote: 'Mastercard forzó la eliminación del 80% del contenido de Pornhub — regulación de facto por una empresa de pagos, no por un tribunal ni legislador.', url: 'https://www.nytimes.com/2020/12/04/opinion/sunday/pornhub-rape-trafficking.html' },
      // ─── EFECTIVO Y ALTERNATIVAS ───
      { id: 27, author: 'World Bank — Global Findex Database', title: '1.300 millones de adultos no bancarizados', source: 'World Bank Group', year: '2022', category: 'alternativas', quote: 'Abandonar el efectivo excluye a los 1.300 millones de adultos no bancarizados del mundo. El efectivo funciona sin electricidad, sin internet, sin permiso.', url: 'https://www.worldbank.org/en/publication/globalfindex' },
      { id: 28, author: 'Atlantic Council — CBDC Tracker', title: '134 países explorando monedas digitales de banco central', source: 'Atlantic Council GeoEconomics Center', year: '2024', category: 'alternativas', quote: '134 países exploran CBDCs. En China, el yuan digital fue programado con fecha de caducidad para forzar el gasto. El dinero programable permite restringir en qué se puede gastar.', url: 'https://www.atlanticcouncil.org/cbdctracker/' },
      { id: 29, author: 'China — e-CNY (Yuan Digital)', title: 'Dinero programable con fecha de caducidad', source: 'People\'s Bank of China / Financial Times', year: '2023', category: 'alternativas', quote: 'El yuan digital fue programado con fecha de caducidad para forzar el gasto en determinados periodos. Introduce capacidades de control sin precedentes sobre el dinero.', url: 'https://www.ft.com/content/e3999b1a-e36e-11e9-b112-9624ec9edc59' },
      { id: 30, author: 'UPI India — Unified Payments Interface', title: 'Soberanía nacional: 50% del volumen digital global', source: 'NPCI / Reserve Bank of India', year: '2024', category: 'alternativas', quote: 'UPI India procesa más del 50% del volumen de pagos digitales globales. Sistema público, soberano, sin intermediarios privados extranjeros.', url: 'https://www.npci.org.in/what-we-do/upi/product-overview' },
      { id: 31, author: 'Bitcoin — Whitepaper', title: 'Bitcoin: A Peer-to-Peer Electronic Cash System', source: 'Satoshi Nakamoto', year: '2008', category: 'alternativas', quote: 'Sin propietario, sin punto único de fallo. Sistema de efectivo electrónico peer-to-peer que no requiere intermediarios de confianza.', url: 'https://bitcoin.org/bitcoin.pdf' },
      { id: 32, author: 'Lightning Network', title: 'Pagos instantáneos sin intermediario', source: 'Poon & Dryja, 2016. Lightning Labs', year: '2016', category: 'alternativas', quote: 'Capa de pagos sobre Bitcoin que permite transacciones instantáneas y de bajo coste sin intermediarios centralizados.', url: 'https://lightning.network/lightning-network-paper.pdf' },
      { id: 33, author: 'Christine Lagarde — Presidenta del BCE', title: 'Cita sobre control del dinero', source: 'Múltiples discursos públicos', year: '2023', category: 'alternativas', quote: '"Si perdemos el control de nuestro dinero, perdemos el control de nuestro destino económico."' },
      // ─── FUENTES ADICIONALES ───
      { id: 34, author: 'CrowdStrike / Microsoft — Fallo global julio 2024', title: 'Un fallo de software colapsa infraestructura global', source: 'CrowdStrike / Microsoft / Reuters', year: '2024', category: 'infraestructura', quote: 'Una actualización defectuosa de CrowdStrike provocó la caída de 8,5 millones de dispositivos Windows, afectando aerolíneas, hospitales y sistemas de pago en todo el mundo.', url: 'https://www.reuters.com/technology/cybersecurity/crowdstrike-update-that-caused-global-outage-likely-skipped-checks-experts-say-2024-07-20/' },
      { id: 35, author: 'Brett Scott — "Cloudmoney"', title: 'The War Between Cash and Digital Finance', source: 'Bodley Head / Harper Business, 2022', year: '2022', category: 'alternativas', quote: 'Documenta cómo la industria financiera promueve activamente la eliminación del efectivo para capturar comisiones y datos de cada transacción.' },
    ],
  },
  {
    id: 'efecto-cantillon',
    title: 'El Efecto Cantillón y la deuda pública',
    subtitle: 'Lo que no se ve: cómo la emisión monetaria redistribuye riqueza sin que nadie lo vote',
    openingPhrase:
      'Hay un fenómeno económico que lleva más de tres siglos actuando en silencio. Redistribuye riqueza sin que nadie lo vote.',
    layers: [
      {
        title: 'El mecanismo: cómo viaja el dinero desde la deuda pública',
        accentColor: 'green',
        image:
          'https://mgx-backend-cdn.metadl.com/generate/images/1048399/2026-03-24/a0cf6af7-33e9-41ff-9022-885846923ea0.png',
        paragraphs: [
          'El Efecto Cantillón describe un fenómeno mediante el cual la emisión monetaria beneficia a quien imprime el dinero y perjudica a la población general, porque el dinero de nueva creación no se distribuye ni simultánea ni uniformemente a lo largo de la economía. Lo formuló Richard Cantillón (c. 1680–1734), economista franco-irlandés, en su obra Ensayo sobre la naturaleza del comercio en general. Lo fascinante es que tres siglos después, el mecanismo que describió sigue operando exactamente igual.',
          'La idea central es sencilla pero devastadora: cuando se introduce dinero nuevo en una economía, no llega a todos al mismo tiempo ni de la misma forma. Quien lo recibe primero puede gastarlo antes de que los precios suban. Quien lo recibe al final paga precios más altos sin haber disfrutado el dinero fresco. Friedrich Hayek comparó este efecto con verter miel en un plato: la miel no se distribuye uniformemente, sino que se expande desde el centro hacia los bordes. En economía, el "centro" es el gobierno, el banco central y los grandes bancos. Los "bordes" somos el resto.',
          'Cuando un gobierno emite deuda pública para financiar su déficit, el Tesoro emite bonos — promesas de pago futuro con intereses. Los primary dealers (JPMorgan, Goldman Sachs, BNP Paribas, Santander) compran en la subasta con acceso preferencial. Mediante Quantitative Easing, el banco central crea dinero nuevo de la nada y compra esos mismos bonos a los bancos primarios. El banco recupera su dinero más un margen, habiendo intermediado la deuda del Estado sin riesgo real.',
          'Con esa liquidez fresca, el banco presta a tipos bajos. ¿A quién llega primero ese crédito barato? No a la pyme del barrio. Llega a los hedge funds, los fondos de private equity, las grandes corporaciones. Ese dinero busca rentabilidad: va a la bolsa, a los inmuebles, al arte. Los precios de esos activos suben. Quienes los poseían se enriquecen. Quienes no los poseían ven cómo se alejan de su alcance. Cuando la expansión monetaria llega al ciudadano corriente, los precios ya subieron. El poder adquisitivo real ha disminuido. La transferencia ya ocurrió.',
        ],
        stats: [
          { value: 300, suffix: ' años', label: 'lleva operando el Efecto Cantillón en silencio' },
          { value: 6, label: 'pasos del Tesoro al ciudadano — cada uno diluye el valor' },
          { value: 0, suffix: '%', label: 'de riesgo real para los bancos intermediarios' },
          { value: 100, suffix: '%', label: 'del coste lo absorbe el ciudadano de a pie' },
        ],
        quotes: [
          'Duplicar la cantidad de dinero en un Estado no duplica los precios de todos los bienes por igual. El río no fluye el doble de rápido cuando se duplica el agua. Fluye con más fuerza donde ya fluía antes. — Richard Cantillón, 1730',
        ],
      },
      {
        title: 'Los cinco impuestos invisibles que nadie votó',
        accentColor: 'cyan',
        image:
          'https://mgx-backend-cdn.metadl.com/generate/images/1048399/2026-03-24/46a40e65-97e2-4972-b05d-dc5bb132a8cb.png',
        paragraphs: [
          'Nadie los llama "impuestos" porque no aparecen en ninguna ley. No se votan en el parlamento. No tienen un nombre que salga en el BOE. Y sin embargo, son reales y sistemáticos. El primero es la erosión del poder adquisitivo: el salario nominal puede subir, pero si los precios suben antes y más rápido, el salario real cae. El trabajador trabaja igual o más y puede comprar menos. Es la forma más silenciosa de recorte salarial.',
          'El segundo es el impuesto al ahorrador: mantener dinero en cuenta corriente, en un entorno de expansión monetaria y tipos reales negativos, es asumir pérdida garantizada. No hay ley que lo autorice. El tercero es la exclusión del mercado de vivienda: la expansión monetaria infla los activos reales. Quien ya tiene vivienda se enriquece pasivamente. Quien no la tiene ve cómo el precio se aleja año tras año. Una generación entera excluida de la propiedad no por falta de esfuerzo, sino por una política monetaria estructuralmente sesgada.',
          'El cuarto es el subsidio encubierto a las recompras de acciones (buybacks): las grandes empresas toman deuda barata para recomprar sus propias acciones, enriqueciendo a los accionistas — los más ricos — sin crear un solo empleo ni invertir en producción real. Este mecanismo fue uno de los grandes canales de la desigualdad post-2008. El quinto es el impuesto intergeneracional: la generación actual se beneficia del gasto público financiado con deuda. Las generaciones futuras pagarán los intereses con sus impuestos. Es un impuesto a quienes todavía no han nacido y por tanto no pueden votar.',
          'Desde 2008 — con cada ronda de QE en Europa y Estados Unidos — la brecha de riqueza entre el decil superior y el resto no ha dejado de crecer. No por mérito diferencial ni por mayor productividad de los ricos, sino por un efecto puramente mecánico de cómo el dinero viaja por el sistema financiero. Los hogares con mayor patrimonio destinan su riqueza a acciones, fondos y propiedades. Cuando la expansión monetaria eleva esos activos, su riqueza crece. Los hogares con menor patrimonio dependen de ingresos salariales. Cuando la inflación sube, su posición relativa empeora.',
        ],
        stats: [
          { value: 5, label: 'impuestos invisibles que nadie votó en ningún parlamento' },
          { value: 0, label: 'leyes que autorizan la erosión del ahorro por tipos negativos' },
          { value: 2008, label: 'año desde el cual la brecha de riqueza no deja de crecer' },
          { value: 1, suffix: ' gen', label: 'entera excluida de la propiedad por política monetaria' },
        ],
        quotes: [
          'Nadie votó por transferir riqueza de los pobres a los ricos. Ningún parlamento la aprobó. Y sin embargo, ocurre sistemáticamente en cada ciclo de expansión monetaria.',
        ],
      },
      {
        title: 'Lo que no se ve: ganadores, perdedores y el ciclo sin fin',
        accentColor: 'magenta',
        image:
          'https://mgx-backend-cdn.metadl.com/generate/images/1048399/2026-03-24/6821f9f0-91cb-4482-b9b3-7df723c4450c.png',
        paragraphs: [
          'Bastiat escribió en 1850 Lo que se ve y lo que no se ve. Aplicado al Efecto Cantillón, la lista de lo invisible incluye: el empresario que no existió — la pequeña empresa que nunca pudo crecer porque el crédito barato fue absorbido por las grandes. El inquilino eterno — la vivienda subió de precio no porque valga más, sino porque hay más dinero persiguiendo los mismos metros cuadrados. El jubilado empobrecido — la pensión fija que se deprecia año a año mientras los tipos bajos destruyeron el rendimiento del ahorro conservador.',
          'La empresa zombie — el dinero barato mantuvo vivas empresas ineficientes que habrían debido quebrar, ocupando recursos y talento. La destrucción creativa, bloqueada. El populismo como síntoma — Occupy Wall Street (2011), los chalecos amarillos (2018), la rabia creciente contra "los de arriba" son la respuesta política a una redistribución que nadie explica pero todos sienten. El funcionario que se enriquece — los directivos de bancos centrales diseñan políticas que inflan activos y, al salir del cargo, cobran fortunas en fondos que se beneficiaron de esas políticas.',
          'Los ganadores estructurales son siempre los mismos: bancos primarios, hedge funds, grandes propietarios inmobiliarios, tenedores de bonos y el gobierno que financia su déficit. Los perdedores estructurales también: asalariados sin activos, ahorradores en efectivo, pequeños empresarios, jubilados con pensión fija y las generaciones futuras. La asimetría no es accidental. Es el resultado directo de cómo están diseñadas las instituciones financieras: con acceso diferencial, por diseño, al dinero de nueva creación.',
          'Richard Cantillón vivió de cerca la crisis de John Law en la Francia del siglo XVIII. Law diseñó un sistema de papel moneda para resolver la deuda pública francesa. Colapsó en la Burbuja del Mississippi (1720). Tres siglos después, el mecanismo es idéntico. Solo han cambiado los nombres: John Law es ahora la Reserva Federal o el BCE. Los banqueros del rey son los primary dealers. La Burbuja del Mississippi es el mercado de bonos soberanos. Y el ciclo se repite: Crisis → QE → inflación de activos → brecha de riqueza → tensión social → crisis política → más gasto → más deuda → más QE. Sin mecanismo de salida visible dentro del propio sistema.',
        ],
        stats: [
          { value: 1720, label: 'Burbuja del Mississippi — el mismo mecanismo, otro siglo' },
          { value: 5, label: 'categorías de ganadores estructurales del sistema' },
          { value: 5, label: 'categorías de perdedores estructurales del sistema' },
          { value: 0, label: 'mecanismos de salida visibles dentro del propio sistema' },
        ],
        quotes: [
          'Esto no requiere conspiración ni mala intención. Hay un mecanismo institucional que produce resultados sistemáticamente desiguales porque el dinero no viaja de forma neutral. Viaja a través de instituciones, y las instituciones para los poderosos funcionan bien; las instituciones para el resto, mal.',
        ],
      },
    ],
    closingPhrase:
      'El Efecto Cantillón convierte la expansión monetaria en un impuesto invisible y regresivo. La pregunta es: ¿cuántas generaciones más pagarán una deuda que nunca votaron?',
    publishedDate: '2026-03-24',
    references: [
      // Fuentes primarias y obras originales
      { id: 1, author: 'Richard Cantillón', title: 'Essai sur la Nature du Commerce en Général', source: 'Publicación póstuma', year: '1755', detail: 'Obra fundacional. Describe por primera vez el efecto de la emisión monetaria desigual sobre precios relativos y distribución de la riqueza' },
      { id: 2, author: 'David Hume', title: 'Of Money (en Political Discourses)', source: 'Political Discourses', year: '1752', detail: 'Describe de forma paralela e independiente el efecto desigual de la inyección de dinero. Origen del término "efecto Hume-Cantillón"' },
      { id: 3, author: 'Friedrich A. Hayek', title: 'Introducción a la edición alemana de Cantillón', source: 'Edición alemana', year: '1931', detail: 'Rescata y difunde la obra de Cantillón; introduce la metáfora de la miel en el plato' },
      { id: 4, author: 'Frédéric Bastiat', title: 'Ce qu\'on voit et ce qu\'on ne voit pas', source: 'Publicación original', year: '1850', detail: 'Marco conceptual sobre los efectos visibles e invisibles de las políticas económicas' },
      { id: 5, author: 'Murray Rothbard', title: 'An Austrian Perspective on the History of Economic Thought', source: 'Edward Elgar Publishing', year: '1995', detail: 'Reivindica a Cantillón como "padre de la economía moderna", por encima de Adam Smith' },
      // Fuentes académicas y de investigación
      { id: 6, author: 'Arkadiusz Sieroń', title: 'Money, Inflation and Business Cycles: The Cantillon Effect and the Economy', source: 'Routledge', year: '2019', detail: 'Análisis sistemático y actualizado del efecto Cantillón; distingue entre "efecto Cantillón" y "efectos Cantillón" en plural' },
      { id: 7, author: 'Mark Blaug', title: 'Acuñación del término "efecto Cantillón"', source: 'Formalización académica', year: '1985', detail: 'Primera formalización moderna del concepto bajo ese nombre' },
      { id: 8, author: 'Mark Thornton', title: 'Cantillon on the Cause of the Business Cycle', source: 'Quarterly Journal of Austrian Economics, vol. 9, n.º 3', year: '2006', detail: 'Vincula el efecto Cantillón con la teoría austriaca del ciclo económico' },
      { id: 9, author: 'Louis Rouanet', title: 'Monetary Policy, Asset Price Inflation and Inequality', source: 'Sciences Po París (tesis de máster)', year: '2017', detail: 'Documenta empíricamente la relación entre expansión monetaria, inflación de activos y desigualdad' },
      { id: 10, author: 'Lin & Tomaskovic-Devey', title: 'Análisis sobre financiarización corporativa', source: 'American Sociological Review', year: '2013', detail: 'Documentan el crecimiento de los ingresos financieros sobre los productivos en empresas no financieras de EE. UU.' },
      // Fuentes de divulgación económica
      { id: 11, author: 'Gerardo Ortega', title: 'El Efecto Cantillón: cómo la creación de dinero perpetúa la desigualdad', source: 'gerardoortega.es', year: '2025' },
      { id: 12, author: 'Wikipedia (es)', title: 'Efecto Cantillón', source: 'es.wikipedia.org/wiki/Efecto_Cantillon', year: '2023' },
      { id: 13, author: 'Balio App', title: 'Efecto Cantillón: qué es, cómo funciona y por qué te afecta', source: 'balio.app', year: '2026' },
      { id: 14, author: 'Economipedia', title: 'Efecto Cantillón — definición y concepto', source: 'economipedia.com', year: '2022' },
      { id: 15, author: 'CriptoNoticias', title: '¿Qué es el efecto Cantillón y cómo Bitcoin puede neutralizarlo?', source: 'criptonoticias.com', year: '2025' },
      { id: 16, author: 'Mises Institute (es)', title: 'Efectos Cantillón: por qué la inflación ayuda a unos y perjudica a otros', source: 'mises.org/es', year: '2024' },
      { id: 17, author: 'Mises Institute (es)', title: 'Perspectiva misesiana: el efecto Cantillón y financiarización', source: 'mises.org/es', year: '2024' },
      // Fuentes sobre aplicación moderna (QE, deuda pública, desigualdad)
      { id: 18, author: "Basspig's Blog", title: 'The Cantillon Effect: How Central Bank Money Creation Enriches the Financial Elite First', source: 'basspig.wordpress.com', year: '2026' },
      { id: 19, author: 'George Gammon', title: 'The Cantillon Effect: The Global Elite\'s Secret End Game', source: 'georgegammon.com', year: '2022' },
      { id: 20, author: 'AIER', title: 'The Cantillon Effect', source: 'American Institute for Economic Research (aier.org)', year: '2012' },
      { id: 21, author: 'ProMarket (Stigler Center, U. Chicago)', title: 'The Cantillon Effect: Why Wall Street Gets a Bailout and You Don\'t', source: 'promarket.org', year: '2020' },
      { id: 22, author: 'Matt Stoller', title: 'The Cantillon Effect and Bank Behemoths', source: 'The Big Newsletter (thebignewsletter.com)', year: '2023' },
      { id: 23, author: 'GlobalGood Corporation', title: 'Debt as a Global Issue', source: 'globalgoodcorp.org', year: '2025' },
      { id: 24, author: 'Mises Institute', title: 'A Note on Some Recent Misinterpretations of the Cantillon Effect', source: 'mises.org', year: '2024' },
      { id: 25, author: 'National Gold Group', title: 'The Cantillon Effect: The Wealth Transfer Happening Under Our Noses', source: 'nationalgoldgroup.com', year: '2025' },
    ],
  },
];