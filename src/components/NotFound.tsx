import { Link } from '@tanstack/react-router'

export function NotFound({ children }: { children?: any }) {
  return (
    <div className="page-wrap flex flex-col items-center justify-center space-y-2 p-2">
      <div className="text-gray-700">
        {children || <p>The page you are looking for does not exist.</p>}
      </div>
      <p className="flex items-center gap-2">
        <button
          onClick={() => window.history.back()}
          className="shrink-0 font-semibold tracking-tight button-primary text-sm px-3 py-1.5 md:px-4 md:py-2"
        >
          Go back
        </button>
        <Link
          to="/"
          className="shrink-0 font-semibold tracking-tight button-secondary text-sm px-3 py-1.5 md:px-4 md:py-2"
        >
          Start Over
        </Link>
      </p>
    </div>
  )
}