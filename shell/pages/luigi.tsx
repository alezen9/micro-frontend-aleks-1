import dynamic from 'next/dynamic'

const RemoteLuigi = dynamic(() => import("app2/luigi"), { ssr: false })

const Luigi = () => (<RemoteLuigi />)

export default Luigi
