import Gallery from "./gallery"

const image_paths: string[] = [
  "pictures/slime0.png",
  "pictures/slime1.png",
  "pictures/slime2.png",
  "pictures/slime3.png",
]


export default function Home() {
  return (
    <Gallery images={image_paths} />
  )
}
