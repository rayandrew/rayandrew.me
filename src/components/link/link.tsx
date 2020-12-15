import React from 'react'

import dynamic from 'next/dynamic'

import { isSimpleExternalUrl } from '@utils/url'
import { isDev } from '@utils/env'
import withDefaults from '@utils/with-default'
import LinkIcon from './icon'

interface Props {
  href?: string
  iconClassName?: string
  spanClassName?: string
}

const defaultProps = {
  href: '',
}

type NativeAttrs = Omit<React.AnchorHTMLAttributes<any>, keyof Props>
export type LinkProps = Props & typeof defaultProps & NativeAttrs

const BaseLink = React.memo(
  React.forwardRef<
    HTMLAnchorElement,
    LinkProps & {
      isExternal?: boolean
    }
  >(({ isExternal, spanClassName, iconClassName, children, ...props }, ref) => {
    /* eslint-disable jsx-a11y/anchor-has-content */
    return (
      <a {...props} ref={ref}>
        <span className={spanClassName}>{children}</span>
        {isExternal && <LinkIcon className={iconClassName} />}
      </a>
    )
    /* eslint-enable jsx-a11y/anchor-has-content */
  }),
)

if (isDev) {
  BaseLink.displayName = 'BaseLink'
}

const Link = React.memo(
  React.forwardRef<HTMLAnchorElement, LinkProps>(({ href, ...props }, ref) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const isExternal = React.useMemo(() => isSimpleExternalUrl(href), [])
    if (isExternal)
      return (
        <BaseLink
          {...props}
          href={href}
          ref={ref}
          isExternal
          target="_blank"
          rel="noopener noreferrer"
        />
      )

    const NextLink = dynamic(() => import('next/link'))

    return (
      <NextLink href={href} passHref>
        <BaseLink {...props} href={href} ref={ref} />
      </NextLink>
    )
  }),
)

if (isDev) {
  Link.displayName = 'Link'
}

export default withDefaults(Link, defaultProps)
