const FormUser = () => {
  return (
    <div className="min-w-96 p-3 mb-4 block">
        <div >
          <label className="text-sm font-semibold mb-1 block">
            Email
          </label>
          <input className="border-2 p-1 h-12 w-full" />
        </div>
        <div className="mb-2">
          <label className="text-sm font-semibold mb-1 block">
            Contraseña
          </label>
          <input className="border-2 p-1 h-12 w-full" />
        </div>

    </div>
  )
}

export default FormUser