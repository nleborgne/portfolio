import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Nicolas Le Borgne" />
    <h1>Nicolas Le Borgne</h1>
    <h1>Freelance Developer in Paris, France</h1>
    <h1>
      <a href="mailto:frontdesk@builtbynlb.com">frontdesk@builtbynlb.com</a>
    </h1>

    <ul>
    <li>
        <a target="_blank" href="https://boredom-shop.fr/">
          Boredom
        </a>
        <span className="small"> - online shop for a French clothing brand</span>
      </li>
      <li>
        <a target="_blank" href="https://kiaora.builtbynlb.com/">
          Kia Ora
        </a>
        <span className="small"> - apartment rental platform (React, GraphQL)</span>
      </li>
      <li>
        <a target="_blank" href="https://nleborgne.github.io/nCov/">
          nCov
        </a>
        <span className="small"> - Covid-19 dashboard (Vue)</span>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
