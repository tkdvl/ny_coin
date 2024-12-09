import "./App.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Shooter from "./assets/shooter.png"
import Hoodie from "./assets/hoodie.png"
import NYC_map from "./assets/nyc_map.png"
import BikeRide from "./assets/bikeride.png"

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="coin_intro">
          <div className="coin_name">CEOAssassincoin</div>
          <div className="acronym">(CEOA)</div>
        </div>
        <div className="opening_statement">
          <div className="">CREATING A COMMUNITY TO SUPPORT THE UNINSURED</div>
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
              debt for pennies on the dollar. By purchasing CEOASssassincoin you
              become a CEOAssassin team, helping those in medical distress, as
              medical debt in many places is a leading cause of financial
              hardship.
            </div>
          </div>
        </div>
        <div className="launch_plan_img">
          <img src={Hoodie} alt="hoodie" />
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
            <p>
              <a
                href="//yh2n.github.io/ny_coin_white_paper/"
                target="_blank"
                style={{ color: "white" }}
              >
                Read the White Paper
              </a>
            </p>
          </div>
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
            <img src={NYC_map} alt="" />
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
        <div className="social_media">
          <div className="">
            <i className="fa-brands fa-x-twitter" />
          </div>
          <div className="">
            <i className="fa-brands fa-telegram"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
