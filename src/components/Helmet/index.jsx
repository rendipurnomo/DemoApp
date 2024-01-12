
const Helmet = ({children, title}) => {
  document.title = 'UMKM DIGITAL | ' + title
  return (
    <section className="container">{children}</section>
  )
}

export default Helmet