import React from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const Homepage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Container
        sx={{
          maxWidth: "lg",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          py: 6,
          px: 2,
        }}
      >
        {/* Headline => For Desktop */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {/* => Bars */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                width: { xs: "78%", mdl: "85%" },
              }}
            >
              <Fade right>
                <Box
                  sx={{
                    width: "50px",
                    height: "5px",
                    // backgroundColor: "black",
                    backgroundColor: "#1a1a12",
                    mr: 15,
                  }}
                ></Box>
              </Fade>
              <Fade right>
                <Box
                  sx={{
                    width: "200px",
                    height: "12px",
                    backgroundColor: "#1a1a12",
                  }}
                ></Box>
              </Fade>
            </Box>
          </Box>
          {/* => Heading Text */}
          <Fade left>
            <Typography
              sx={{
                fontFamily: "AutoTeachnoItalic",
                color: "#FFCF00",
                letterSpacing: "3px",
                lineHeight: "100px",
                fontSize: { xs: "61px", mdl: "73px", lg: "78px" },
              }}
            >
              Reflekt alpha
            </Typography>
          </Fade>
        </Box>

        {/* Headline => For Mobile + Tablet View */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            position: "relative",
            width: { xs: "100%", sm: "95%", md: "50%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Fade right>
              <Box
                sx={{
                  width: "200px",
                  height: "9px",
                  backgroundColor: "#1a1a12",
                }}
              ></Box>
            </Fade>
          </Box>
          <Fade left>
            <Typography
              sx={{
                fontFamily: "AutoTeachnoItalic",
                color: "#FFCF00",
                letterSpacing: "3px",
                fontSize: { xs: "35px", sm: "50px" },
              }}
            >
              Reflekt
            </Typography>
          </Fade>
          <Typography
            sx={{
              fontFamily: "AutoTeachnoItalic",
              color: "#FFCF00",
              letterSpacing: "3px",
              fontSize: { xs: "40px", sm: "45px" },
            }}
          >
            Alpha
          </Typography>
        </Box>
        {/* Middle Section => Left Text + Right Image */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column-reverse", md: "row" },
            width: "100%",
            mt: 3,
            px: 0.5,
          }}
        >
          {/*Middle Section => Left Text */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
              width: { xs: "100%", sm: "95%", md: "50%" },
              mt: { xs: 1.5, md: 0 },
            }}
          >
            <Fade bottom>
              <Typography
                sx={{
                  fontFamily: "Robotics",
                  color: "white",
                  fontSize: { xs: "18px", sm: "20px" },
                }}
              >
                The Reflekt Alpha Chip is an NFT that grants you mirror access
                to live chats from alpha groups in Cardano for a fraction of the
                cost.
              </Typography>
            </Fade>
            <Fade bottom>
              <Typography
                sx={{
                  fontFamily: "Robotics",
                  color: "white",
                  fontSize: { xs: "18px", sm: "20px" },
                  marginTop: 2,
                }}
              >
                Simply hold the NFT and authenticate on our Discord server for
                access.
              </Typography>
            </Fade>
            <Fade bottom>
              <Typography
                sx={{
                  fontFamily: "Robotics",
                  color: "white",
                  fontSize: { xs: "18px", sm: "20px" },
                  marginTop: 2,
                }}
              >
                Multiple alpha channels with no delay.
              </Typography>
            </Fade>
            <Fade bottom>
              <Typography
                sx={{
                  fontFamily: "Robotics",
                  color: "white",
                  fontSize: { xs: "18px", sm: "20px" },
                  marginTop: 2,
                }}
              >
                Additional benifits for holders of multiple Reflekt Chips.
              </Typography>
            </Fade>
          </Box>
          {/*Middle Section => Right Image */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "250px", sm: "300px", md: "320px" },
              height: { xs: "300px", sm: "350px", md: "370px" },
              position: "relative",
              transition: "all  0.3s ease",
              mr: { xs: 0, md: 2 },
            }}
          >
            <Image
              src="/assets/pictures/Chip.png"
              layout="fill"
              objectFit="contain"
              priority
            />
          </Box>
        </Box>
        {/* Social Icons */}
        <Fade bottom>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#1a1a12",
              // background: "black",
              py: 1.4,
              px: 2,
              mt: { xs: 7, md: 2 },
            }}
          >
            <Link href="https://www.discord.com">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "30px",
                  position: "relative",
                  transition: "all  0.3s ease",
                  cursor: "pointer",
                  mr: 1,
                }}
              >
                <Image
                  src="/assets/pictures/discord_white.svg"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </Box>
            </Link>
            <Link href="https://www.twitter.com">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "30px",
                  position: "relative",
                  transition: "all  0.3s ease",
                  cursor: "pointer",
                  ml: 1,
                }}
              >
                <Image
                  src="/assets/pictures/twitter_white.svg"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </Box>
            </Link>
          </Box>
        </Fade>
        {/* Footer  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
            alignItems: "center",
            flexDirection: { xs: "column-reverse", md: "row" },
            width: "100%",
            mt: { xs: 5.5, md: 3.5 },
          }}
        >
          {/* Footer => Horizontal Bar */}

          <Box
            sx={{
              width: "30%",
              height: "10px",
              backgroundColor: "#1a1a12",
              // backgroundColor: "black",
              mt: { xs: 1, md: 0 },
            }}
          ></Box>
          {/* Footer => Policy Id Text */}
          <Box
            sx={{
              ml: { xs: 0, md: 5 },
              px: 1,
              py: 0.2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Fade left>
              <Typography
                sx={{
                  backgroundColor: "black",
                  fontFamily: "Robotics",
                  fontSize: { xs: "16px", sm: "18px" },
                  color: "white",
                  textAlign: "center",
                }}
              >
                Policy ID: xxxxxxxxxxxxxxxxxxxx
              </Typography>
            </Fade>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Homepage;
