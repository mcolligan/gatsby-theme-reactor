
/** @jsx jsx */
import { jsx, Flex, Box, Styled } from 'theme-ui'

const Project = ({project}) => {
  const { name, description, technologies, start, end, url } = project
  return (
    <Box
      sx={{
        mr: 5,
        mb: 5,
        position: 'relative',
        width: ['full', '5/12']
      }}>
      <div
        sx={{
          position: 'absolute',
          boxShadow: 'xl',
          top: -30,
          left: -30,
          borderRadius: 'full',
          bg: theme => theme.colors.orange[4],
          width: 100,
          height: 100
        }}
      />
      <a
        sx={{
          display: 'block',
          textDecoration: 'none',
          '&:active': {
            color: 'inherit'
          }
        }}
        target="_blank"
        rel="noopener noreferrer"
        href={url}>
        <Box
          sx={{
            bg: 'white',
            height: 'full',
            boxShadow: 'lg',
            borderColor: 'light',
            borderStyle: 'solid',
            borderWidth: 7,
            borderRadius: 10,
            p: 4,
            top: ['5px', '10px'],
            right: ['-5px', '-10px'],
            position: 'relative',
            '&:hover': {
              boxShadow: '2xl',
            }
          }}>
          <Flex
            sx={{
              flexDirection: 'column',
              position: 'relative'
            }}>
            <Box>
              <Styled.h2
                sx={{
                  my: 0,
                  color: theme => theme.colors.blue[8],
                }}>
                { name }
              </Styled.h2>
              <Styled.h6
                sx={{
                  color: theme => theme.colors.gray[4],
                  fontWeight: 'medium'
                }}>
                { start } - { end }
              </Styled.h6>
            </Box>
            <Box>
              <p sx={{ 
                color: theme => theme.colors.gray[6]
              }}>{ description }</p>
            </Box>
            <Box>
              <Flex
                sx={{
                  flexWrap: 'wrap'
                }}>
                { technologies.map(tech => (
                  <div
                    sx={{
                      fontSize: '0.75rem',
                      border: 0,
                      borderLeft: 3,
                      borderStyle: 'solid',
                      borderColor: theme => theme.colors.blue[4],
                      px: 3,
                      py: 1,
                      mr: 3,
                      bg: theme => theme.colors.gray[2] 
                    }}>{ tech }</div>
                ))}
              </Flex>
            </Box>
          </Flex>
        </Box>
      </a>
    </Box>
  )
}

export default Project