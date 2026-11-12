import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Compass,
  Heart,
  HeartHandshake,
  House,
  Leaf,
  LockKeyhole,
  MapPin,
  Menu,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import './App.css'

type Section = 'inicio' | 'atencion' | 'derechos' | 'autonomia'

const questions = [
  '¿Alguien te ha amenazado, empujado o lastimado recientemente?',
  '¿Sientes que tu seguridad podría estar en riesgo hoy?',
  '¿Te controlan el dinero, tus comunicaciones o tus salidas?',
]

const resources = [
  { name: 'Emergencias', type: 'Línea telefónica', place: 'Colombia · verifica disponibilidad local', phone: '123', icon: Phone },
  { name: 'Orientación para mujeres', type: 'Orientación telefónica', place: 'Colombia · confirma horario y cobertura', phone: '155', icon: HeartHandshake },
  { name: 'Casa de acogida cercana', type: 'Alojamiento temporal', place: 'Ejemplo de directorio · dato por confirmar', phone: '', icon: House },
  { name: 'Centro de atención integral', type: 'Atención presencial', place: 'Ejemplo de directorio · dato por confirmar', phone: '', icon: MapPin },
]

const ideas = [
  { title: 'Repostería por encargo', category: 'Gastronomía', investment: 'Baja', description: 'Postres y panadería para pedidos de barrio o fechas especiales.', firstStep: 'Prueba tres recetas, calcula cada porción y ofrece una pequeña tanda a personas de confianza.' },
  { title: 'Asistencia virtual', category: 'Servicios digitales', investment: 'Sin inversión', description: 'Apoyo remoto con agendas, mensajes, documentos y tareas administrativas.', firstStep: 'Anota tres tareas que ya sabes hacer y prepara una descripción breve de tus servicios.' },
  { title: 'Accesorios hechos a mano', category: 'Artesanías', investment: 'Baja', description: 'Piezas pequeñas personalizadas, creadas bajo pedido para evitar inventario.', firstStep: 'Haz una muestra, calcula materiales y tiempo, y toma fotos con luz natural.' },
  { title: 'Cuidado personal a domicilio', category: 'Belleza', investment: 'Baja', description: 'Servicios de uñas, peinados o maquillaje con agenda flexible.', firstStep: 'Define un servicio inicial, revisa las normas sanitarias locales y calcula un precio por hora.' },
  { title: 'Reventa de productos locales', category: 'Comercio local', investment: 'Desde casa', description: 'Venta por catálogo o por pedido de productos de proveedores cercanos.', firstStep: 'Pregunta por condiciones de pedido mínimo y confirma costos antes de ofrecer productos.' },
  { title: 'Plantillas y recursos digitales', category: 'Servicios digitales', investment: 'Sin inversión', description: 'Diseño de piezas sencillas, formatos o materiales descargables.', firstStep: 'Crea una muestra gratuita y consulta qué formato necesita una posible clienta.' },
]

const categories = ['Todas', 'Gastronomía', 'Servicios digitales', 'Artesanías', 'Comercio local', 'Belleza']
const investmentFilters = ['Cualquier inversión', 'Sin inversión', 'Baja', 'Desde casa']

