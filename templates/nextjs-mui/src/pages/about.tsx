import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styles from "../styles/Home.module.css";
import { Link } from "src/components";

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box
        // {{{{raw-helper}}}}
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        // {{{{/raw-helper}}}}
      >
        <Typography
          className={styles.title}
          variant="h1"
          component="h1"
          gutterBottom
        >
          <Link href="https://github.com/builderhub-platform/create-builderhub-app">
            {{ name }}
          </Link>{" "}
        </Typography>
        <Typography className={styles.subtitle} variant="h2" component="h2">
          Templated by MUI v5 + Next.js with TypeScript example!
        </Typography>
        <Box maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
