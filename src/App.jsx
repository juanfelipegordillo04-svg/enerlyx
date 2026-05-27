import { motion } from "framer-motion"
import { useState, useRef } from "react"

import coreImage from "./assets/ENERLYX-CORE.png"
import plusImage from "./assets/ENERLYX-PLUS.png"

export default function App() {

  const [selectedView, setSelectedView] = useState("day")
  const [selectedMenu, setSelectedMenu] = useState("summary")
  const [selectedStratum, setSelectedStratum] = useState("3")
  const [selectedDevice, setSelectedDevice] = useState(null)

  const productsRef = useRef(null)
  const dashboardRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth"
    })
  }

  const pricing = {
    1: {
      day: { consumo: "5.8", costo: "$3.1K" },
      week: { consumo: "41.2", costo: "$22K" },
      month: { consumo: "178", costo: "$96K" },
    },

    2: {
      day: { consumo: "5.8", costo: "$3.9K" },
      week: { consumo: "41.2", costo: "$27K" },
      month: { consumo: "178", costo: "$121K" },
    },

    3: {
      day: { consumo: "5.8", costo: "$4.8K" },
      week: { consumo: "41.2", costo: "$33K" },
      month: { consumo: "178", costo: "$146K" },
    },

    4: {
      day: { consumo: "5.8", costo: "$5.7K" },
      week: { consumo: "41.2", costo: "$39K" },
      month: { consumo: "178", costo: "$172K" },
    },

    5: {
      day: { consumo: "5.8", costo: "$6.5K" },
      week: { consumo: "41.2", costo: "$45K" },
      month: { consumo: "178", costo: "$198K" },
    },

    6: {
      day: { consumo: "5.8", costo: "$7.2K" },
      week: { consumo: "41.2", costo: "$52K" },
      month: { consumo: "178", costo: "$224K" },
    },
  }

  const graphData = {
    day: {
      bars: [120, 160, 110, 180, 140, 210],
      labels: ["6", "5", "4", "3", "2", "0"],
    },

    week: {
      bars: [150, 190, 170, 220, 180, 240],
      labels: ["50", "40", "30", "20", "10", "0"],
    },

    month: {
      bars: [120, 160, 140, 190, 170, 210],
      labels: ["200", "160", "120", "80", "40", "0"],
    },
  }

  const currentPricing = pricing[selectedStratum][selectedView]
  const currentGraph = graphData[selectedView]

  const rooms = [

    {
      room: "Cocina",

      core: {
        consumo: "2.2",
        voltaje: "120",
        corriente: "4.8",
        potencia: "580",
        frecuencia: "60",
        fp: "0.98",
      },

      devices: [
        {
          name: "Nevera",
          type: "Enerlyx Plus",
          consumo: "1.2",
          voltaje: "119",
          corriente: "2.1",
        },

        {
          name: "Microondas",
          type: "Enerlyx Plus",
          consumo: "0.7",
          voltaje: "121",
          corriente: "4.8",
        },

        {
          name: "Cafetera",
          type: "Enerlyx Plus",
          consumo: "0.3",
          voltaje: "120",
          corriente: "1.3",
        },
      ]
    },

    {
      room: "Habitación",

      core: {
        consumo: "3.4",
        voltaje: "120",
        corriente: "6.1",
        potencia: "910",
        frecuencia: "60",
        fp: "0.98",
      },

      devices: [
        {
          name: "PC Gaming",
          type: "Enerlyx Plus",
          consumo: "2.3",
          voltaje: "118",
          corriente: "5.2",
        },

        {
          name: "TV",
          type: "Enerlyx Plus",
          consumo: "0.9",
          voltaje: "120",
          corriente: "1.8",
        },

        {
          name: "Cargadores",
          type: "Enerlyx Plus",
          consumo: "0.2",
          voltaje: "120",
          corriente: "0.4",
        },
      ]
    },

    {
      room: "Sala",

      core: {
        consumo: "2.1",
        voltaje: "120",
        corriente: "3.9",
        potencia: "620",
        frecuencia: "60",
        fp: "0.98",
      },

      devices: [
        {
          name: "Router WiFi",
          type: "Enerlyx Plus",
          consumo: "0.5",
          voltaje: "119",
          corriente: "0.7",
        },

        {
          name: "TV Principal",
          type: "Enerlyx Plus",
          consumo: "1.1",
          voltaje: "121",
          corriente: "2.2",
        },

        {
          name: "Consola",
          type: "Enerlyx Plus",
          consumo: "0.8",
          voltaje: "120",
          corriente: "1.6",
        },
      ]
    },

    {
      room: "Lavandería",

      core: {
        consumo: "7.3",
        voltaje: "120",
        corriente: "9.8",
        potencia: "1430",
        frecuencia: "60",
        fp: "0.98",
      },

      devices: [
        {
          name: "Lavadora",
          type: "Enerlyx Plus",
          consumo: "2.8",
          voltaje: "118",
          corriente: "6.4",
        },

        {
          name: "Secadora",
          type: "Enerlyx Plus",
          consumo: "3.1",
          voltaje: "120",
          corriente: "7.1",
        },

        {
          name: "Plancha",
          type: "Enerlyx Plus",
          consumo: "1.4",
          voltaje: "119",
          corriente: "3.2",
        },
      ]
    },

  ]

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* BACKGROUND */}
      <div className="fixed top-[-200px] left-[-200px] w-[500px] h-[500px] bg-lime-500/10 blur-[150px] rounded-full"></div>

      <div className="fixed bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500">

        <div className="mx-4 md:mx-10 mt-4">

          <div className="flex items-center justify-between px-8 md:px-12 py-5 rounded-[2rem] border border-zinc-800 bg-black/40 backdrop-blur-2xl shadow-2xl shadow-black/30">

            <h1 className="text-3xl font-black tracking-tight">
              <span className="text-white">enerly</span>
              <span className="text-lime-400">x</span>
            </h1>

            <div className="hidden md:flex gap-10 text-zinc-400">

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-white transition"
              >
                Inicio
              </button>

              <button
                onClick={() => scrollToSection(productsRef)}
                className="hover:text-white transition"
              >
                Productos
              </button>

              <button
                onClick={() => scrollToSection(dashboardRef)}
                className="hover:text-white transition"
              >
                Plataforma
              </button>

              <button
                onClick={() => scrollToSection(contactRef)}
                className="hover:text-white transition"
              >
                Contacto
              </button>

            </div>

            <button className="bg-lime-400 hover:bg-lime-300 text-black transition px-5 py-3 rounded-2xl font-semibold shadow-2xl shadow-lime-400/20">
              Comenzar
            </button>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="px-8 md:px-16 pt-40 pb-24 relative">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-300 mb-8 backdrop-blur-xl">
              ⚡ Monitoreo energético inteligente
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">

              La nueva forma de entender tu

              <span className="text-lime-400">
                {" "}energía.
              </span>

            </h1>

            <p className="text-zinc-400 text-xl mt-10 max-w-2xl leading-relaxed">

              Enerlyx transforma datos eléctricos complejos
              en información visual, intuitiva y útil.
              Monitorea consumo, detecta anomalías y entiende
              tu factura energética en tiempo real.

            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <button
                onClick={() => scrollToSection(productsRef)}
                className="bg-lime-400 hover:bg-lime-300 text-black transition px-8 py-5 rounded-2xl font-semibold text-lg shadow-2xl shadow-lime-400/20"
              >
                Ver productos
              </button>

              <button
                onClick={() => scrollToSection(dashboardRef)}
                className="border border-zinc-700 hover:border-zinc-500 transition px-8 py-5 rounded-2xl text-lg text-zinc-300 backdrop-blur-xl"
              >
                Ver plataforma
              </button>

            </div>

          </div>

          {/* HERO PRODUCTS */}
          <div className="flex justify-center items-end gap-8">

            {/* CORE */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-6 w-72 shadow-2xl"
            >

              <div className="h-[520px] rounded-[2rem] bg-gradient-to-b from-zinc-800 to-black border border-zinc-700 p-6 flex flex-col justify-between">

                <img
                  src={coreImage}
                  alt=""
                  className="w-full object-contain"
                />

                <div>

                  <h2 className="text-5xl font-black text-lime-400">
                    CORE
                  </h2>

                  <p className="text-zinc-400 mt-4">
                    Monitoreo energético principal.
                  </p>

                </div>

              </div>

            </motion.div>

            {/* PLUS */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-6 w-56 shadow-2xl mb-10"
            >

              <div className="h-[420px] rounded-[2rem] bg-white text-black p-6 flex flex-col justify-between">

                <img
                  src={plusImage}
                  alt=""
                  className="w-full object-contain"
                />

                <div>

                  <h2 className="text-4xl font-black text-lime-500">
                    PLUS
                  </h2>

                  <p className="text-zinc-600 mt-4 text-sm">
                    Smart plug para electrodomésticos.
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <section
        ref={productsRef}
        className="px-8 md:px-16 py-24"
      >

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">

            <span className="text-lime-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Productos
            </span>

            <h2 className="text-5xl md:text-6xl font-black mt-6">
              Ecosistema Enerlyx
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* CORE */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-10 shadow-2xl">

              <img
                src={coreImage}
                alt=""
                className="w-72 mx-auto"
              />

              <h3 className="text-5xl font-black text-lime-400 mt-10">
                Enerlyx Core
              </h3>

              <p className="text-zinc-400 text-lg mt-6 leading-relaxed">

                Sistema central de monitoreo energético
                diseñado para instalarse en breakers
                principales y circuitos independientes.

              </p>

              <div className="mt-10 flex flex-col gap-4 text-zinc-300">

                <p>⚡ Monitoreo por circuito</p>
                <p>📈 Datos en tiempo real</p>
                <p>🚨 Alertas de sobreconsumo</p>
                <p>🔌 Compatible con PZEM</p>
                <p>📊 Plataforma inteligente</p>

              </div>

            </div>

            {/* PLUS */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-10 shadow-2xl">

              <img
                src={plusImage}
                alt=""
                className="w-56 mx-auto"
              />

              <h3 className="text-5xl font-black text-lime-400 mt-10">
                Enerlyx Plus
              </h3>

              <p className="text-zinc-400 text-lg mt-6 leading-relaxed">

                Smart plug inteligente para monitoreo
                individual de electrodomésticos y equipos
                conectados en el hogar.

              </p>

              <div className="mt-10 flex flex-col gap-4 text-zinc-300">

                <p>🔌 Instalación inmediata</p>
                <p>📱 Monitoreo individual</p>
                <p>⚡ Medición de consumo</p>
                <p>📈 Historial energético</p>
                <p>🏠 Ecosistema integrado</p>

              </div>

            </div>

          </div>

        </div>

      </section>

{/* DASHBOARD */}
      <section
        ref={dashboardRef}
        className="px-8 md:px-16 py-24 bg-zinc-950 border-t border-zinc-900"
      >

        <div className="max-w-7xl mx-auto">

          <div className="mb-16">

            <span className="text-lime-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Plataforma
            </span>

            <h2 className="text-5xl md:text-6xl font-black mt-6">
              Dashboard inteligente
            </h2>

          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8">

            {/* SIDEBAR */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 h-fit sticky top-28">

              <h3 className="text-2xl font-black mb-8">
                Dashboard
              </h3>

              <div className="flex flex-col gap-3">

                {[
                  ["summary", "⚡ Resumen general"],
                  ["alertas", "🚨 Alertas"],
                  ["dispositivos", "🔌 Dispositivos"],
                  ["config", "⚙ Configuración"],
                ].map((item, index) => (

                  <button
                    key={index}
                    onClick={() => setSelectedMenu(item[0])}
                    className={`px-5 py-4 rounded-2xl text-left transition ${
                      selectedMenu === item[0]
                        ? "bg-lime-400 text-black"
                        : "bg-zinc-800 text-zinc-300"
                    }`}
                  >
                    {item[1]}
                  </button>

                ))}

              </div>

            </div>

            {/* CONTENT */}
            <div className="flex flex-col gap-8">

              {/* SUMMARY */}
              {selectedMenu === "summary" && (

                <>
                  <div className="grid md:grid-cols-3 gap-6">

                    <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-7">

                      <p className="text-zinc-500">
                        Consumo actual
                      </p>

                      <h3 className="text-6xl font-black mt-4 text-lime-400">
                        {currentPricing.consumo}
                      </h3>

                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-7">

                      <p className="text-zinc-500">
                        Factura estimada
                      </p>

                      <h3 className="text-6xl font-black mt-4 text-green-400">
                        {currentPricing.costo}
                      </h3>

                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-7">

                      <p className="text-zinc-500">
                        Dispositivos
                      </p>

                      <h3 className="text-6xl font-black mt-4 text-yellow-400">
                        12
                      </h3>

                    </div>

                  </div>

                  {/* GRAPH */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8">

                    <div className="flex justify-between items-center mb-10">

                      <h3 className="text-3xl font-black">
                        Consumo energético
                      </h3>

                      <div className="flex gap-2">

                        {[
                          ["day", "Día"],
                          ["week", "Semana"],
                          ["month", "Mes"],
                        ].map((btn, index) => (

                          <button
                            key={index}
                            onClick={() => setSelectedView(btn[0])}
                            className={`px-4 py-2 rounded-xl text-sm transition ${
                              selectedView === btn[0]
                                ? "bg-lime-400 text-black"
                                : "bg-zinc-800 text-zinc-400"
                            }`}
                          >
                            {btn[1]}
                          </button>

                        ))}

                      </div>

                    </div>

                    <div className="flex gap-6">

                      {/* VALUES */}
                      <div className="h-[260px] flex flex-col justify-between text-zinc-500 text-sm pt-2">

                        {currentGraph.labels.map((label, index) => (
                          <span key={index}>{label}</span>
                        ))}

                      </div>

                      {/* BARS */}
                      <div className="h-[260px] flex items-end gap-4 overflow-hidden flex-1 border-b border-l border-zinc-800 pl-4 pb-2">

                        {currentGraph.bars.map((height, index) => (

                          <motion.div
                            key={index}
                            animate={{
                              height: [
                                Math.min(height - 20, 190),
                                Math.min(height, 190),
                                Math.min(height - 20, 190),
                              ]
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 3 + index,
                            }}
                            className={`rounded-t-2xl w-full ${
                              index === currentGraph.bars.length - 1
                                ? "bg-lime-400 shadow-2xl shadow-lime-400/30"
                                : "bg-lime-400/70"
                            }`}
                          />
                        ))}

                      </div>

                    </div>

                  </div>
                </>
              )}

              {/* ALERTAS */}
              {selectedMenu === "alertas" && (

                <div className="flex flex-col gap-6">

                  {[
                    ["Pico de corriente detectado", "Sala principal · Hace 3 minutos"],
                    ["Consumo elevado en nevera", "Cocina · Hace 8 minutos"],
                    ["Variación de voltaje", "Habitación · Hace 15 minutos"],
                    ["Nuevo dispositivo conectado", "Lavandería · Hace 22 minutos"],
                    ["Consumo fuera del promedio", "TV Principal · Hace 40 minutos"],
                  ].map((alert, index) => (

                    <div
                      key={index}
                      className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8"
                    >

                      <h2 className="text-3xl font-black text-lime-400">
                        {alert[0]}
                      </h2>

                      <p className="text-zinc-400 mt-4">
                        {alert[1]}
                      </p>

                    </div>

                  ))}

                </div>

              )}

              {/* DISPOSITIVOS */}
              {selectedMenu === "dispositivos" && (

                <div className="flex flex-col gap-8">

                  {rooms.map((section, index) => (

                    <div
                      key={index}
                      className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8"
                    >

                      <h2 className="text-4xl font-black text-lime-400">
                        {section.room}
                      </h2>

                      <p className="text-zinc-500 mt-2 mb-8">
                        3 dispositivos conectados
                      </p>

                      {/* ROOM CORE */}
                      <div className="bg-zinc-800 rounded-[2rem] p-6 mb-8">

                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                          <div className="flex items-center gap-6">

                            <img
                              src={coreImage}
                              alt=""
                              className="w-28"
                            />

                            <div>

                              <h3 className="text-3xl font-black text-lime-400">
                                Breaker {section.room}
                              </h3>

                              <p className="text-zinc-400 mt-2">
                                Enerlyx Core · Online
                              </p>

                            </div>

                          </div>

                          <button
                            onClick={() =>
                              setSelectedDevice({
                                name: `Breaker ${section.room}`,
                                type: "Enerlyx Core",
                                ...section.core
                              })
                            }
                            className="bg-lime-400 hover:bg-lime-300 transition text-black px-6 py-4 rounded-2xl font-bold"
                          >
                            Ver métricas
                          </button>

                        </div>

                        {selectedDevice?.name === `Breaker ${section.room}` && (

                          <div className="grid md:grid-cols-3 gap-6 mt-8">

                            <div className="bg-zinc-900 rounded-2xl p-6">
                              <p className="text-zinc-500">Consumo</p>
                              <h3 className="text-4xl font-black text-lime-400 mt-4">
                                {selectedDevice.consumo}
                              </h3>
                            </div>

                            <div className="bg-zinc-900 rounded-2xl p-6">
                              <p className="text-zinc-500">Voltaje</p>
                              <h3 className="text-4xl font-black text-yellow-400 mt-4">
                                {selectedDevice.voltaje}
                              </h3>
                            </div>

                            <div className="bg-zinc-900 rounded-2xl p-6">
                              <p className="text-zinc-500">Corriente</p>
                              <h3 className="text-4xl font-black text-cyan-400 mt-4">
                                {selectedDevice.corriente}
                              </h3>
                            </div>

                          </div>

                        )}

                      </div>

                      {/* DEVICES */}
                      <div className="grid md:grid-cols-3 gap-6">

                        {section.devices.map((device, i) => (

                          <div key={i}>

                            <button
                              onClick={() => setSelectedDevice(device)}
                              className="bg-zinc-800 hover:bg-zinc-700 transition rounded-2xl p-6 text-left w-full"
                            >

                              <h3 className="text-2xl font-bold">
                                {device.name}
                              </h3>

                              <p className="text-zinc-400 mt-2">
                                {device.type} · Online
                              </p>

                              <p className="text-lime-400 mt-4 font-bold">
                                {device.consumo} kWh
                              </p>

                            </button>

                            {selectedDevice?.name === device.name && (

                              <div className="mt-4 bg-zinc-800 rounded-2xl p-6">

                                <div className="grid grid-cols-3 gap-4">

                                  <div>
                                    <p className="text-zinc-500 text-sm">Consumo</p>
                                    <h3 className="text-2xl font-black text-lime-400 mt-2">
                                      {device.consumo}
                                    </h3>
                                  </div>

                                  <div>
                                    <p className="text-zinc-500 text-sm">Voltaje</p>
                                    <h3 className="text-2xl font-black text-yellow-400 mt-2">
                                      {device.voltaje}
                                    </h3>
                                  </div>

                                  <div>
                                    <p className="text-zinc-500 text-sm">Corriente</p>
                                    <h3 className="text-2xl font-black text-cyan-400 mt-2">
                                      {device.corriente}
                                    </h3>
                                  </div>

                                </div>

                              </div>

                            )}

                          </div>

                        ))}

                      </div>

                    </div>

                  ))}

                </div>

              )}

              {/* CONFIG */}
              {selectedMenu === "config" && (

                <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-10">

                  <h2 className="text-5xl font-black">
                    Configuración
                  </h2>

                  <div className="mt-10">

                    <p className="text-zinc-400">
                      Estrato energético
                    </p>

                    <select
                      value={selectedStratum}
                      onChange={(e) => setSelectedStratum(e.target.value)}
                      className="mt-4 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 text-white w-full"
                    >

                      <option value="1">Estrato 1 · Bogotá</option>
                      <option value="2">Estrato 2 · Bogotá</option>
                      <option value="3">Estrato 3 · Bogotá</option>
                      <option value="4">Estrato 4 · Bogotá</option>
                      <option value="5">Estrato 5 · Bogotá</option>
                      <option value="6">Estrato 6 · Bogotá</option>

                    </select>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        ref={contactRef}
        className="px-8 md:px-16 py-24 border-t border-zinc-900"
      >

        <div className="max-w-4xl mx-auto">

          <span className="text-lime-400 uppercase tracking-[0.3em] text-sm font-semibold">
            Contacto
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-6 mb-16">
            Equipo Enerlyx
          </h2>

          <div className="flex flex-col gap-6">

            {/* PERSONA 1 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6">

              <h3 className="text-2xl font-bold">
                Juan Felipe Gordillo Guevara
              </h3>

              <div className="w-full h-[2px] bg-lime-400 mt-4 mb-4"></div>

              <a
                href="mailto:jfgordillog@libertadores.edu.co"
                className="text-zinc-400 hover:text-lime-400 transition text-lg"
              >
                jfgordillog@libertadores.edu.co
              </a>

            </div>

            {/* PERSONA 2 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6">

              <h3 className="text-2xl font-bold">
                Juan David Beltran Daza
              </h3>

              <div className="w-full h-[2px] bg-lime-400 mt-4 mb-4"></div>

              <a
                href="mailto:jdbeltrand@libertadores.edu.co"
                className="text-zinc-400 hover:text-lime-400 transition text-lg"
              >
                jdbeltrand@libertadores.edu.co
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}