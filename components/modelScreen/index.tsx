import { Box, Container, Grid } from "@mui/material"
import { ReactNode } from "react"

export const ModelScreen = ({ content, children }: { content: ReactNode, children: ReactNode }) => {
  return <>
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={12} sm={6} md={8} sx={{ paddingTop: "10px", verticalAlign: "center", alignSelf: "center" }}>
          {content}
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <Box>
            <Box className="smartphone">
              <Box className="content">
                {children}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </>
}