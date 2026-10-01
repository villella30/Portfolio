/**
 * Fondo global: 3 blobs radiales con gradiente que derivan lento + grano.
 * Compuesto por la GPU (transform/opacity), sin canvas ni dependencias.
 */
export default function GradientBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 -top-52 h-[42rem] w-[42rem] animate-drift-a rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.58),transparent_65%)] blur-3xl" />
      <div className="absolute -right-40 top-1/3 h-[38rem] w-[38rem] animate-drift-b rounded-full bg-[radial-gradient(circle,rgba(124,132,113,0.42),transparent_65%)] blur-3xl" />
      <div className="absolute -bottom-56 left-1/4 h-[46rem] w-[46rem] animate-drift-c rounded-full bg-[radial-gradient(circle,rgba(192,133,82,0.44),transparent_65%)] blur-3xl" />
      <div className="grain absolute inset-0 opacity-[0.045]" />
    </div>
  );
}
