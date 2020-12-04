import React from 'react'

import Link from '@components/link'

import type { Publication } from '@definitions/publication'
import type { Patent } from '@definitions/patent'

import { pub_name } from '@configs/author'

import classname from '@utils/classname'
import { isDev } from '@utils/env'
import withDefaults from '@utils/with-default'

import type { XOR } from '@utils/type'

type EntryType = 'patent' | 'publication'

type Props = XOR<Patent, Publication> & {
  type?: EntryType
}

const defaultProps = {
  type: 'publication',
}

type NativeAttrs = Omit<React.BaseHTMLAttributes<any>, keyof Props>
export type SectionManuscriptProps = Props & typeof defaultProps & NativeAttrs

const SectionManuscript: React.FC<SectionManuscriptProps> = ({
  title,
  type,
  year,
  authors,
  status,
  link,
  className,
  ...props
}) => {
  /* eslint-disable react-hooks/exhaustive-deps */
  const statusDisplay = React.useMemo(
    () =>
      type === 'publication' ? `manuscript ${status}` : `patent ${status}`,
    [],
  )

  const titleDisplay = React.useMemo(
    () => (link ? <Link href={link}>{title}</Link> : title),
    [],
  )

  return (
    <div {...props} className={classname('section_manu', className)}>
      <h2 className="section_manu_title">{titleDisplay}</h2>

      <p className="section_manu_additional_info">
        <span className="section_manu_additional_info_status">
          {statusDisplay}
        </span>
        {year && (
          <span className="section_manu_additional_info_year">({year})</span>
        )}
      </p>

      <div className="section_manu_additional">
        <p className="section_manu_additional_authors">
          {authors.map((_author, idx) => {
            const own = _author === 'me'
            const author = own ? pub_name : _author

            let sep = ''
            if (idx === authors.length - 2) {
              sep = ' and '
            } else if (idx !== authors.length - 1) {
              sep = ', '
            }

            if (own)
              return (
                <>
                  <span
                    key={`${author}-${idx}`}
                    className="section_manu_additional_authors_own"
                  >
                    {author}
                  </span>
                  {sep}
                </>
              )
            return (
              <>
                <span key={`${author}-${idx}`}>{author}</span>
                {sep}
              </>
            )
          })}
        </p>
      </div>
    </div>
  )
}

if (isDev) {
  SectionManuscript.displayName = 'SectionManuscript'
}

export default withDefaults(SectionManuscript, defaultProps)
