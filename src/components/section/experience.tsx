import React from 'react'

import Link from '@components/link'

import type { Experience } from '@definitions/experience'
// import type { Patent } from '@definitions/patent'

// import { pub_name } from '@configs/author'

import classname from '@utils/classname'
import { isDev } from '@utils/env'
import withDefaults from '@utils/with-default'

// import type { XOR } from '@utils/type'

type Props = Experience

const defaultProps = {
  // type: 'education',
}

type NativeAttrs = Omit<React.BaseHTMLAttributes<any>, keyof Props>
export type SectionExperienceProps = Props & typeof defaultProps & NativeAttrs

const SectionExperience: React.FC<SectionExperienceProps> = ({
  // type,
  institution,
  link,
  title,
  projects,
  from,
  to,
  className,
  ...props
}) => {
  /* eslint-disable react-hooks/exhaustive-deps */
  //   const statusDisplay = React.useMemo(
  //     () =>
  //       type === 'publication' ? `manuscript ${status}` : `patent ${status}`,
  //     [],
  //   )

  // const title = React.useMemo(() => {
  //   const titles = baseTitle.split('\n')
  //   return titles.map((t, idx) => {
  //     return (
  //       <div key={idx}>
  //         <p className="block md:inline">{t}</p>
  //         {idx < titles.length - 1 && <br className="hidden md:flex" />}
  //       </React.Fragment>
  //     )
  //   })
  // }, [])

  // const titleDisplay = React.useMemo(
  //   () => (link ? <Link href={link}>{title}</Link> : title),
  //   [],
  // )

  return (
    <div {...props} className={classname('section_exp', className)}>
      <div className="section_exp_meta">
        <h2 className="section_exp_meta_institution">
          <Link
            href={link}
            spanClassName="section_exp_meta_institution_name"
            iconClassName="section_exp_meta_institution_icon"
          >
            {institution}
          </Link>
        </h2>
        <div className="section_exp_meta_duration">
          <span>{from}</span>
          <span className="section_exp_meta_duration_entry">-</span>
          <span
            className={classname(
              'section_exp_meta_duration_entry',
              to === 'present'
                ? 'font-medium text-accent dark:text-accent-dark'
                : '',
            )}
          >
            {to}
          </span>
        </div>
      </div>

      <h3 className="section_exp_title">{title}</h3>

      {projects && (
        <div className="section_exp_projects">
          {projects.map((project, idx) => {
            return (
              <div
                key={`${institution}-${idx}`}
                className="section_exp_projects_entry"
              >
                <div>
                  <p className="section_exp_projects_entry_title">
                    {project.title}
                  </p>
                </div>
                <div className="section_exp_projects_entry_description">
                  {project.description}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* <p className="section_entry_additional_info">
        <span className="section_entry_additional_info_status">
          {statusDisplay}
        </span>
        {year && (
          <span className="section_entry_additional_info_year">({year})</span>
        )}
      </p>

      <div className="section_entry_additional">
        <p className="section_entry_additional_authors">
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
                    className="section_entry_additional_authors_own"
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
      </div> */}
    </div>
  )
}

if (isDev) {
  SectionExperience.displayName = 'SectionExperience'
}

export default withDefaults(SectionExperience, defaultProps)
