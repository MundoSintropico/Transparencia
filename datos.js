1  const QR_SRC = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...`  // (muy larga)
2  
3  const investigations = [
4    {
5      badge: 'VIGILANCIA Y PRIVACIDAD',
6      badgeClass: 'badge-privacy',
7      title: '"No tengo nada que esconder"',
8      subtitle: 'La mentira más peligrosa del siglo XXI',
9      date: '2024',
10     capas: 3,
11     mins: 12,
12     views: '43.7k',
13     layers: [
14       {
15         label: 'CAPA 1',
16         labelClass: 'lbl-1',
17         title: 'El argumento que desarma democracias',
18         titleClass: 'c-cyan',
19         html: `
20         <img class="layer-header-img" src="data:image/jpeg;base64,..." alt="">
21         <p>La frase "no tengo nada que esconder" es, según el investigador Daniel Solove, <strong>el argumento más efectivo para erosionar la privacidad en democracia</strong>. No porque sea falsa. Sino porque mezcla categorías: la privacidad no es ocultamiento de crímenes. Es control sobre la propia narrativa.</p>
22         <p>Cada vez que usas Google, Meta o cualquier servicio gratuito, no estás consumiendo un producto. <strong>Eres el producto.</strong> Lo que sigue documenta exactamente lo que ocurre con tus datos.</p>
23         <div class="stats-row">
24           <div class="stat-card"><div class="stat-n c-green" data-target="39">0</div><div class="stat-label">categorías distintas de datos por usuario recoge Google</div></div>
25           <div class="stat-card"><div class="stat-n c-green" data-target="3500" data-suffix="M">0</div><div class="stat-label">búsquedas diarias almacenadas y vinculadas a perfiles</div></div>
26           <div class="stat-card"><div class="stat-n c-magenta" data-target="52000">0</div><div class="stat-label">puntos de datos por usuario en Meta (incluyendo inferidos)</div></div>
27           <div class="stat-card"><div class="stat-n c-magenta" data-target="40" data-suffix="%">0</div><div class="stat-label">de tu navegación rastreada aunque no tengas cuenta</div></div>
28         </div>
29         `
30       },
31       {
32         label: 'CAPA 2',
33         labelClass: 'lbl-2',
34         title: 'Qué se recoge (aunque no lo notes)',
35         titleClass: 'c-yellow',
36         html: `
37         <p>Tu historial no es solo lo que escribes. Es también:</p>
38         <ul>
39           <li>Ubicación en tiempo real</li>
40           <li>Dispositivo, batería, IP, red</li>
41           <li>Tiempo en pantalla por contenido</li>
42           <li>Clicks, pausas, desplazamiento, hesitación</li>
43         </ul>
44         <p>Con esto, los sistemas no predicen solo compras. Predicen estados emocionales y momentos de vulnerabilidad.</p>
45         `
46       },
47       {
48         label: 'CAPA 3',
49         labelClass: 'lbl-3',
50         title: 'Del dato al control',
51         titleClass: 'c-red',
52         html: `
53         <p>Cuando una plataforma conoce mejor tus patrones que tú mismo, puede modificar el entorno para influir decisiones:</p>
54         <ol>
55           <li>Qué ves</li>
56           <li>Qué no ves</li>
57           <li>Cuándo lo ves</li>
58           <li>Con qué carga emocional</li>
59         </ol>
60         <div class="q-block q-red">No es censura clásica. Es arquitectura de atención.</div>
61         `
62       }
63     ]
64   },
65   {
66     badge: 'DINERO Y PODER',
67     badgeClass: 'badge-money',
68     title: '"No es corrupción, es sistema"',
69     subtitle: 'Cómo se normaliza lo inaceptable',
70     date: '2025',
71     capas: 3,
72     mins: 11,
73     views: '31.4k',
74     layers: [
75       {
76         label: 'CAPA 1',
77         labelClass: 'lbl-1',
78         title: 'La excepción permanente',
79         titleClass: 'c-cyan',
80         html: `
81         <p>Las reglas existen… hasta que afectan al poder. Entonces aparece una excepción "temporal".</p>
82         `
83       },
84       {
85         label: 'CAPA 2',
86         labelClass: 'lbl-2',
87         title: 'Captura institucional',
88         titleClass: 'c-yellow',
89         html: `
90         <p>Cuando regulador y regulado comparten incentivos, el control se vuelve decorativo.</p>
91         `
92       },
93       {
94         label: 'CAPA 3',
95         labelClass: 'lbl-3',
96         title: 'Normalización del abuso',
97         titleClass: 'c-red',
98         html: `
99         <p>El problema no es el escándalo puntual: es su repetición sin consecuencias.</p>
100        `101	        </div>
102	        <p>Google clasifica a sus usuarios en <strong>39 categorías distintas</strong> de datos personales: desde información demográfica hasta etiquetas como "madres según tipo (deportista, trendy, etc.)", "cuánto gastará el usuario en su próximo coche" o "comprador frecuente de alcohol".</p>
103	        <p>Los llamados "perfiles sombra" de Facebook recogen datos sobre personas que <em>nunca se han registrado</em> en la plataforma, a partir de contactos subidos por otros usuarios, reconocimiento facial en fotos y cookies en webs externas. Una paradoja kafkiana: no puedes solicitar la eliminación de tus datos sin crear la cuenta que nunca quisiste tener.</p>
104	        <div class="q-block">
105	          " Si el servicio es gratuito, el producto eres tú. Pero la realidad es peor: <em>no eres el producto</em>, eres la materia prima de una cadena de extracción industrial. "
106	        </div>
107	      `
108	    },
109	    {
110	      label: 'CAPA 02', labelClass: 'lbl-2',
111	      title: 'Lo oculto: metadatos, patrones y perfilado conductual', titleClass: 'c-yellow',
112	      html: `
113	        <img class="layer-header-img" src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/.../2Q==" alt="">
114	        <p>No vendes solo tus datos directos; vendes inferencias. Tu historial de clics, desplazamientos, pausas y recorridos construye modelos que anticipan deseo, miedo y vulnerabilidad.</p>
115	        <p>La economía de la atención no busca convencerte de una idea: busca mantenerte dentro del circuito de captura el mayor tiempo posible.</p>
116	        <div class="stats-row">
117	          <div class="stat-card"><div class="stat-n c-yellow" data-target="8">0</div><div class="stat-label">segundos promedio para decidir si sigues mirando una pieza de contenido</div></div>
118	          <div class="stat-card"><div class="stat-n c-yellow" data-target="6" data-suffix="h">0</div><div class="stat-label">tiempo diario de exposición digital en usuarios intensivos</div></div>
119	          <div class="stat-card"><div class="stat-n c-red" data-target="90" data-suffix="%">0</div><div class="stat-label">de precisión en predicción de rasgos psicológicos con huella digital suficiente</div></div>
120	          <div class="stat-card"><div class="stat-n c-red" data-target="1">0</div><div class="stat-label">objetivo central del sistema: maximizar retención, no verdad</div></div>
121	        </div>
122	        <div class="q-block q-yellow">
123	          “No te están mostrando lo más importante. Te están mostrando lo más rentable.”
124	        </div>
125	      `
126	    },
127	    {
128	      label: 'CAPA 03', labelClass: 'lbl-3',
129	      title: 'Infraestructura de control sin rostro', titleClass: 'c-red',
130	      html: `
131	        <p>El poder clásico necesitaba policías, jueces o censores visibles. El poder actual necesita algoritmos opacos y términos de servicio cambiantes.</p>
132	        <p>No se prohíbe explícitamente: se reduce alcance, se altera contexto, se modula visibilidad.</p>
133	        <p>Cuando la percepción pública depende de plataformas privadas, la frontera entre moderación y manipulación se vuelve estructuralmente difusa.</p>
134	        <div class="q-block q-red">
135	          “La censura del siglo XXI no borra mensajes: los entierra.”
136	        </div>
137	      `
138	    }
139	  ]
140	},
141	{
142	  badge: 'DINERO Y PODER',
143	  badgeClass: 'badge-money',
144	  title: '"No pagas con dinero, pagas con obediencia"',
145	  subtitle: 'La arquitectura invisible del control financiero',
146	  date: '2025',
147	  capas: 3,
148	  mins: 14,
149	  views: '39.1k',
150	  layers: [
151	    {
152	      label: 'CAPA 01', labelClass: 'lbl-1',
153	      title: 'La tarjeta no es neutral', titleClass: 'c-cyan',
154	      html: `
155	        <img class="layer-header-img" src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/.../2Q==" alt="">
156	        <p>El sistema de pagos moderno no es solo una comodidad tecnológica. Es una infraestructura de vigilancia, dependencia y control político-económico.</p>
157	        <p>Del efectivo al plástico, y del plástico al móvil, cada salto reduce fricción para el usuario y aumenta fricción para la autonomía.</p>
158	        <div class="stats-row">
159	          <div class="stat-card"><div class="stat-n c-cyan" data-target="97" data-suffix="%">0</div><div class="stat-label">del crédito mundial fuera de China en manos de dos redes</div></div>
160	          <div class="stat-card"><div class="stat-n c-cyan" data-target="70" data-suffix="%">0</div><div class="stat-label">de transacciones en EE.UU. accesibles por acuerdos de datos</div></div>
161	          <div class="stat-card"><div class="stat-n c-yellow" data-target="44" data-suffix="%">0</div><div class="stat-label">ingresos por analítica y servicios de datos en redes de pago</div></div>
162	          <div class="stat-card"><div class="stat-n c-red" data-target="30" data-suffix="%">0</div><div class="stat-label">impacto monetario en días cuando se corta acceso a redes</div></div>
163	        </div>
164	      `
165	    },
166	    {
167	      label: 'CAPA 02', labelClass: 'lbl-2',
168	      title: 'Tres capas de extracción', titleClass: 'c-yellow',
169	      html: `
170	        <img class="layer-header-img" src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/.../2Q==" alt="">
171	        <p>Detrás de cada transacción operan tres niveles de extracción que el usuario nunca percibe: el individuo, el mercado, y la geopolítica.</p>
172	        <h3 class="c-cyan">I — Una persona: tu cerebro</h3>
173	        <p>La tarjeta suprime el dolor financiero a nivel neurológico. Los estudios de neuroeconomía demuestran que pagar con efectivo activa la ínsula anterior —la misma región que procesa el dolor físico—. La tarjeta anestesia ese mecanismo. <strong>El resultado: el cerebro gasta hasta un 100% más sin fricción.</strong></p>
174	        <h3 class="c-yellow">II — Miles de personas: el mercado de predicción</h3>
175	        <p>Visa y Mastercard obtienen el 40–44% de sus ingresos de <em>servicios analíticos</em>, no de las transacciones en sí. Venden predicciones de comportamiento a retailers, aseguradoras y anunciantes. Google accede al 70% de las transacciones en EE.UU. mediante acuerdo con Mastercard. <strong>Saben lo que vas a comprar antes de que tú lo decidas.</strong></p>
176	        <h3 class="c-red">III — Millones de personas: geopolítica</h3>
177	        <p>Visa + Mastercard controlan el 97% del crédito mundial fuera de China. Este control es una palanca de poder real: cuando Rusia fue excluida en 2022, el rublo cayó un 30% en días. WikiLeaks perdió el 95% de sus ingresos sin que mediara ningún proceso judicial. <strong>La infraestructura de pago es infraestructura de poder.</strong></p>
178	        <div class="stats-row">
179	          <div class="stat-card"><div class="stat-n c-yellow" data-target="97" data-suffix="%">0</div><div class="stat-label">del crédito mundial fuera de China controlado por Visa + Mastercard</div></div>
180	          <div class="stat-card"><div class="stat-n c-yellow" data-target="44" data-suffix="%">0</div><div class="stat-label">de ingresos de Visa/MC provienen de servicios analíticos (datos de comportamiento)</div></div>
181	          <div class="stat-card"><div class="stat-n c-red" data-target="30" data-suffix="%">0</div><div class="stat-label">cayó el rublo en días tras ser excluido de las redes en 2022</div></div>
182	          <div class="stat-card"><div class="stat-n c-red" data-target="95" data-suffix="%">0</div><div class="stat-label">de ingresos perdió WikiLeaks por bloqueo financiero sin proceso judicial</div></div>
183	        </div>
184	      `
185	    },
186	    {
187	      label: 'CAPA 03', labelClass: 'lbl-3',
188	      title: 'Del pago al permiso', titleClass: 'c-red',
189	      html: `
190	        <p>Si cada compra puede ser observada, analizada y eventualmente bloqueada, el dinero deja de ser un medio neutral y se convierte en un permiso condicionado.</p>
191	        <p>La promesa de conveniencia oculta una realidad: quien controla el canal de pago controla el margen de acción civil.</p>
192	        <div class="q-block q-red">
193	          “No te quitan el dinero: te quitan la capacidad de usarlo.”
194	        </div>
195	      `
196	    }
197	  ]
198	},
199	{
200	  badge: 'ECONOMÍA Y DEPENDENCIA',
201	        </div>
202	        <div class="q-block q-yellow">
203	          " Dos corporaciones median el comercio global. Una decisión corporativa —no judicial, no democrática— puede aislar económicamente a un país, una organización, o una persona. <em>Sin proceso. Sin sentencia. Sin apelación.</em> "
204	        </div>
205	      `
206	    },
207	    {
208	      label: 'CAPA 03', labelClass: 'lbl-3',
209	      title: 'La bifurcación civilizatoria — MCI v2.26', titleClass: 'c-red',
210	      html: `
211	        <img class="layer-header-img" src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/.../2Q==" alt="">
212	        <p>El sistema monetario contemporáneo no solo distribuye riqueza: distribuye poder temporal. Quien recibe primero el dinero nuevo compra con precios viejos; quien lo recibe al final compra con precios ya inflados.</p>
213	        <p>Ese desfase, repetido durante décadas, produce una arquitectura social de ganadores permanentes y perdedores permanentes.</p>
214	        <div class="q-block q-red">
215	          “No es inflación neutral: es transferencia silenciosa.”
216	        </div>
217	      `
218	    }
219	  ]
220	},
221	{
222	  badge: 'ECONOMÍA Y DEPENDENCIA',
223	  badgeClass: 'badge-economy',
224	  title: '"El dinero llega tarde para casi todos"',
225	  subtitle: 'Cómo se fabrica la desigualdad sin necesidad de conspiración',
226	  date: '2025',
227	  capas: 3,
228	  mins: 13,
229	  views: '28.6k',
230	  layers: [
231	    {
232	      label: 'CAPA 01', labelClass: 'lbl-1',
233	      title: 'Qué es el Efecto Cantillón', titleClass: 'c-cyan',
234	      html: `
235	        <p>Cuando se expande la masa monetaria, el nuevo dinero no llega al mismo tiempo a toda la población.</p>
236	        <p>Entra por canales específicos: banca, crédito corporativo, mercados financieros y gasto estatal prioritario.</p>
237	        <p>Ese orden de entrada determina quién gana poder adquisitivo y quién lo pierde.</p>
238	        <div class="stats-row">
239	          <div class="stat-card"><div class="stat-n c-cyan" data-target="1">0</div><div class="stat-label">principio clave: el orden de llegada del dinero importa</div></div>
240	          <div class="stat-card"><div class="stat-n c-cyan" data-target="3">0</div><div class="stat-label">canales de entrada más habituales del dinero nuevo</div></div>
241	          <div class="stat-card"><div class="stat-n c-yellow" data-target="2008">0</div><div class="stat-label">punto de inflexión de políticas monetarias expansivas globales</div></div>
242	          <div class="stat-card"><div class="stat-n c-red" data-target="0">0</div><div class="stat-label">neutralidad distributiva real de la expansión monetaria</div></div>
243	        </div>
244	      `
245	    },
246	    {
247	      label: 'CAPA 02', labelClass: 'lbl-2',
248	      title: 'Mecánica de la transferencia', titleClass: 'c-yellow',
249	      html: `
250	        <p>Primero suben activos financieros e inmobiliarios, luego bienes de consumo, y al final —si acaso— salarios.</p>
251	        <p>Esto implica que el trabajador cobra tarde en una moneda que ya compra menos.</p>
252	        <table class="two-col">
253	          <tr><th>Primero</th><th>Después</th></tr>
254	          <tr><td>Crédito barato para grandes actores</td><td>Revalorización de activos</td></tr>
255	          <tr><td>Expansión de balances</td><td>Alza de precios generales</td></tr>
256	          <tr><td>Liquidez financiera</td><td>Ajuste tardío de salarios</td></tr>
257	        </table>
258	      `
259	    },
260	    {
261	      label: 'CAPA 03', labelClass: 'lbl-3',
262	      title: 'El resultado estructural', titleClass: 'c-red',
263	      html: `
264	        <p>El corolario más visible del Efecto Cantillón en las últimas décadas es la <strong>divergencia entre la evolución de los activos financieros y la evolución del salario real</strong>. Desde 2008, con cada ronda de QE, la brecha de riqueza entre el decil superior y el resto no ha dejado de crecer.</p>
265	        <p>No por mérito diferencial. No por mayor productividad de los ricos. Sino por un efecto puramente mecánico de cómo el dinero viaja por el sistema financiero.</p>
266	        <table class="two-col">
267	          <tr><th>Ganadores estructurales</th><th>Perdedores estructurales</th></tr>
268	          <tr><td>Bancos primarios</td><td>Asalariados sin activos</td></tr>
269	          <tr><td>Hedge funds y private equity</td><td>Ahorradores en efectivo</td></tr>
270	          <tr><td>Tenedores de patrimonio</td><td>Jóvenes sin vivienda</td></tr>
271	          <tr><td>Receptores tempranos de liquidez</td><td>Receptores tardíos (salarios)</td></tr>
272	        </table>
273	        <div class="q-block q-red">
274	          “La desigualdad moderna no siempre se impone: a menudo se imprime.”
275	        </div>
276	      `
277	    }
278	  ]
279	},
280	{
281	  badge: 'SISTEMA Y LEY',
282	  badgeClass: 'badge-law',
283	  title: '"La norma existe hasta que estorba"',
284	  subtitle: 'Excepción permanente y captura institucional',
285	  date: '2026',
286	  capas: 3,
287	  mins: 10,
288	  views: '22.4k',
289	  layers: [
290	    {
291	      label: 'CAPA 01', labelClass: 'lbl-1',
292	      title: 'Regla para otros, excepción para el poder', titleClass: 'c-cyan',
293	      html: `
294	        <p>Las instituciones prometen imparcialidad, pero operan con umbrales flexibles cuando el costo político sube.</p>
295	        <p>El corolario más visible del Efecto Cantillón en las últimas décadas es la <strong>divergencia entre la evolución de los activos financieros y la evolución del salario real</strong>. Desde 2008, con cada ronda de QE, la brecha de riqueza entre el decil superior y el resto no ha dejado de crecer.</p>
296	        <p>No por mérito diferencial. No por mayor productividad de los ricos. Sino por un efecto puramente mecánico de cómo el dinero viaja por el sistema financiero.</p>
297	        <table class="two-col">
298	          <tr><th>Ganadores estructurales</th><th>Perdedores estructurales</th></tr>
299	          <tr><td>Bancos primarios</td><td>Asalariados sin activos</td></tr>
300	          <tr><td>Hedge funds y private equity</td><td>Ahorradores en efectivo</td></tr>
301	          <tr><td>Grandes propietarios inmobiliarios</td><td>Pequeños empresarios</td></tr>
302	          <tr><td>Tenedores de bonos</td><td>Jubilados con pensión fija</td></tr>
303	          <tr><td>El gobierno (déficit financiado)</td><td>Generaciones futuras</td></tr>
304	        </table>
305	        <p>La asimetría no es accidental. Es el resultado directo de cómo están diseñadas las instituciones financieras: con acceso diferencial, por diseño, al dinero de nueva creación.</p>
306	        <h3 class="c-red">El veredicto: un impuesto regresivo sin nombre</h3>
307	        <p>El punto crítico que hay que entender: <strong>esto no requiere conspiración ni mala intención.</strong> No hay un villano con nombre y apellidos. Hay un mecanismo institucional que produce resultados sistemáticamente desiguales porque el dinero no viaja de forma neutral. Viaja a través de instituciones, y las instituciones para los poderosos funcionan bien; las instituciones para el resto, mal.</p>
308	        <div class="q-block q-red">
309	          " Duplicar la cantidad de dinero en un Estado no duplica los precios de todos los bienes por igual. El río no fluye el doble de rápido cuando se duplica el agua. Fluye con más fuerza <em>donde ya fluía antes.</em> Y ese 'antes' siempre es el mismo sitio: cerca del poder. — Richard Cantillón "
310	        </div>
311	        <p>Bastiat escribió en 1850 <em>"Lo que se ve y lo que no se ve"</em>. Tres siglos después de Cantillón, el mecanismo es idéntico. Solo han cambiado los nombres: John Law es ahora la Reserva Federal o el BCE. Los banqueros del rey son los <em>primary dealers</em>. Y el ciudadano que paga las consecuencias es el mismo de siempre.</p>
312	      `
313	    }
314	  ]
315	},
316	
317	/* ── 3: La Deuda como Fraude Jurídico Intergeneracional ── */
318	{
319	  title: 'La Deuda como Fraude Jurídico Intergeneracional',
320	  subtitle: 'Lo que firma el presente, lo paga el futuro: 6 cargos contra el ordenamiento jurídico vigente',
321	  date: '30-03-2026',
322	  capas: 3,
323	  mins: 12,
324	  views: 0,
325	  badge: 'DERECHO Y ENTROPÍA',
326	  badgeClass: 'badge-law',
327	  layers: [
328	    {
329	      label: 'CAPA 01', labelClass: 'lbl-1',
330	      title: 'El Déficit Democrático de Fondo', titleClass: 'c-red',
331	      html: `
332	        <div style="margin:0 -1.5rem 1.8rem;line-height:0;overflow:hidden;">
333	          <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" font-family="monospace" style="width:100%;height:auto;display:block;">
334	            <defs>
335	              <radialGradient id="i4c1_bg" cx="20%" cy="80%" r="60%"><stop offset="0%" stop-color="#1a0008"/><stop offset="100%" stop-color="#060608"/></radialGradient>
336	              <radialGradient id="i4c1_gred" cx="20%" cy="80%" r="50%"><stop offset="0%" stop-color="#ff2244" stop-opacity="0.12"/><stop offset="100%" stop-color="#ff2244" stop-opacity="0"/></radialGradient>
337	              <filter id="i4c1_gr"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
338	              <filter id="i4c1_gs"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
339	              <pattern id="i4c1_grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,34,68,0.05)" stroke-width="1"/></pattern>
340	              <linearGradient id="i4c1_cg" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#ff2244"/><stop offset="100%" stop-color="#ff6b00"/></linearGradient>
341	            </defs>
342	            <rect width="800" height="500" fill="url(#i4c1_bg)"/><rect width="800" height="500" fill="url(#i4c1_grid)"/>
343	            <ellipse cx="160" cy="400" rx="300" ry="200" fill="url(#i4c1_gred)"/>
344	            <text x="40" y="44" font-size="9" letter-spacing="4" fill="#ff2244" font-weight="bold">INVESTIGACIÓN · CAPA 01</text>
345	            <line x1="40" y1="52" x2="240" y2="52" stroke="#ff2244" stroke-width="1.5" opacity="0.7"/>
346	            <text x="40" y="105" font-size="38" font-weight="900" fill="#ffffff" font-family="Georgia, serif" letter-spacing="-1">La Deuda como</text>
347	            <text x="40" y="150" font-size="38" font-weight="900" fill="#ff2244" font-family="Georgia, serif" letter-spacing="-1" filter="url(#i4c1_gr)">Fraude Jurídico</text>
348	            <text x="40" y="195" font-size="38" font-weight="900" fill="#ffffff" font-family="Georgia, serif" letter-spacing="-1">Intergeneracional</text>
349	            <text x="40" y="232" font-size="14" fill="#ffffff" font-style="italic" font-weight="bold">Lo que firma el presente, lo paga el futuro.</text>
350	            <line x1="40" y1="252" x2="140" y2="252" stroke="#ff2244" stroke-width="2"/>
351	            <text x="152" y="257" font-size="9" letter-spacing="3" fill="#ffffff" font-weight="bold">6 CARGOS JURÍDICOS</text>
352	            <text x="420" y="308" text-anchor="middle" font-size="32" font-weight="bold" fill="#ff2244" filter="url(#i4c1_gs)" font-family="Georgia, serif">112% PIB</text>
353	            <text x="420" y="330" text-anchor="middle" font-size="9" letter-spacing="3" fill="#ffffff" font-weight="bold">DEUDA · GENERACIÓN SIGUIENTE</text>
354	            <g transform="translate(120,388)"><circle r="40" fill="#0b0b10" stroke="#ff2244" stroke-width="2"/><circle r="52" fill="none" stroke="#ff2244" stroke-width="0.8" opacity="0.4"/><text y="-8" text-anchor="middle" font-size="20" fill="#ff2244" font-weight="bold">€$</text><text y="10" text-anchor="middle" font-size="8" letter-spacing="2" fill="#ff2244" font-weight="bold">PRESENTE</text><text y="24" text-anchor="middle" font-size="8" fill="#ffffff" font-weight="bold">FIRMA</text></g>
355	            <g filter="url(#i4c1_gr)"><rect x="172" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/><rect x="198" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/><rect x="224" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/><rect x="250" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/><rect x="276" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/><rect x="302" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/><rect x="328" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/><rect x="354" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/><rect x="380" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/><rect x="406" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/><rect x="432" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/><rect x="458" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/><rect x="484" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/><rect x="510" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/><rect x="536" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/><rect x="562" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/><rect x="588" y="382" width="18" height="12" rx="6" fill="none" stroke="url(#i4c1_cg)" stroke-width="2.5"/></g>
356	            <g transform="translate(666,388)"><circle r="40" fill="#0b0b10" stroke="#ff6b00" stroke-width="2" stroke-dasharray="5,3"/><circle r="52" fill="none" stroke="#ff6b00" stroke-width="0.8" opacity="0.35"/><text y="-8" text-anchor="middle" font-size="22" fill="#ff6b00" font-weight="bold">?</text><text y="10" text-anchor="middle" font-size="8" letter-spacing="2" fill="#ff6b00" font-weight="bold">FUTURO</text><text y="24" text-anchor="middle" font-size="8" fill="#ffffff" font-weight="bold">SIN VOZ</text></g>
357	            <text x="400" y="450" text-anchor="middle" font-size="11" fill="#ffffff" font-style="italic">"nadie puede transmitir más derechos de los que tiene"</text>
358	            <text x="400" y="470" text-anchor="middle" font-size="8" letter-spacing="3" fill="#ff2244" font-weight="bold">— PRINCIPIO IGNORADO POR EL ESTADO</text>
359	            <text x="760" y="492" text-anchor="end" font-size="8" letter-spacing="2" fill="#ffffff" opacity="0.35">LO QUE NO VES</text>
360	          </svg>
361	        </div>
362	        <p>El Derecho positivo trata la deuda pública como un instrumento técnico de gestión macroeconómica. <strong>Eso es mentira.</strong> La deuda pública es el mecanismo más sofisticado de transferencia coactiva de renta que ha inventado el Estado moderno —y opera sin el consentimiento de sus principales víctimas, porque esas víctimas aún no han nacido.</p>
363	        <div class="q-block q-red">
364	          " La democracia que excluye sistemáticamente a sus contribuyentes futuros no es democracia plena. Es una <em>oligarquía temporal con apariencia de legitimidad.</em> "
365	        </div>
366	        <h3 class="c-red">Cargo 01 — El Déficit Democrático de Fondo</h3>
367	        <p>La democracia representativa descansa sobre un principio elemental: quien soporta la carga de una decisión política debe tener voz en ella. La deuda pública viola este principio de forma estructural. <strong>Las generaciones futuras no votan, no firman, no delegan —y sin embargo quedan vinculadas por las obligaciones que contraemos hoy.</strong></p>
368	        <p>Ninguna constitución vigente en Europa contiene un mecanismo reforzado que exija el consentimiento de las generaciones que van a pagar la deuda presente. El artículo 135 de la Constitución Española (reforma de 2011) remite al umbral del 60% del PIB del TFUE. En la práctica, ese umbral no limita nada.</p>
369	        <h3 class="c-yellow">Cargo 02 — El Canal Oculto hacia las Rentas Financieras</h3>
370	        <p>Cada euro destinado al pago de intereses de deuda es un euro que no se destina a sanidad, educación o infraestructura. <strong>El servicio de la deuda actúa como un presupuesto paralelo, no sometido a deliberación política anual</strong>, que redistribuye renta desde el contribuyente general hacia los tenedores de bonos soberanos. En 2024, España destinó más de 37.000 millones de euros solo en intereses. Equivale a casi dos veces el presupuesto de Defensa. Sin debate parlamentario específico.</p>
371	        <div class="stats-row">
372	          <div class="stat-card"><div class="stat-n c-red" data-target="112" data-suffix="%PIB">0</div><div class="stat-label">deuda pública de España (2024)</div></div>
373	          <div class="stat-card"><div class="stat-n c-red" data-target="37" data-suffix="bn€">0</div><div class="stat-label">pagados en intereses de deuda por España en 2024 — sin debate específico</div></div>
374	          <div class="stat-card"><div class="stat-n c-yellow" data-target="0" data-suffix=" votos">0</div><div class="stat-label">emitidos por las generaciones que pagarán la deuda contraída hoy</div></div>
375	          <div class="stat-card"><div class="stat-n c-yellow" data-target="100" data-suffix="%PIB">0</div><div class="stat-label">deuda pública media en la eurozona (2024)</div></div>
376	        </div>
377	      `
378	    },
379	    {
380	      label: 'CAPA 02', labelClass: 'lbl-2',
381	      title: 'Los 6 Cargos Jurídicos', titleClass: 'c-yellow',
382	      html: `
383	        <div style="margin:0 -1.5rem 1.8rem;line-height:0;overflow:hidden;">
384	          <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" font-family="monospace" style="width:100%;height:auto;display:block;">
385	            <defs>
386	              <radialGradient id="i4c2_bg" cx="50%" cy="30%" r="70%"><stop offset="0%" stop-color="#0d0800"/><stop offset="100%" stop-color="#060608"/></radialGradient>
387	              <radialGradient id="i4c2_gor" cx="50%" cy="30%" r="50%"><stop offset="0%" stop-color="#ff6b00" stop-opacity="0.10"/><stop offset="100%" stop-color="#ff6b00" stop-opacity="0"/></radialGradient>
388	              <filter id="i4c2_go"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
389	              <filter id="i4c2_gsm"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
390	              <pattern id="i4c2_grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,107,0,0.05)" stroke-width="1"/></pattern>
391	            </defs>
392	            <rect width="800" height="500" fill="url(#i4c2_bg)"/><rect width="800" height="500" fill="url(#i4c2_grid)"/>
393	            <ellipse cx="400" cy="150" rx="350" ry="200" fill="url(#i4c2_gor)"/>
394	            <text x="400" y="36" text-anchor="middle" font-size="9" letter-spacing="5" fill="#ff6b00" font-weight="bold">INVESTIGACIÓN · CAPA 02 · ARQUITECTURA JURÍDICA</text>
395	            <line x1="180" y1="44" x2="620" y2="44" stroke="#ff6b00" stroke-width="1" opacity="0.5"/>
396	            <text x="400" y="82" text-anchor="middle" font-size="11" letter-spacing="4" fill="#ff6b00" font-weight="bold">LOS MECANISMOS OCULTOS</text>
397	            <text x="400" y="120" text-anchor="middle" font-size="32" font-weight="900" fill="#ffffff" font-family="Georgia, serif">6 Cargos Jurídicos</text>
398	            <text x="400" y="148" text-anchor="middle" font-size="13" fill="#ffffff" font-style="italic">Cómo el Derecho convierte el expolio en política fiscal</text>
399	            <g transform="translate(28,172)"><rect width="228" height="78" rx="2" fill="#101015" stroke="#ff6b00" stroke-width="1" stroke-opacity="0.6"/><rect width="3" height="78" rx="1" fill="#ff6b00"/><text x="14" y="20" font-size="7" letter-spacing="3" fill="#ff6b00" font-weight="bold">CARGO 01</text><text x="14" y="40" font-size="12" fill="#ffffff" font-family="Georgia, serif" font-weight="bold">Deuda sin</text><text x="14" y="56" font-size="12" fill="#ffffff" font-family="Georgia, serif" font-weight="bold">consentimiento</text><text x="14" y="72" font-size="9" fill="#ffffff" font-style="italic">Ex ante vs ex post legis</text></g>
400	            <g transform="translate(286,172)"><rect width="228" height="78" rx="2" fill="#101015" stroke="#ff6b00" stroke-width="1" stroke-opacity="0.6"/><rect width="3" height="78" rx="1" fill="#ff6b00"/><text x="14" y="20" font-size="7" letter-spacing="3" fill="#ff6b00" font-weight="bold">CARGO 02</text><text x="14" y="40" font-size="12" fill="#ffffff" font-family="Georgia, serif" font-weight="bold">Representación</text><text x="14" y="56" font-size="12" fill="#ffffff" font-family="Georgia, serif" font-weight="bold">sin mandato</text><text x="14" y="72" font-size="9" fill="#ffffff" font-style="italic">Firma por quien no existe</text></g>
401	            <g transform="translate(544,172)"><rect width="228" height="78" rx="2" fill="#101015" stroke="#ff6b00" stroke-width="1" stroke-opacity="0.6"/><rect width="3" height="78" rx="1" fill="#ff6b00"/><text x="14" y="20" font-size="7" letter-spacing="3" fill="#ff6b00" font-weight="bold">CARGO 03</text><text x="14" y="40" font-size="12" fill="#ffffff" font-family="Georgia, serif" font-weight="bold">El dinero creado</text><text x="14" y="56" font-size="12" fill="#ffffff" font-family="Georgia, serif" font-weight="bold">ex nihilo</text><text x="14" y="72" font-size="9" fill="#ffffff" font-style="italic">Inflación como impuesto oculto</text></g>
402	            <g transform="translate(28,268)"><rect width="228" height="78" rx="2" fill="#101015" stroke="#ff6b00" stroke-width="1" stroke-opacity="0.6"/><rect width="3" height="78" rx="1" fill="#ff6b00"/><text x="14" y="20" font-size="7" letter-spacing="3" fill="#ff6b00" font-weight="bold">CARGO 04</text><text x="14" y="40" font-size="12" fill="#ffffff" font-family="Georgia, serif" font-weight="bold">Primary Dealers:</text><text x="14" y="56" font-size="12" fill="#ffffff" font-family="Georgia, serif" font-weight="bold">el circuito cerrado</text><text x="14" y="72" font-size="9" fill="#ffffff" font-style="italic">Cantillon en el Derecho</text></g>
403	            <g transform="translate(286,268)"><rect width="228" height="78" rx="2" fill="#101015" stroke="#ff6b00" stroke-width="1" stroke-opacity="0.6"/><rect width="3" height="78" rx="1" fill="#ff6b00"/><text x="14" y="20" font-size="7" letter-spacing="3" fill="#ff6b00" font-weight="bold">CARGO 05</text><text x="14" y="40" font-size="12" fill="#ffffff" font-family="Georgia, serif" font-weight="bold">Ciudadanos futuros:</text><text x="14" y="56" font-size="12" fill="#ffffff" font-family="Georgia, serif" font-weight="bold">sin derechos reales</text><text x="14" y="72" font-size="9" fill="#ffffff" font-style="italic">Jurídicamente, nada</text></g>
404	            <g transform="translate(544,268)"><rect width="228" height="78" rx="2" fill="#160005" stroke="#ff2244" stroke-width="1.5"/><rect width="3" height="78" rx="1" fill="#ff2244" filter="url(#i4c2_gsm)"/><text x="14" y="20" font-size="7" letter-spacing="3" fill="#ff2244" font-weight="bold">CARGO 06</text><text x="14" y="40" font-size="12" fill="#ffffff" font-family="Georgia, serif" font-weight="bold">El encaje jurídico</text><text x="14" y="56" font-size="12" fill="#ff2244" font-family="Georgia, serif" font-weight="bold" filter="url(#i4c2_gsm)">del expolio</text><text x="14" y="72" font-size="9" fill="#ffffff" font-style="italic">Legalidad ≠ Legitimidad</text></g>
405	            <line x1="256" y1="211" x2="286" y2="211" stroke="#ff6b00" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.5"/><line x1="514" y1="211" x2="544" y2="211" stroke="#ff6b00" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.5"/><line x1="256" y1="307" x2="286" y2="307" stroke="#ff6b00" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.5"/><line x1="514" y1="307" x2="544" y2="307" stroke="#ff6b00" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.5"/>
406	            <line x1="28" y1="367" x2="772" y2="367" stroke="#1a1a28" stroke-width="1"/>
407	            <text x="400" y="392" text-anchor="middle" font-size="12" fill="#ffffff" font-style="italic" font-family="Georgia, serif">"El sistema no está roto. Está funcionando exactamente como fue diseñado."</text>
408	            <g transform="translate(370,416)" opacity="0.7"><line x1="30" y1="0" x2="30" y2="22" stroke="#ff6b00" stroke-width="1.5"/><line x1="6" y1="7" x2="54" y2="7" stroke="#ff6b00" stroke-width="1.5"/><line x1="6" y1="7" x2="6" y2="18" stroke="#ff6b00" stroke-width="1"/><line x1="54" y1="7" x2="54" y2="13" stroke="#ff6b00" stroke-width="1"/><ellipse cx="6" cy="20" rx="8" ry="4" fill="none" stroke="#ff6b00" stroke-width="1"/><ellipse cx="54" cy="15" rx="8" ry="4" fill="none" stroke="#ff6b00" stroke-width="1"/><text x="30" y="44" text-anchor="middle" font-size="7" letter-spacing="2" fill="#ffffff" font-weight="bold">DESEQUILIBRIO</text></g>
409	            <text x="760" y="492" text-anchor="end" font-size="8" letter-spacing="2" fill="#ffffff" opacity="0.3">LO QUE NO VES</text>
410	          </svg>
411	        </div>
412	        <p>Lo que sigue no es un artículo de economía. Es una <strong>denuncia doctrinal</strong>. Seis cargos concretos contra el ordenamiento jurídico que permite —y legitima— que una mayoría presente firme en nombre de ciudadanos que aún no existen.</p>
413	        <h3 class="c-red">Cargo 03 — La Inflación como Impuesto Sin Nombre</h3>
414	        <p>Cuando un Estado se financia monetizando deuda, el resultado es inflación. <strong>La inflación es tributación.</strong> Pero es tributación sin ley habilitante, sin tipo marginal publicado, sin debate parlamentario. El principio de reserva de ley tributaria (art. 31.3 CE) exige que toda prestación patrimonial de carácter público sea establecida por ley. La inflación inducida por política monetaria acomodaticia no cumple ninguno de esos requisitos. Redistribuye renta masivamente: desde ahorradores hacia deudores, desde trabajadores con salario nominal fijo hacia propietarios de activos reales.</p>
415	        <p>Esto no es un efecto secundario neutral. Es el <strong>Efecto Cantillon</strong>: quienes reciben el dinero nuevo primero —el Estado, los bancos, los grandes deudores— lo gastan antes de que los precios suban. Los últimos en recibirlo —trabajadores, pensionistas, pequeños ahorradores— lo reciben ya depreciado. El Derecho no lo nombra. El Derecho lo permite.</p>
416	        <h3 class="c-yellow">Cargo 04 — La Ficción Técnica de la Estabilidad Macro</h3>
417	        <p>Al clasificar la gestión de la deuda como "política de estabilidad macroeconómica", el ordenamiento jurídico la extrae del campo de la política redistributiva <strong>y la traslada al campo de la tecnocracia, donde los expertos deciden sin rendir cuentas.</strong> El BCE no es elegido democráticamente. Sus decisiones determinan el valor real de los salarios y las pensiones de cientos de millones de ciudadanos.</p>
418	        <h3 class="c-red">Cargo 05 — El Contribuyente Futuro Sin Derechos</h3>
419	        <p>La Constitución Española protege el crédito público con prioridad absoluta (art. 135). <strong>Pero no existe un precepto simétrico que proteja al contribuyente futuro.</strong> El acreedor financiero tiene más derechos constitucionales que el contribuyente por nacer. Eso no es neutralidad jurídica. Es una elección política codificada como norma fundamental.</p>
420	        <div class="stats-row">
421	          <div class="stat-card"><div class="stat-n c-red" data-target="3" data-suffix=" bill€">0</div><div class="stat-label">inyectados por el BCE en QE entre 2015 y 2022 sin control democrático directo</div></div>
422	          <div class="stat-card"><div class="stat-n c-yellow" data-target="6" data-suffix=" cargos">0</div><div class="stat-label">jurídicos documentados contra el ordenamiento vigente</div></div>
423	          <div class="stat-card"><div class="stat-n c-red" data-target="0" data-suffix="%tipo">0</div><div class="stat-label">tipo marginal declarado del impuesto inflacionario — sin ley habilitante</div></div>
424	          <div class="stat-card"><div class="stat-n c-yellow" data-target="84" data-suffix="%">0</div><div class="stat-label">de los activos financieros en manos del top 40% — efecto Cantillon estructural</div></div>
425	        </div>
426	        <div class="q-block q-red">
427	          " El presupuesto tiene debate. El servicio de la deuda, no. Y sin embargo, es la mayor transferencia de renta que ejecuta el Estado cada año. "
428	        </div>
429	      `
430	    },
431	    {
432	      label: 'CAPA 03', labelClass: 'lbl-3',
433	      title: 'La Bifurcación Civilizatoria', titleClass: 'c-red',
434	      html: `
435	        <div style="margin:0 -1.5rem 1.8rem;line-height:0;overflow:hidden;">
436	          <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" font-family="monospace" style="width:100%;height:auto;display:block;">
437	            <defs>
438	              <radialGradient id="i4c3_bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#00100d"/><stop offset="100%" stop-color="#060608"/></radialGradient>
439	              <radialGradient id="i4c3_gcl" cx="15%" cy="50%" r="40%"><stop offset="0%" stop-color="#00f5d4" stop-opacity="0.10"/><stop offset="100%" stop-color="#00f5d4" stop-opacity="0"/></radialGradient>
440	              <radialGradient id="i4c3_grr" cx="85%" cy="50%" r="40%"><stop offset="0%" stop-color="#ff2244" stop-opacity="0.10"/><stop offset="100%" stop-color="#ff2244" stop-opacity="0"/></radialGradient>
441	              <filter id="i4c3_gc"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
442	              <filter id="i4c3_gsm"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
443	              <linearGradient id="i4c3_bif" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#00f5d4"/><stop offset="50%" stop-color="#ffffff"/><stop offset="100%" stop-color="#ff2244"/></linearGradient>
444	              <pattern id="i4c3_grid" width="45" height="45" patternUnits="userSpaceOnUse"><path d="M 45 0 L 0 0 0 45" fill="none" stroke="rgba(0,245,212,0.04)" stroke-width="1"/></pattern>
445	            </defs>
446	            <rect width="800" height="500" fill="url(#i4c3_bg)"/><rect width="800" height="500" fill="url(#i4c3_grid)"/>
447	            <rect width="800" height="500" fill="url(#i4c3_gcl)"/><rect width="800" height="500" fill="url(#i4c3_grr)"/>
448	            <line x1="400" y1="55" x2="400" y2="445" stroke="#2a2a3a" stroke-width="1" stroke-dasharray="4,4"/>
449	            <text x="400" y="32" text-anchor="middle" font-size="9" letter-spacing="5" fill="#ffffff" font-weight="bold" opacity="0.6">INVESTIGACIÓN · CAPA 03 · ENCAJE MCI v2.26</text>
450	            <text x="400" y="72" text-anchor="middle" font-size="11" letter-spacing="4" fill="#ffffff" font-weight="bold" opacity="0.7">BIFURCACIÓN CIVILIZATORIA</text>
451	            <text x="400" y="106" text-anchor="middle" font-size="30" font-weight="900" fill="url(#i4c3_bif)" font-family="Georgia, serif">2026 — 2036</text>
452	            <text x="185" y="142" text-anchor="middle" font-size="10" letter-spacing="4" fill="#00f5d4" font-weight="bold">↑ MODELO SINTRÓPICO</text>
453	            <g transform="translate(135,158)" filter="url(#i4c3_gc)"><circle cx="50" cy="50" r="44" fill="none" stroke="#00f5d4" stroke-width="2"/><circle cx="50" cy="50" r="38" fill="rgba(0,245,212,0.05)"/><text x="50" y="44" text-anchor="middle" font-size="28" fill="#00f5d4" font-weight="bold">₿</text><text x="50" y="62" text-anchor="middle" font-size="8" letter-spacing="2" fill="#00f5d4" font-weight="bold">BITCOIN</text><text x="50" y="76" text-anchor="middle" font-size="7" letter-spacing="1" fill="#ffffff" font-weight="bold">STANDARD</text></g>
454	            <g transform="translate(22,278)"><rect width="295" height="20" rx="2" fill="rgba(0,245,212,0.07)" stroke="rgba(0,245,212,0.25)" stroke-width="0.8"/><text x="10" y="14" font-size="9" fill="#00f5d4" font-weight="bold">▸</text><text x="24" y="14" font-size="9" fill="#ffffff" font-weight="bold">Escasez matemática absoluta</text></g>
455	            <g transform="translate(22,303)"><rect width="295" height="20" rx="2" fill="rgba(0,245,212,0.07)" stroke="rgba(0,245,212,0.25)" stroke-width="0.8"/><text x="10" y="14" font-size="9" fill="#00f5d4" font-weight="bold">▸</text><text x="24" y="14" font-size="9" fill="#ffffff" font-weight="bold">Inflación por decreto: imposible</text></g>
456	            <g transform="translate(22,328)"><rect width="295" height="20" rx="2" fill="rgba(0,245,212,0.07)" stroke="rgba(0,245,212,0.25)" stroke-width="0.8"/><text x="10" y="14" font-size="9" fill="#00f5d4" font-weight="bold">▸</text><text x="24" y="14" font-size="9" fill="#ffffff" font-weight="bold">Transparencia total on-chain</text></g>
457	            <g transform="translate(22,353)"><rect width="295" height="20" rx="2" fill="rgba(0,245,212,0.07)" stroke="rgba(0,245,212,0.25)" stroke-width="0.8"/><text x="10" y="14" font-size="9" fill="#00f5d4" font-weight="bold">▸</text><text x="24" y="14" font-size="9" fill="#ffffff" font-weight="bold">Soberanía individual del ahorro</text></g>
458	            <g transform="translate(22,378)"><rect width="295" height="20" rx="2" fill="rgba(0,245,212,0.07)" stroke="rgba(0,245,212,0.25)" stroke-width="0.8"/><text x="10" y="14" font-size="9" fill="#00f5d4" font-weight="bold">▸</text><text x="24" y="14" font-size="9" fill="#ffffff" font-weight="bold">La constitución es el código</text></g>
459	            <text x="615" y="142" text-anchor="middle" font-size="10" letter-spacing="4" fill="#ff2244" font-weight="bold">↓ MODELO ENTRÓPICO</text>
460	            <g transform="translate(565,158)"><circle cx="50" cy="50" r="44" fill="none" stroke="#ff2244" stroke-width="2" stroke-dasharray="4,3"/><circle cx="50" cy="50" r="38" fill="rgba(255,34,68,0.05)"/><text x="50" y="42" text-anchor="middle" font-size="24" fill="#ff2244">⚖</text><text x="50" y="62" text-anchor="middle" font-size="8" letter-spacing="2" fill="#ff2244" font-weight="bold">ESTADO</text><text x="50" y="76" text-anchor="middle" font-size="7" letter-spacing="1" fill="#ffffff" font-weight="bold">DEUDOR</text></g>
461	            <g transform="translate(483,278)"><rect width="295" height="20" rx="2" fill="rgba(255,34,68,0.07)" stroke="rgba(255,34,68,0.25)" stroke-width="0.8"/><text x="10" y="14" font-size="9" fill="#ff2244" font-weight="bold">▸</text><text x="24" y="14" font-size="9" fill="#ffffff" font-weight="bold">Deuda sin techo constitucional</text></g>
462	            <g transform="translate(483,303)"><rect width="295" height="20" rx="2" fill="rgba(255,34,68,0.07)" stroke="rgba(255,34,68,0.25)" stroke-width="0.8"/><text x="10" y="14" font-size="9" fill="#ff2244" font-weight="bold">▸</text><text x="24" y="14" font-size="9" fill="#ffffff" font-weight="bold">Efecto Cantillon invisible en ley</text></g>
463	            <g transform="translate(483,328)"><rect width="295" height="20" rx="2" fill="rgba(255,34,68,0.07)" stroke="rgba(255,34,68,0.25)" stroke-width="0.8"/><text x="10" y="14" font-size="9" fill="#ff2244" font-weight="bold">▸</text><text x="24" y="14" font-size="9" fill="#ffffff" font-weight="bold">Opacidad distributiva estructural</text></g>
464	            <g transform="translate(483,353)"><rect width="295" height="20" rx="2" fill="rgba(255,34,68,0.07)" stroke="rgba(255,34,68,0.25)" stroke-width="0.8"/><text x="10" y="14" font-size="9" fill="#ff2244" font-weight="bold">▸</text><text x="24" y="14" font-size="9" fill="#ffffff" font-weight="bold">Acreedor &gt; contribuyente futuro</text></g>
465	            <g transform="translate(483,378)"><rect width="295" height="20" rx="2" fill="rgba(255,34,68,0.07)" stroke="rgba(255,34,68,0.25)" stroke-width="0.8"/><text x="10" y="14" font-size="9" fill="#ff2244" font-weight="bold">▸</text><text x="24" y="14" font-size="9" fill="#ffffff" font-weight="bold">Expolio diferido como norma</text></g>
466	            <circle cx="400" cy="228" r="24" fill="#0b0b10" stroke="#2a2a3a" stroke-width="1.5"/>
467	            <text x="400" y="235" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff" font-family="Georgia, serif">VS</text>
468	            <line x1="80" y1="422" x2="720" y2="422" stroke="#1a1a28" stroke-width="1"/>
469	            <text x="400" y="444" text-anchor="middle" font-size="11" fill="#ffffff" font-style="italic" font-family="Georgia, serif">Tú decides en cuál de los dos sistemas depositas tu confianza.</text>
470	            <text x="400" y="464" text-anchor="middle" font-size="10" letter-spacing="3" fill="#ffffff" font-weight="bold">Y TU AHORRO.</text>
471	            <text x="760" y="492" text-anchor="end" font-size="8" letter-spacing="2" fill="#ffffff" opacity="0.3">LO QUE NO VES</text>
472	          </svg>
473	        </div>
474	        <p>El Cargo 06 es la síntesis de todo lo anterior. <strong>El encaje jurídico convierte en normal y legítimo que una mayoría presente firme en nombre de ciudadanos que aún no existen</strong>, hipotecando su capacidad fiscal futura sin su consentimiento efectivo. En el Derecho privado, nadie puede obligar contractualmente a un tercero sin su consentimiento. En el Derecho público, el Estado lo hace sistemáticamente.</p>
475	        <h3 class="c-red">El Veredicto: 3 Ausencias que Definen un Sistema</h3>
476	        <table class="two-col">
477	          <tr><th>Lo que el Derecho no garantiza</th><th>Lo que debería proteger</th></tr>
478	          <tr><td>Constitucionalismo intergeneracional</td><td>Techo de deuda rígido y derechos del contribuyente futuro</td></tr>
479	          <tr><td>Simetría de garantías constitucionales</td><td>Igual protección para acreedor y deudor involuntario</td></tr>
480	          <tr><td>Transparencia distributiva obligatoria</td><td>Informe de impacto Cantillon en cada ley presupuestaria</td></tr>
481	        </table>
482	        <h3 class="c-cyan">La Bifurcación Civilizatoria 2026–2036</h3>
483	        <p>La deuda pública no es un fallo del sistema jurídico. Es su producto más perfecto. Un mecanismo que <strong>concentra beneficios en el presente, dispersa costes en el futuro</strong>, y convierte la exacción sistemática en tecnocracia neutral.</p>
484	        <p>Bitcoin no es una inversión. Es la primera tecnología de la historia que hace <strong>matemáticamente imposible</strong> que un Estado infle su deuda, monetice su déficit o transfiera silenciosamente la riqueza de los ahorradores a los primeros receptores del dinero nuevo. No necesita constitucionalismo intergeneracional porque su constitución es el código. Y el código no negocia.</p>
485	        <div class="q-block q-red">
486	          " El sistema no está roto. Está funcionando exactamente como fue diseñado. <em>Y ese es el problema.</em> — Análisis Doctrinal · NakamotoBook · MCI v2.26 "
487	        </div>
488	        <p>La bifurcación civilizatoria de 2026–2036 no es una metáfora. Es la tensión entre dos sistemas incompatibles: uno que legitima el expolio diferido mediante el Derecho, y otro que lo hace imposible mediante las matemáticas. <strong>Nombrar esto con precisión es el primer acto de resistencia.</strong></p>
489	      `
490	    }
491	  ]
492	},
493	
494	/* ── 4: Lo Que No Vemos ── */
495	{
496	  title: 'Lo Que No Vemos',
497	  subtitle: 'El suicidio silencioso de las civilizaciones',
498	  date: '2026',
499	  capas: 5,
500	  mins: 9,
501	  views: 0,
502	  badge: 'DEMOGRAFÍA Y CIVILIZACIÓN',
503	  badgeClass: 'badge-law',
504	  layers: [
505	    {
506	      label: 'CAPA 01', labelClass: 'lbl-1',
507	      title: 'Los números que nadie quiere ver', titleClass: 'c-cyan',
508	      html: `
509	  <p>El umbral de reemplazo generacional es <strong>2.1 hijos por mujer</strong>.</p>
510	
511	  <p>Por debajo de ese nivel, una sociedad no se reproduce a sí misma. Es aritmética, no ideología.</p>
512	
513	  <ul>
514	    <li><strong>Corea del Sur:</strong> 0.72</li>
515	    <li><strong>España:</strong> 1.16</li>
516	    <li><strong>Italia:</strong> 1.20</li>
517	    <li><strong>Japón:</strong> 1.2</li>
518	  </ul>
519	
520	  <p>Al mismo tiempo:</p>
521	
522	  <ul>
523	    <li><strong>Níger:</strong> 6.8</li>
524	    <li><strong>Amish:</strong> 6–7</li>
525	    <li><strong>Ultraortodoxos:</strong> 6–8</li>
526	  </ul>
527	
528	  <p>Dos realidades opuestas. Un mismo planeta.</p>
529	  `
530	    },
531	    {
532	      label: 'CAPA 02', labelClass: 'lbl-2',
533	      title: 'El patrón oculto', titleClass: 'c-yellow',
534	      html: `
535	  <p>Las comunidades con alta natalidad comparten algo:</p>
536	
537	  <blockquote>
538	  Tienen una respuesta operativa a la pregunta: ¿para qué estamos aquí?
539	  </blockquote>
540	
541	  <p>Las sociedades con natalidad en colapso comparten lo contrario:</p>
542	
543	  <blockquote>
544	  El individuo se convierte en el fin último.
545	  </blockquote>
546	
547	  <p>No es una coincidencia cultural. Es una variable estructural.</p>
548	  `
549	    },
550	    {
551	      label: 'CAPA 03', labelClass: 'lbl-3',
552	      title: 'Los casos que revelan el mecanismo', titleClass: 'c-cyan',
553	      html: `
554	  <p><strong>Amish:</strong> sin Estado, sin incentivos, alta natalidad.</p>
555	  <p><strong>Ultraortodoxos:</strong> natalidad como continuidad histórica.</p>
556	  <p><strong>África subsahariana:</strong> hijos como sistema de seguridad social.</p>
557	  <p><strong>Corea del Sur:</strong> prosperidad + colapso demográfico.</p>
558	
559	  <p>El factor común no es económico. Es existencial.</p>
560	  `
561	    },
562	    {
563	      label: 'CAPA 04', labelClass: 'lbl-2',
564	      title: 'El mecanismo invisible', titleClass: 'c-yellow',
565	      html: `
566	  <p>Cuando el individuo es el centro absoluto:</p>
567	
568	  <ul>
569	    <li>Un hijo es una carga</li>
570	    <li>El futuro pierde relevancia</li>
571	    <li>La continuidad deja de ser prioridad</li>
572	  </ul>
573	
574	  <p>El resultado es lógico:</p>
575	
576	  <blockquote>
577	  sociedades que optimizan el presente... y desaparecen en el futuro.
578	  </blockquote>
579	  `
580	    },
581	    {
582	      label: 'CAPA 05', labelClass: 'lbl-1',
583	      title: 'El silencio', titleClass: 'c-cyan',
584	      html: `
585	  <p>Las civilizaciones no mueren con ruido.</p>
586	
587	  <p>Mueren con:</p>
588	
589	  <ul>
590	    <li>aulas vacías</li>
591	    <li>ciudades envejecidas</li>
592	    <li>familias que no se forman</li>
593	  </ul>
594	
595	  <p><strong>El suicidio civilizacional no hace ruido.</strong></p>
596	  `
597	    }
  ]
},

/* ── 5: El suicidio silencioso de las Civilizaciones ── */
{
  badge: 'DEMOGRAFÍA Y CIVILIZACIÓN',
  badgeClass: 'badge-law',
  title: 'El suicidio silencioso de las Civilizaciones',
  subtitle: 'La demografía como destino: lo que nadie quiere calcular',
  date: '2026',
  capas: 5,
  mins: 9,
  views: 0,
  layers: [
    {
      label: 'CAPA 01', labelClass: 'lbl-1',
      title: 'La aritmética que nadie enseña', titleClass: 'c-cyan',
      html: `
        <p>El umbral de reemplazo generacional es <strong>2.1 hijos por mujer</strong>. Por debajo de ese nivel, una sociedad no se reproduce a sí misma. Es aritmética, no ideología.</p>
        <div class="stats-row">
          <div class="stat-card"><div class="stat-n c-cyan" data-target="72" data-suffix="%">0</div><div class="stat-label">de los países desarrollados están por debajo del umbral de reemplazo</div></div>
          <div class="stat-card"><div class="stat-n c-red" data-target="0" data-suffix=".72">0</div><div class="stat-label">tasa de fertilidad de Corea del Sur — mínimo histórico global registrado</div></div>
          <div class="stat-card"><div class="stat-n c-yellow" data-target="1" data-suffix=".16">0</div><div class="stat-label">tasa de fertilidad de España en 2023</div></div>
          <div class="stat-card"><div class="stat-n c-red" data-target="50">0</div><div class="stat-label">años para que una sociedad con TFR=1.0 pierda el 25% de su población</div></div>
        </div>
        <div class="q-block q-red">"Las cifras no mienten. Solo incomodan."</div>
      `
    },
    {
      label: 'CAPA 02', labelClass: 'lbl-2',
      title: 'Las variables que el modelo ignora', titleClass: 'c-yellow',
      html: `
        <p>Las proyecciones demográficas oficiales asumen convergencia hacia el reemplazo. Llevan décadas equivocándose en la misma dirección.</p>
        <p>Lo que no entra en los modelos:</p>
        <ul>
          <li>El efecto estructural de la urbanización sobre la fertilidad</li>
          <li>La correlación inversa entre nivel educativo y natalidad en economías avanzadas</li>
          <li>El coste de oportunidad del hijo en economías de alto coste de vida</li>
          <li>La ruptura del contrato intergeneracional en sistemas de pensiones deficitarios</li>
        </ul>
        <div class="q-block q-yellow">"Cuando los incentivos para procrear desaparecen, las cifras dicen la verdad antes que los políticos."</div>
      `
    },
    {
      label: 'CAPA 03', labelClass: 'lbl-3',
      title: 'Quién sí se reproduce y por qué', titleClass: 'c-red',
      html: `
        <p>Hay comunidades que mantienen alta natalidad dentro del mundo moderno. Todas comparten una característica:</p>
        <div class="q-block q-red">Tienen una respuesta operativa a la pregunta: ¿para qué existimos?</div>
        <table class="two-col">
          <tr><th>Comunidad</th><th>Tasa de fertilidad</th></tr>
          <tr><td>Amish (EE.UU.)</td><td>6–7</td></tr>
          <tr><td>Ultraortodoxos (Israel)</td><td>6–8</td></tr>
          <tr><td>Níger</td><td>6.8</td></tr>
          <tr><td>Media Unión Europea</td><td>1.46</td></tr>
          <tr><td>Japón</td><td>1.20</td></tr>
          <tr><td>Corea del Sur</td><td>0.72</td></tr>
        </table>
        <p>El factor diferencial no es económico. Es la existencia de un marco de sentido que trasciende al individuo.</p>
      `
    },
    {
      label: 'CAPA 04', labelClass: 'lbl-2',
      title: 'El colapso como elección sistémica', titleClass: 'c-yellow',
      html: `
        <p>Las sociedades con colapso demográfico no están siendo destruidas desde fuera. Están tomando, de forma difusa y colectiva, la decisión de no continuar.</p>
        <p>Los mecanismos estructurales:</p>
        <ul>
          <li>Sistemas educativos que retrasan la independencia hasta los 30 años</li>
          <li>Mercados inmobiliarios que hacen la familia económicamente inaccesible</li>
          <li>Culturas que penalizan socialmente la maternidad temprana</li>
          <li>Estados de bienestar que sustituyen la función económica de los hijos</li>
        </ul>
        <div class="q-block q-yellow">"No es que no quieran hijos. Es que el sistema hace que tenerlos sea una decisión económicamente irracional."</div>
      `
    },
    {
      label: 'CAPA 05', labelClass: 'lbl-1',
      title: 'Lo que viene cuando nadie viene', titleClass: 'c-cyan',
      html: `
        <p>Una sociedad que no se reproduce no desaparece de golpe. Se contrae durante generaciones, en silencio:</p>
        <ul>
          <li>Escuelas que cierran por falta de alumnos</li>
          <li>Ciudades que encogen desde los barrios periféricos hacia adentro</li>
          <li>Sistemas de pensiones que colapsan por insuficiencia de cotizantes</li>
          <li>Culturas que dejan de transmitirse porque no hay quién las reciba</li>
        </ul>
        <p>El suicidio civilizacional no es un evento. Es un proceso lento, silencioso y estadísticamente inevitable si no se invierte la tendencia.</p>
        <div class="q-block q-red">"Las civilizaciones no mueren con ruido. Mueren con aulas vacías y casas que nadie hereda."</div>
      `
    }
  ]
}
];
