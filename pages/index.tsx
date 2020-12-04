import type { InferGetStaticPropsType } from 'next'

import Section, {
  SectionExperience,
  SectionManuscript,
} from '@components/section'
import SEO from '@components/seo'

import { description } from '@configs/seo'
import { interest } from '@configs/author'

export const getStaticProps = async () => {
  const experiences = (await import('@data/experiences')).default
  const publications = (await import('@data/publications')).default
  const patents = (await import('@data/patents')).default

  return {
    props: {
      experiences,
      publications,
      patents,
    },
  }
}

const IndexPage = ({
  experiences,
  publications,
  patents,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="index">
      <SEO title="Homepage" description={`${description}`} />
      <Section title="research interest">{interest}</Section>
      <Section title="publications">
        {publications.map((publication, idx) => {
          return (
            <SectionManuscript type="publication" key={idx} {...publication} />
          )
        })}
      </Section>
      <Section title="patents">
        {patents.map((patent, idx) => {
          return <SectionManuscript type="patent" key={idx} {...patent} />
        })}
        {/* {arr.map((a, idx) => (
          <div key={idx}>{a}</div>
        ))} */}
      </Section>
      <Section title="experiences">
        {experiences.map((experience, idx) => {
          return <SectionExperience key={idx} {...experience} />
        })}
      </Section>
      {/* <Section title="publication"></Section> */}
    </div>
  )
}

export default IndexPage
