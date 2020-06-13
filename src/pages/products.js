import React from "react"

import Layout from "../components/Layout"
import styles from "../components/products.module.css"

const products = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <p>Welcome to our products!</p>
        <p className={styles.color}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
          numquam doloribus laboriosam voluptatum aspernatur quas corporis
          repellat iure iste ipsam commodi atque unde culpa? Blanditiis?
        </p>
      </div>
    </Layout>
  )
}

export default products
