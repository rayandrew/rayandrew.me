import React from 'react'

// import classname from '@utils/classname'
// import { isDev } from '@utils/env'
import withDefaults from '@utils/with-default'

interface Props {
  title: string
  date: string | Date
}

const defaultProps = {
  //   title: '',
}

type NativeAttrs = Omit<React.BaseHTMLAttributes<any>, keyof Props>
export type PublicationProps = Props & typeof defaultProps & NativeAttrs

const Publication: React.FC<PublicationProps> = () => {
  return <div></div>
}

export default withDefaults(Publication, defaultProps)
