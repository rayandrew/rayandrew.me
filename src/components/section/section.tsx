import React from 'react'

import classname from '@utils/classname'
import { isDev } from '@utils/env'
import withDefaults from '@utils/with-default'

interface Props {
  title?: string
}

const defaultProps = {
  //   title: '',
}

type NativeAttrs = Omit<React.BaseHTMLAttributes<any>, keyof Props>
export type SectionProps = Props & typeof defaultProps & NativeAttrs

const Section: React.FC<SectionProps> = ({
  title,
  className,
  children,
  ...props
}) => {
  return (
    <section {...props} className={classname('section', className)}>
      {title && <h1 className="section_title">{title}</h1>}
      <div className="section_inner">{children}</div>
    </section>
  )
}

if (isDev) {
  Section.displayName = 'Section'
}

export default withDefaults(Section, defaultProps)
