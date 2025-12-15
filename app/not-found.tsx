import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4 text-center px-4">
      <h2 className="text-4xl font-bold text-secondary">404</h2>
      <p className="text-xl text-muted-foreground">Halaman tidak ditemukan.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  )
}
