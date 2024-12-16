import "./App.css"
import { useState } from "react"

import Shooter from "./assets/shooter.png"
import Luigi_Messiah from "./assets/luigi_messiah.jpg"

import BurgerKing from "./assets/burger_king.jpg"
import Map from "./assets/map_blob.png"
import BikeRide from "./assets/bikeride.png"

function App() {
  const [copyIconVisible, setCopyIconVisible] = useState(true)
  const [thumbsUpVisible, setThumbsUpVisible] = useState(false)
  const [clicked, setClicked] = useState(false)

  const copyAddress = () => {
    navigator.clipboard.writeText(
      "EWmVeZoK8FkqgftHPZjHnA9A1DESwBHDNVfQ6P5cV4EY"
    )
    setThumbsUpVisible(true)
    setCopyIconVisible(false)
    setTimeout(() => {
      setThumbsUpVisible(false)
      setCopyIconVisible(true)
    }, 1200)
  }

  const clickedButtonEffect = () => {
    setClicked(true)
  }

  const releasedButtonEffect = () => {
    setClicked(false)
  }
  return (
    <>
      <div className="wrapper">
        <nav className="navbar">
          <div className="nav_white_paper mock">
            <a
              className="white_paper_link"
              href="https://dawn-shadow-88.linkyhost.site"
              target="_blank"
            >
              White Paper
            </a>
          </div>
          <div
            className={`${
              clicked ? "social_media clicked" : "social_media released"
            }`}
            onMouseEnter={clickedButtonEffect}
            onMouseLeave={releasedButtonEffect}
          >
            <a
              href="https://x.com/"
              target="_blank"
              title="twitter/X"
              style={{ color: "white" }}
            >
              <i className="fa-brands fa-x-twitter" />
            </a>
            <div className="">
              <a
                href="https://t.me/+hEoPKu3uNP81Zjcx"
                target="_blank"
                title="telegram"
                style={{ color: "white" }}
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="nav_white_paper">
            <a
              className="white_paper_link"
              href="https://dawn-shadow-88.linkyhost.site"
              target="_blank"
            >
              White Paper
            </a>
          </div>
        </nav>
        <div className="coin_intro">
          <div className="coin_name">CEOAssassincoin</div>
          <div className="acronym_wrapper">
            <p className="acronym">$CEOA</p>
          </div>
        </div>
        <div className="solana_address_wrapper">
          <div className="solana_address" onClick={copyAddress}>
            EWmVeZoK8FkqgftHPZjHnA9A1DESwBHDNVfQ6P5cV4EYp
          </div>
          <div onClick={copyAddress}>
            <i
              className={`${
                copyIconVisible ? "fa-solid fa-copy" : "fa-solid fa-copy hidden"
              }`}
            ></i>
            <i
              className={`${
                thumbsUpVisible
                  ? "fa-solid fa-check"
                  : "fa-solid fa-check hidden"
              }`}
            ></i>
          </div>
        </div>
        <div className="solana_prompt">* Solana Wallet Address</div>
        <div className="opening_statement">
          3% OF PROFITS DONATED TO CHARITY TO BUY MEDICAL DEBT
        </div>
        <div className="disclaimer" style={{ fontWeight: "bold" }}>
          * WE DO NOT PROMOTE OR CONDONE THE USE OF VIOLENCE
        </div>
        <div className="opening_img">
          <img src={Shooter} alt="hoodie" />
          <div className="mission_statement_outer">
            <div className="mission_statement">
              CEOAssassinCoin (CEOA) is a meme coin built on the Solana
              blockchain. Our mission is to create a community, solve a huge
              problem and make a meaningful social impact. Unique Feature: 3%
              transaction fee funds a Charity Wallet to buy and forgive hospital
              debt for pennies on the dollar. By purchasing CEOAssassincoin you
              become a CEOAssassin team, helping those in medical distress, as
              medical debt in many places is a leading cause of financial
              hardship.
            </div>
          </div>
        </div>
        <div className="luigi_img_container">
          <img src={Luigi_Messiah} alt="hoodie" />
        </div>
        <div className="launch_plan_img">
          <div className="launch_plan_details">
            <p className="launch_plan_title">Launch Plan</p>
            <p className="">
              1 - Token Minting: CEOA minted and allocated per tokenomics.
            </p>
            <p className="">
              2 - IDO on Raydium: Public sale of 200,000,000 CEOA to raise funds
              and build liquidity.
            </p>
            <p className="">
              3 - Liquidity Pool Setup: Pair CEOA with USDC on Raydium for
              trading.
            </p>
            <p className="">
              4 - Charity Impact: Use transaction fees to forgive medical debt
              and share progress with the community.
            </p>
            <p className="white_paper_p">
              <a
                className="white_paper_link"
                href="https://dawn-shadow-88.linkyhost.site"
                target="_blank"
              >
                Read the White Paper
              </a>
            </p>
          </div>
        </div>
        <div className="burger_img_container">
          <img src={BurgerKing} alt="hamburglar" />
        </div>
        <ul className="roadmap">
          <p className="roadmap_title">Roadmap</p>
          <li>
            Phase 1: IDO launch, liquidity pool setup, and community building.
          </li>
          <li>
            Phase 2: Deliver first charity milestones (forgiven medical debt).
          </li>
          <li>
            Phase 3: Expand listings to exchanges and enhance trading volume.
          </li>
          <li>
            Phase 4: Introduce staking, governance, and additional use cases.
          </li>
        </ul>
        <div className="tokenomics">
          <div className="tokenomics_img">
            <img src={Map} alt="" />
          </div>
          <div className="tokenomics_details">
            <p className="token_title">TOKENOMICS</p>
            <p>1 BILLION MINTED</p>
            <p>Liquidity Pool: 30%</p>
            <p>Public Sale (IDO): 20%</p>
            <p>Marketing Wallet: 25%</p>
            <p>General Distribution: 20%</p>
            <p>Charity Wallet: 3%</p>
            <p>Founder Wallet: 2%</p>
            <p>
              The Charity Wallet is the heart of CEOA’s mission. Buy Medical
              Debt & Forgive the Debt
            </p>
          </div>
        </div>
        <div className="closing_statement">
          <p>THIS AIN’T NO RIDE IN THE PARK!</p>
          <div className="closing_img">
            <img src={BikeRide} alt="" />
          </div>
          <div className="ceoca_statement">
            CEOAssassinCoin (CEOA) is more than just a meme coin - it’s a
            movement.
          </div>
        </div>
        Follow us!
        <div
          className={`${
            clicked ? "social_media clicked" : "social_media released"
          }`}
          onMouseEnter={clickedButtonEffect}
          onMouseLeave={releasedButtonEffect}
        >
          <div className="">
            <a
              href="https://x.com/ceoassassincoin"
              target="_blank"
              style={{ color: "white" }}
            >
              <i className="fa-brands fa-x-twitter" />
            </a>
          </div>
          <div className="">
            <a
              href="https://t.me/+hEoPKu3uNP81Zjcx"
              target="_blank"
              style={{ color: "white" }}
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
