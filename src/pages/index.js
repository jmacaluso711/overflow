import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{height: '70vh', display: 'flex', alignItems: 'center', 'justifyContent': 'center'}}>
      <div style={{ maxWidth: '900px', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <h1 style={{fontSize: '72px', textAlign: 'center'}}>We build beautiful digital products</h1>
        <Link to="/get-started" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4">Get Started</Link>
      </div>
    </div>
    <div style={{ backgroundColor: '#E53E3E', color: '#fff', height: '70vh'}}>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad unde labore tenetur magni possimus minima fugiat numquam nisi mollitia commodi, dolorum aliquid nemo nihil ratione! Natus recusandae consectetur sit! Consequatur.</p>
    </div>
  </Layout>
)

export default IndexPage
