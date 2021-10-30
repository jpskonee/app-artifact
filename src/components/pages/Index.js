import React, { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import TeamCard from "../shared/TeamCard";
import FaqSection from "../shared/FaqSection";
import DoubleHeader from "../shared/DoubleHeader";
import Footer from "../shared/Footer";
import HeroSection from "../shared/HeroSection";
import Aos from "aos";
import "aos/dist/aos.css";
import BenefitCol from "../shared/BenefitCol";
import RoadMap from "../shared/RoadMap";
import TestDapp from "../shared/TestDapp";

export default function Index() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <div className="hero-section">
        <HeroSection />
      </div>
      <Container maxWidth="lg">
        <div className="welcome-div">
          <DoubleHeader
            slogan="Mint An Artifact"
            text="5th Nov, 2021."
            colorH="#2081E2"
          />
        </div>

        <div>
          {/* <img
            width="100%"
            alt="artifact-membership"
            src="/images/DeviceMemberships.gif"
          /> */}
          <TestDapp />
        </div>
      </Container>

      <Container maxWidth="lg">
        <div className="getItAll-div">
          <DoubleHeader
            slogan="Get it All"
            text="Physical | Digital NFT"
            colorH="#2081E2"
          />

          <BenefitCol />
        </div>
      </Container>
      {/* <Container id="shop-div" maxWidth="lg">
        <div id="shop-div-1">
          <div data-aos="fade-right">
            <HeaderText text="Trait Rarity " color="white" align="left" />
          </div>
          <div data-aos="fade-right" className="color-tag-div">
            <ColourTag
              text="Satoshi’s Favour"
              textColor="white"
              percent="64%"
              percentColor="#2AC4FF"
              color1="#003A35"
              color2="#083041"
            />
            <ColourTag
              text="Vitalik’s Whims"
              textColor="white"
              percent="20%"
              percentColor="#00FFBD"
              color1="#222241"
              color2="#063537"
            />
            <ColourTag
              text="Anatoly’s Blessings"
              textColor="white"
              percent="10%"
              percentColor="#9C8EFF"
              color1="#0E3B57"
              color2="#223159"
            />
            <ColourTag
              text="Trabucco’s Boons"
              textColor="white"
              percent="5%"
              percentColor="#E740BB"
              color1="#302A57"
              color2="#4A1D4B"
            />
            <ColourTag
              text="SBF’s Fortunes"
              textColor="white"
              percent="1%"
              percentColor="#FFCB45"
              color1="#331836"
              color2="#332E20"
            />
          </div>
          <div data-aos="fade-right" className="stand-descp">
            In his quest to bake the ultimate fortune cookie, Soltar tried a lot
            of different ingredients for a lot of different recipes, with
            ingredients that were usually offered to ancient crypto deities.
            Some ingredients were easier to come by, but he grew more desperate
            by the day, trying even more desperate combinations. Realizing that
            the scarcer the ingredient, the more powerful it would be, and
            wanting to make some sense of the arcane knowledge granted to him by
            the ledger, Soltar ordered the 4 chefs to categorize every
            ingredient by their rarity.
            <br />
            <br />
            Everyone is lucky, but some have been blessed with more fortune than
            others, only the luckiest will obtain the best fortune
            <br />
            <br />
            There are 150+ total ingredients in the ledger An’alos and these
            were sorted into categories by the chefs. These categories were
            ranked by the power of the deities they were offered to from
            ‘Satoshi’s Favours’, which could be found in any ancient market to
            be presented at Satoshi’s temple, all the way to mythic ‘SBF’s
            Fortunes. The chance of obtaining every kind of ingredient rarity
            are listed above. They go from common to mythical.
          </div>
          <div className="desp-btn">
            <ColourBtn
              text="View Traits"
              textColor="black"
              color1="#fe50bf"
              color2="#ffb75a"
              width="89%"
              onClick={() => {
                handleSplashOpen();
              }}
            />
          </div>
        </div>
        <div data-aos="fade-left" id="shop-div-2">
          <img
            className="cookie-stand"
            src="images/Machine_v02.png"
            alt="Soltars Fortune Machine"
          />
        </div>
      </Container> */}
      <Container className="team-faq" maxWidth="lg">
        <DoubleHeader
          slogan="Meet Artifact"
          text="Team | FAQ"
          colorH="#2081E2"
        />
        <Grid container>
          <Grid item md={6} xs={12} className="team-div">
            {/* <HeaderText text="Team" color="white" align="left" /> */}
            <div data-aos="zoom-in" className="each-team">
              <TeamCard
                color1="#A2E5F4"
                color2="#0000DE"
                img="/images/team/artifact-team-1.png"
                name="@artifactnft"
                title="Founder"
              />
            </div>
            <div data-aos="zoom-in" className="each-team">
              <TeamCard
                color1="#FFCD57"
                color2="#9D9B9C"
                img="/images/team/artifact-team-2.png"
                name="@kongkult21"
                title="Senior Advisor"
              />
            </div>
            <div data-aos="zoom-in" className="each-team img-right">
              <TeamCard
                color1="#F77F50"
                color2="#85AB80"
                img="/images/team/artifact-team-3.png"
                name="@carriejglenn"
                title="Marketing Expert"
              />
            </div>

            <div data-aos="zoom-in" className="each-team img-right">
              <TeamCard
                color1="#C1A6BF"
                color2="#599DBA"
                img="/images/team/artifact-team-4.jpg"
                name="@jpskonee"
                title="Developer"
              />
            </div>
          </Grid>
          <Grid data-aos="fade-left" item md={5} xs={12} className="faq-div">
            {/* <HeaderText
              className="faq-header"
              text="FAQ"
              color="white"
              align="left"
            /> */}
            <FaqSection />
          </Grid>
        </Grid>
      </Container>

      <Container className="roadmap-div" maxWidth="lg">
        <DoubleHeader slogan="The Journey" text="Road Map" colorH="#2081E2" />
        <RoadMap />
      </Container>

      <Container className="social-btn" maxWidth="lg">
        <DoubleHeader text="Join this Team!!!" colorH="#2081E2" />
        <div className="social-links">
          <a
            href="https://twitter.com/ArtifactNFT"
            rel="noreferrer"
            target="_blank"
          >
            <div className="social-links-icon">Twitter</div>
          </a>
          <a
            href="https://testnets.opensea.io/assets/0xc073081d0c277ee6c3880326d67f43a7a91e5b31/2"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social-links-icon">Opensea</div>
          </a>
          <a
            href="https://medium.com/@ArtifactNFT"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social-links-icon">Medium</div>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <div className="social-links-icon">Contact</div>
          </a>
        </div>
      </Container>

      <Container maxWidth="lg">
        <Footer />
      </Container>
    </div>
  );
}