function App() {
  const [section, setSection] = useState<Section>('inicio')
  const [discreet, setDiscreet] = useState(false)
  const [riskAnswers, setRiskAnswers] = useState<(string | null)[]>([null, null, null])
  const [riskResult, setRiskResult] = useState(false)
  const [resourceFilter, setResourceFilter] = useState('Todas')
  const [ideaCategory, setIdeaCategory] = useState('Todas')
  const [investmentFilter, setInvestmentFilter] = useState('Cualquier inversión')
  const [requestSent, setRequestSent] = useState(false)
  const [ideaSent, setIdeaSent] = useState(false)
  const [breathing, setBreathing] = useState(false)
  const [breathStep, setBreathStep] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    let lastEscape = 0
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      const now = Date.now()
      if (now - lastEscape < 2000) {
        window.location.replace('https://www.google.com/search?q=pron%C3%B3stico+del+tiempo')
      }
      lastEscape = now
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (!breathing) return
    const timer = window.setInterval(() => setBreathStep((step) => (step + 1) % 4), 4000)
    return () => window.clearInterval(timer)
  }, [breathing])

  const quickExit = () => window.location.replace('https://www.google.com/search?q=pron%C3%B3stico+del+tiempo')
  const goTo = (nextSection: Section) => {
    setSection(nextSection)
    setMobileMenuOpen(false)
    setRiskResult(false)
  }
  const riskScore = riskAnswers.reduce((total, answer) => total + (answer === 'Sí' ? 1 : 0), 0)
  const visibleResources = resourceFilter === 'Todas' ? resources : resources.filter((resource) => resource.type === resourceFilter)
  const visibleIdeas = ideas.filter((idea) => (ideaCategory === 'Todas' || idea.category === ideaCategory) && (investmentFilter === 'Cualquier inversión' || idea.investment === investmentFilter))

  if (discreet) {
    return (
      <div className="discreet-page">
        <header className="discreet-header">
          <a className="wordmark discreet-wordmark" href="#home" onClick={(event) => event.preventDefault()}><Leaf size={19} /> Casa tranquila</a>
          <button className="discreet-return" type="button" onClick={() => setDiscreet(false)}>Volver al inicio <ArrowUpRight size={15} /></button>
          <button className="exit-button discreet-exit" type="button" onClick={quickExit} aria-label="Salir a una página neutral">Salir <X size={15} /></button>
        </header>
        <main className="recipe-page">
          <span className="eyebrow">PEQUEÑOS MOMENTOS</span>
          <h1>Un ritmo más amable para hoy.</h1>
          <p>Ideas sencillas para cuidarte, preparar algo rico y hacer espacio para una pausa.</p>
          <div className="recipe-feature">
            <div className="recipe-art" aria-hidden="true"><span>01</span><Leaf size={66} strokeWidth={1} /></div>
            <div><span className="eyebrow">UNA PAUSA EN CASA</span><h2>Infusión cítrica de tarde</h2><p>Agua caliente, una rodaja de naranja y unos minutos sin prisa. Puedes ajustar la receta a lo que tengas a mano.</p><span className="recipe-time"><Clock3 size={15} /> 5 minutos</span></div>
          </div>
          <div className="recipe-note"><Heart size={17} /> Cada día puede empezar de nuevo, sin apuro.</div>
        </main>
      </div>
    )
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileMenuOpen ? 'sidebar-open' : ''}`}>
        <a className="wordmark" href="#inicio" onClick={(event) => { event.preventDefault(); goTo('inicio') }}><span className="brand-symbol"><HeartHandshake size={20} /></span><span>red de apoyo<small>UN ESPACIO PROPIO</small></span></a>
        <div className="sidebar-label">TU ESPACIO</div>
        <nav className="side-nav" aria-label="Navegación principal">
          <button className={section === 'inicio' ? 'nav-item active' : 'nav-item'} onClick={() => goTo('inicio')}><House size={18} />Inicio</button>
          <button className={section === 'atencion' ? 'nav-item active' : 'nav-item'} onClick={() => goTo('atencion')}><HeartHandshake size={18} />Atención</button>
          <button className={section === 'derechos' ? 'nav-item active' : 'nav-item'} onClick={() => goTo('derechos')}><BookOpen size={18} />Mis derechos</button>
          <button className={section === 'autonomia' ? 'nav-item active' : 'nav-item'} onClick={() => goTo('autonomia')}><BriefcaseBusiness size={18} />Autonomía</button>
        </nav>
        <div className="sidebar-bottom">
          <div className="privacy-card"><LockKeyhole size={17} /><strong>Tu ritmo, tus decisiones</strong><p>No necesitas registrarte para explorar este espacio.</p></div>
          <button className="discreet-toggle" type="button" onClick={() => setDiscreet(true)}><Leaf size={17} />Modo discreto <span>↗</span></button>
          <span className="prototype-note">Prototipo · No es un servicio de emergencia</span>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <button className="mobile-menu" type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Abrir navegación"><Menu size={21} /></button>
          <div className="breadcrumb">Red de apoyo <span>/</span> <strong>{section === 'inicio' ? 'Inicio' : section === 'atencion' ? 'Atención' : section === 'derechos' ? 'Mis derechos' : 'Autonomía'}</strong></div>
          <div className="top-actions"><button className="top-discreet" type="button" onClick={() => setDiscreet(true)}><Leaf size={16} /> Modo discreto</button><button className="exit-button" type="button" onClick={quickExit} title="También puedes pulsar Escape dos veces">Salida rápida <X size={16} /></button></div>
        </header>

        <div className="content-wrap">
          <div className="prototype-banner"><ShieldCheck size={17} /><span><strong>Prototipo de orientación.</strong> Esta página no almacena ni envía tus datos, y no ofrece atención en tiempo real.</span><button type="button" aria-label="Cerrar aviso" onClick={(event) => event.currentTarget.parentElement?.remove()}><X size={15} /></button></div>

          {section === 'inicio' && <>
            <section className="welcome-hero">
              <div className="hero-copy"><span className="eyebrow"><span className="eyebrow-dot" /> UN ESPACIO A TU RITMO</span><h1>No tienes que resolverlo todo hoy.</h1><p>Un lugar para encontrar orientación, conocer tus opciones y dar el siguiente paso cuando tú lo decidas.</p><button className="button-dark" type="button" onClick={() => goTo('atencion')}>Explorar opciones de apoyo <ArrowUpRight size={17} /></button></div>
              <div className="hero-art" aria-hidden="true"><div className="sun-disc" /><div className="arch arch-one" /><div className="arch arch-two" /><div className="hero-leaf"><Leaf size={70} strokeWidth={1} /></div><div className="art-caption">ESTE ESPACIO ES TUYO<br /><span>HOY Y CUANDO LO NECESITES</span></div><span className="art-sparkle">✳</span></div>
            </section>
            <section className="quick-section"><div className="section-heading"><div><span className="eyebrow">POR DÓNDE EMPEZAR</span><h2>Elige lo que necesitas ahora</h2></div><span className="soft-caption">Sin prisa. Sin obligación.</span></div>
              <div className="quick-grid">
                <button className="quick-card card-peach" onClick={() => goTo('atencion')}><span className="card-icon"><ShieldAlert size={20} /></span><span className="card-number">01 / ACOMPAÑAMIENTO</span><strong>Necesito apoyo</strong><span>Opciones para orientarte y pedir ayuda a tu manera.</span><ArrowUpRight className="card-arrow" size={18} /></button>
                <button className="quick-card card-green" onClick={() => goTo('derechos')}><span className="card-icon"><BookOpen size={20} /></span><span className="card-number">02 / INFORMACIÓN</span><strong>Quiero conocer mis derechos</strong><span>Una guía sencilla para entender las rutas de atención.</span><ArrowUpRight className="card-arrow" size={18} /></button>
                <button className="quick-card card-yellow" onClick={() => goTo('autonomia')}><span className="card-icon"><Sparkles size={20} /></span><span className="card-number">03 / NUEVOS CAMINOS</span><strong>Quiero empezar algo propio</strong><span>Ideas y recursos para construir autonomía económica.</span><ArrowUpRight className="card-arrow" size={18} /></button>
              </div>
            </section>
            <section className="home-bottom"><div className="breathing-card"><div><span className="eyebrow">UN MOMENTO PARA TI</span><h2>Haz una pausa</h2><p>Si te sirve, acompaña tu respiración durante un minuto.</p><button className="button-outline" onClick={() => { setBreathing(!breathing); setBreathStep(0) }}>{breathing ? 'Pausar ejercicio' : 'Iniciar respiración'} <ArrowUpRight size={16} /></button></div><div className={`breath-orb ${breathing ? 'breath-active' : ''}`}><span>{breathing ? ['Inhala', 'Sostén', 'Exhala', 'Suelta'][breathStep] : <Leaf size={25} />}</span></div></div><div className="urgent-card"><div className="urgent-mark"><Phone size={19} /></div><div><span className="eyebrow">SI HAY PELIGRO INMEDIATO</span><h3>Busca ayuda urgente</h3><p>En Colombia puedes llamar al 123. Confirma los números de emergencia de tu localidad.</p><a href="tel:123">Llamar al 123 <ArrowUpRight size={15} /></a></div></div></section>
          </>}

          {section === 'atencion' && <section className="inner-page"><div className="page-intro"><span className="eyebrow">ACOMPAÑAMIENTO</span><h1>Hay más de una forma de pedir apoyo.</h1><p>Explora recursos, revisa señales de riesgo o prepara una solicitud. Tú decides qué compartir.</p></div>
            <div className="section-heading compact-heading"><div><span className="eyebrow">ORIENTACIÓN PERSONAL</span><h2>Revisa cómo te sientes</h2></div></div>
            <div className="risk-panel"><div className="risk-intro"><div className="risk-icon"><ShieldAlert size={22} /></div><h3>Chequeo de seguridad</h3><p>Tres preguntas opcionales para ayudarte a pensar en tu situación. No es diagnóstico ni reemplaza atención profesional.</p><div className="risk-disclaimer"><LockKeyhole size={15} /> Tus respuestas se quedan en esta página mientras la tengas abierta.</div></div><div className="risk-questions">{questions.map((question, index) => <fieldset className="risk-question" key={question}><legend><span>0{index + 1}</span>{question}</legend><div className="choice-row">{['Sí', 'No', 'No estoy segura'].map((answer) => <button className={riskAnswers[index] === answer ? 'choice selected' : 'choice'} key={answer} type="button" onClick={() => { setRiskAnswers(riskAnswers.map((value, answerIndex) => answerIndex === index ? answer : value)); setRiskResult(false) }}>{answer}</button>)}</div></fieldset>)}<button className="button-dark" disabled={riskAnswers.some((answer) => answer === null)} onClick={() => setRiskResult(true)}>Ver orientación <ArrowUpRight size={16} /></button>{riskResult && <div className="risk-result" role="status"><strong>{riskScore > 0 ? 'Podría ser útil buscar apoyo pronto.' : 'Gracias por tomarte este momento.'}</strong><p>{riskScore > 0 ? 'Si te sientes en peligro ahora, intenta llegar a un lugar seguro y contacta servicios de emergencia o a alguien de confianza. No tienes que decidir nada aquí.' : 'Aunque no identifiques una señal ahora, puedes volver a consultar estas opciones cuando lo necesites.'}</p><a href="tel:123">Emergencias en Colombia: 123 <ArrowUpRight size={14} /></a></div>}</div></div>
            <div className="section-heading resources-heading"><div><span className="eyebrow">CERCA DE TI</span><h2>Directorio de apoyo</h2></div><label className="select-wrap"><span className="sr-only">Filtrar por tipo de recurso</span><select value={resourceFilter} onChange={(event) => setResourceFilter(event.target.value)}><option>Todas</option><option>Línea telefónica</option><option>Orientación telefónica</option><option>Alojamiento temporal</option><option>Atención presencial</option></select><ChevronDown size={15} /></label></div>
            <div className="directory-notice"><MapPin size={16} /> Directorio de demostración. Verifica existencia, dirección, horario y cobertura de cada servicio antes de desplazarte.</div><div className="resource-list">{visibleResources.map((resource) => { const Icon = resource.icon; return <article className="resource-row" key={resource.name}><span className="resource-icon"><Icon size={19} /></span><div className="resource-main"><span className="resource-type">{resource.type}</span><h3>{resource.name}</h3><p>{resource.place}</p></div>{resource.phone ? <a className="resource-action" href={`tel:${resource.phone}`}><Phone size={15} /> Llamar {resource.phone}</a> : <span className="verify-label">Por verificar</span>}</article> })}</div>
            <div className="section-heading request-heading"><div><span className="eyebrow">CUANDO TÚ LO DECIDAS</span><h2>Prepara una solicitud de orientación</h2></div></div><form className="request-form" onSubmit={(event) => { event.preventDefault(); setRequestSent(true) }}><div className="form-disclaimer"><ShieldCheck size={18} /><p><strong>Este formulario es una demostración.</strong> No envía ni guarda información. No escribas datos reales o que puedan ponerte en riesgo.</p></div><div className="form-grid"><label>¿Qué tipo de apoyo buscas?<select defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Orientación jurídica</option><option>Apoyo emocional</option><option>Alojamiento temporal</option><option>Información para denunciar</option><option>Otro tipo de orientación</option></select></label><label>¿Cuál sería un horario seguro?<select defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Mañana</option><option>Tarde</option><option>Solo por mensaje</option><option>Prefiero no indicarlo</option></select></label><label>Medio de contacto seguro (opcional)<select defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Llamada</option><option>Mensaje de texto</option><option>WhatsApp</option><option>Correo electrónico</option><option>No deseo indicar un medio</option></select></label><label>¿Tienes personas a cargo? <select defaultValue=""><option value="" disabled>Prefiero no responder</option><option>Sí</option><option>No</option></select></label></div><button className="button-dark" type="submit">{requestSent ? <><Check size={17} /> Solicitud revisada</> : <>Revisar solicitud <ArrowUpRight size={16} /></>}</button>{requestSent && <p className="form-confirmation" role="status">La demostración terminó aquí. No se envió información ni se contactará a nadie.</p>}</form>
          </section>}

          {section === 'derechos' && <section className="inner-page"><div className="page-intro"><span className="eyebrow">INFORMACIÓN PARA TI</span><h1>Conocer tus opciones también es un paso.</h1><p>Información general para orientarte. Las rutas pueden variar según el lugar donde vivas.</p></div><div className="rights-note"><CircleHelp size={20} /><p><strong>No tienes que denunciar para pedir orientación.</strong> Puedes consultar tus opciones con una profesional o una entidad local antes de decidir.</p></div><div className="steps-grid"><article className="step-card"><span>01</span><h2>Antes</h2><p>Si puedes hacerlo sin aumentar el riesgo, identifica a una persona de confianza y un lugar al que podrías ir.</p><ul><li>Piensa en una palabra clave para pedir ayuda.</li><li>Guarda teléfonos importantes en un lugar seguro.</li><li>Prioriza lo que te haga sentir más segura hoy.</li></ul></article><article className="step-card"><span>02</span><h2>Durante</h2><p>Si hay una emergencia, busca un lugar seguro y contacta a servicios de emergencia locales.</p><ul><li>No tienes que confrontar a quien te agrede.</li><li>Si puedes, avisa a alguien de confianza.</li><li>En Colombia, el 123 es una línea de emergencia; verifica cobertura local.</li></ul></article><article className="step-card"><span>03</span><h2>Después</h2><p>Una entidad de atención puede explicar las opciones disponibles y acompañarte en la ruta.</p><ul><li>La recolección de pruebas es opcional, no te pongas en peligro.</li><li>Guarda registros solo si es seguro para ti.</li><li>Puedes pedir orientación jurídica antes de tomar decisiones.</li></ul></article></div><div className="go-bag"><div className="go-bag-icon"><BriefcaseBusiness size={21} /></div><div><span className="eyebrow">SI ES SEGURO PREPARARLA</span><h2>Una pequeña bolsa puede ayudar</h2><p>Considera documentos esenciales, medicamentos, llaves, algo de dinero y contactos importantes. No la prepares ni la guardes en casa si eso aumenta el riesgo.</p><div className="bag-tags"><span>Documentos</span><span>Medicamentos</span><span>Llaves</span><span>Contactos de confianza</span></div></div></div><div className="wellbeing-panel"><div className="wellbeing-copy"><span className="eyebrow">CUIDADO EMOCIONAL</span><h2>Vuelve a este momento</h2><p>Si te resulta cómodo, apoya los pies en el suelo. Nombra en silencio tres cosas que ves, dos que escuchas y una que sientes en tu cuerpo. Puedes detenerte en cualquier momento.</p><button className="button-outline" onClick={() => { setBreathing(!breathing); setBreathStep(0) }}>{breathing ? 'Pausar respiración' : 'Iniciar respiración guiada'} <ArrowUpRight size={16} /></button></div><div className={`breath-orb large-orb ${breathing ? 'breath-active' : ''}`}><span>{breathing ? ['Inhala', 'Sostén', 'Exhala', 'Suelta'][breathStep] : <Leaf size={27} />}</span></div></div></section>}

          {section === 'autonomia' && <section className="inner-page"><div className="page-intro autonomy-intro"><span className="eyebrow">IDEAS PARA CRECER A TU MANERA</span><h1>Una idea propia puede abrir caminos.</h1><p>Explora opciones de negocio y recursos para dar un primer paso posible, con lo que tienes hoy.</p></div><div className="filters-row"><div className="filter-group"><span>CATEGORÍA</span><div className="filter-chips">{categories.map((category) => <button type="button" className={ideaCategory === category ? 'filter-chip active' : 'filter-chip'} key={category} onClick={() => setIdeaCategory(category)}>{category}</button>)}</div></div><label className="investment-select"><span>INVERSIÓN INICIAL</span><span className="select-wrap"><select value={investmentFilter} onChange={(event) => setInvestmentFilter(event.target.value)}>{investmentFilters.map((filter) => <option key={filter}>{filter}</option>)}</select><ChevronDown size={15} /></span></label></div><div className="ideas-grid">{visibleIdeas.map((idea, index) => <article className={`idea-card idea-${index % 3}`} key={idea.title}><div className="idea-card-top"><span>{idea.category}</span><span>{idea.investment}</span></div><div className="idea-illustration" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span><Sparkles size={26} strokeWidth={1.4} /></div><h2>{idea.title}</h2><p>{idea.description}</p><details><summary>Ver primeros pasos <ChevronDown size={15} /></summary><p>{idea.firstStep}</p><div className="price-tip"><strong>Para fijar un precio:</strong> suma materiales, tiempo y costos de entrega; compara con opciones locales antes de decidir.</div></details></article>)}</div><section className="community-panel"><div className="community-copy"><span className="eyebrow">IDEAS DE LA COMUNIDAD</span><h2>¿Qué te gustaría crear?</h2><p>Deja una idea o pregunta para inspirar a otras. Esta demostración no publica ni envía propuestas; no incluyas información personal.</p><div className="community-prompt"><span>✳</span> Un oficio, un servicio o algo que te gustaría aprender.</div></div><form className="idea-form" onSubmit={(event) => { event.preventDefault(); setIdeaSent(true) }}><label htmlFor="community-idea">Tu propuesta <span>(sin datos personales)</span></label><textarea id="community-idea" placeholder="Me gustaría empezar..." maxLength={500} required /><label className="checkbox-row"><input type="checkbox" /> Me gustaría que se considere compartir esta idea de forma anónima <CircleHelp size={15} /></label><button className="button-dark" type="submit">{ideaSent ? <><Check size={17} /> Registrada en esta sesión</> : <>Enviar propuesta <ArrowUpRight size={16} /></>}</button>{ideaSent && <p className="form-confirmation" role="status">Solo es una confirmación visual: tu propuesta no se guardó ni se publicó.</p>}</form></section><section className="training-section"><div className="section-heading"><div><span className="eyebrow">SEGUIR APRENDIENDO</span><h2>Recursos para dar el siguiente paso</h2></div></div><div className="training-grid"><article><span className="training-icon"><BookOpen size={19} /></span><h3>Finanzas cotidianas</h3><p>Presupuesto, costos y separación de gastos personales y del negocio.</p><span className="resource-coming">Enlaces de formación por validar</span></article><article><span className="training-icon"><Compass size={19} /></span><h3>Marketing digital</h3><p>Cómo mostrar tu trabajo y conversar con clientes de forma segura.</p><span className="resource-coming">Enlaces de formación por validar</span></article><article><span className="training-icon"><BriefcaseBusiness size={19} /></span><h3>Capital semilla</h3><p>Consulta convocatorias locales y condiciones directamente con cada entidad.</p><span className="resource-coming">Directorio local por construir</span></article></div></section></section>}

          <footer className="site-footer"><span><Heart size={14} /> Un espacio para decidir a tu manera.</span><span>Prototipo informativo · Verifica los servicios de tu localidad</span></footer>
        </div>
      </main>
    </div>
  )
}

export default App
