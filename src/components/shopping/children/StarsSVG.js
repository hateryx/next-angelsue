import Image from "next/image";

function StarsSVG() {
  return (
    <div className="inline-flex">
      <Image src="assets/star.svg" width={15} height={15} />
      <Image src="assets/star.svg" width={15} height={15} />
      <Image src="assets/star.svg" width={15} height={15} />
      <Image src="assets/star.svg" width={15} height={15} />
      <Image src="assets/star.svg" width={15} height={15} />
    </div>
  );
}

export default StarsSVG;
