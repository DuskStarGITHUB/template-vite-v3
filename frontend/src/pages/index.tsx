// DEPENDENCIES
import { Head } from "minista"
import Example from "@components/Example"

// WEB RENDER BASE "/"
export default function () {
  return (
    <>
      {/* METADATA */}
      <Head>
        <title>TEMPLATE VITE V3</title>
        <link rel="icon" href="/img/icon.png" />
        <link rel="stylesheet" href="/css/index.css" />
      </Head>
      <Example />
    </>
  )
}
