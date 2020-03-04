/** @jsx jsx */
import { jsx, Styled, Container, Flex, Box } from 'theme-ui'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Header = (props) => {
  const { site: { siteMetadata }} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header {...props}>
      <Container
        p={3}>
        <Flex
          sx={{
            flexWrap: 'wrap'
          }}>
          <Box
            sx={{
              width: ['full', '1/2']
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
              width='32'
              height='32'
              fill='currentcolor'>
              <circle
                r={14}
                cx={16}
                cy={16}
                fill='none'
                stroke='currentcolor'
                strokeWidth={4}
              />
              <circle
                r={6}
                cx={16}
                cy={16}
                fill='lightblue'
                stroke='lightblue'
                strokeWidth={0}
              />   
            </svg>
            <Styled.h2
              sx={{
                display: 'inline-block',
                fontWeight: 'extrabold',
                my: 0,
                mx: 2,
                verticalAlign: 'bottom'
              }}>
              { siteMetadata.title }
            </Styled.h2>
          </Box>
          <Box
            sx={{
              width: ['full', '1/2']
            }}>
            <Flex 
              as='ul'
              sx={{
                width: 'full',
                listStyle: 'none',
                justifyContent: ['flex-start', 'flex-end'],
                p: 0,
                m: 0,
              }}>
              <li sx={{ p: 2 }}>
                <Link
                  sx={{
                    color: 'grayDark',
                    textTransform: 'uppercase',
                    fontSize: 0,
                    fontWeight: 'extrabold',
                    textDecoration: 'none'
                  }}
                  to="/#"
                  replace>About</Link>
              </li>
              <li sx={{ p: 2 }}>
                <Link
                  sx={{
                    color: 'grayDark',
                    textTransform: 'uppercase',
                    fontSize: 0,
                    fontWeight: 'extrabold',
                    textDecoration: 'none'
                  }}
                  to="/#"
                  replace>Bio</Link>
              </li>
              <li sx={{ p: 2 }}>
                <Link
                  sx={{
                    color: 'grayDark',
                    textTransform: 'uppercase',
                    fontSize: 0,
                    fontWeight: 'extrabold',
                    textDecoration: 'none'
                  }}
                  to="/#"
                  replace>Contact</Link>
              </li>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </header>
  )
}

export default Header