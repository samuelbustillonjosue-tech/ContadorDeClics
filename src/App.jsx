import { useState } from 'react'

function App() {
  const [contador, setContador] = useState(0)
  const [mensaje, setMensaje] = useState('')

  const incrementar = () => {
    setContador(contador + 1)
    setMensaje('')
  }

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1)
      setMensaje('')
    } else {
      setMensaje('El contador no puede ser menor que cero.')
    }
  }

  const reiniciar = () => {
    setContador(0)
    setMensaje('El contador se ha reiniciado.')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-600 via-indigo-600 to-blue-600 p-6">

      <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <h1 className="mb-3 text-center text-3xl font-bold text-purple-800">
          Contador de clics
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Lleva el control de tus conteos
        </p>

        <div className="mb-6">
          <label className="mb-3 block text-sm font-semibold text-gray-700">
            Valor del contador
          </label>

          <div className="rounded-2xl border-2 border-purple-100 bg-purple-50 p-8 text-center">

            <p className="mb-2 text-sm font-medium text-purple-600">
              Conteo actual
            </p>

            <p className="text-7xl font-bold text-purple-800">
              {contador}
            </p>

          </div>
        </div>

        <div className="space-y-4">

          <button
            onClick={incrementar}
            className="w-full rounded-xl bg-green-500 px-6 py-3 font-bold text-white transition hover:bg-green-600"
          >
            + Aumentar
          </button>

          <button
            onClick={decrementar}
            disabled={contador === 0}
            className="w-full rounded-xl bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            − Disminuir
          </button>

          <button
            onClick={reiniciar}
            disabled={contador === 0}
            className="w-full rounded-xl border-2 border-purple-600 px-6 py-3 font-bold text-purple-700 transition hover:bg-purple-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            ↻ Reiniciar contador
          </button>

        </div>

        {mensaje && (
          <p
            role="status"
            className="mt-5 rounded-xl bg-purple-50 p-3 text-center text-sm font-medium text-purple-700"
          >
            {mensaje}
          </p>
        )}

      </section>
    </main>
  )
}

export default App