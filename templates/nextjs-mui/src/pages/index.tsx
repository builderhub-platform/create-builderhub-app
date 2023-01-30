import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Typography, Box, Link } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Head>
        <title>{{ name }}</title>
        <meta name="description" content="{{description}}" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        className={styles.main}
        // {{{{raw}}}}
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        // {{{{/raw}}}}
      >
        <Typography
          className={styles.title}
          variant="h1"
          component="h1"
          gutterBottom
        >
          Welcome to{" "}
          <Link href="https://github.com/builderhub-platform/create-builderhub-app">
            Create Builderhub App
          </Link>{" "}
        </Typography>
        <Typography className={styles.subtitle} variant="h2" component="h2">
          Templated by MUI v5 + Next.js with TypeScript example!
        </Typography>

        <Typography variant="h4" component="h4" className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>src/pages/index.tsx</code>
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Box className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <Typography variant="h2" component="h2">
              Documentation &rarr;
            </Typography>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <Typography variant="h2" component="h2">
              Learn &rarr;
            </Typography>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <Typography variant="h2" component="h2">
              Examples &rarr;
            </Typography>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <Typography variant="h2" component="h2">
              Deploy &rarr;
            </Typography>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </Box>
      </Box>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Container>
  );
};

export default Home;
