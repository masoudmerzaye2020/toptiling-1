import Navbar from './navbar'
import Footer from './footer'
import Nav from './nav'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}