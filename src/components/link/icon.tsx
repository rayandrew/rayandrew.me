import React from 'react'

import classname from '@utils/classname'
import withDefaults from '@utils/with-default'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const defaultProps = {}

type NativeAttrs = Omit<React.SVGAttributes<any>, keyof Props>
export type LinkIconProps = Props & typeof defaultProps & NativeAttrs

// https://github.com/geist-org/react/blob/master/components/link/icon.tsx
const LinkIcon: React.FC<LinkIconProps> = React.memo(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        shapeRendering="geometricPrecision"
        className={classname('link_icon', className)}
        {...props}
      >
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
        <path d="M15 3h6v6" />
        <path d="M10 14L21 3" />
      </svg>
    )
  },
)

export default withDefaults(LinkIcon, defaultProps)
