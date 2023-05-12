const Flags = () => {
  return null
}

export const getServerSideProps = async ({ res, params }) => {
  const { id } = params
  let flag = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/v1/public/flag/${id}`
  )
  flag = await flag.text()
  res.setHeader('Content-Type', 'image/svg+xml')
  res.write(flag)
  res.end()

  return {
    props: {},
  }
}

export default Flags
