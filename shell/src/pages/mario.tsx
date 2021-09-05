import dynamic from 'next/dynamic'

const RemoteMario = dynamic(() => import('app1/mario'), { ssr: false })

const Mario = () => (<RemoteMario />)

export default Mario
