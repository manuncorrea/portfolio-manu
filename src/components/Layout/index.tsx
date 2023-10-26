import Header from "../Header"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div className="max-w-screen-xl flex flex-col mx-auto p-4">{children}</div>
    </div>
  )
}