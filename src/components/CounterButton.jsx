function CounterButton({ onTambah, onKurang, onReset }) {
  return (
    <>
      <button className="btn-add" onClick={onTambah}>
        + Tambah
      </button>

      <button className="btn-minus" onClick={onKurang}>
        − Kurang
      </button>

      <button className="btn-reset" onClick={onReset}>
        ↻ Reset
      </button>
    </>
  )
}

export default CounterButton