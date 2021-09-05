import dynamic from 'next/dynamic'

// @ts-ignore
const RemoteLuigi = dynamic(() => import("app2/luigi"), { ssr: false })

const Luigi = () => (<RemoteLuigi />)

export default Luigi
