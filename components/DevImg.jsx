import Image from "next/image"

export default function DevImg({containerStyles, imgSrc}) {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="This is my Profile" className="rounded-full"/>
    </div>
  )
}
