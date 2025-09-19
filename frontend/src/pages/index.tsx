import { Head } from "minista"
import Example from "@components/Example"

export default function () {
  return (
    <>
      <Head>
        <title>Hello!</title>
        <link rel="icon" href="/img/icon.png" />
        <link rel="stylesheet" href="/css/index.css" />
      </Head>
      <Example />
    </>
  )
}
