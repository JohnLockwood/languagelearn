import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Header from "./ui/Header";
import {Box} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";

function App() {
  return (
      <React.Fragment>
          <Header />
          <Container maxWidth="xl">
              <Box>
                  <p>The site so nice we wrote it twice!</p>
                  <Button variant="contained">
                      Click me!
                  </Button>
                  <Toolbar />
                  {[...new Array(120)]
                      .map(
                          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                      )
                      .join('\n')}
              </Box>
          </Container>

      </React.Fragment>

  );
}

export default App;
