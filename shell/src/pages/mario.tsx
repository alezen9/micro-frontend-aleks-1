import dynamic from 'next/dynamic'

// @ts-ignore
const RemoteMario = dynamic(() => import('app1/mario'), { ssr: false })

const Mario = () => (<RemoteMario />)

export default Mario
