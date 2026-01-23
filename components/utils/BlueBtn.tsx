import Image from "next/image";
import Link from "next/link";

type BlueBtnProps = {
  text: string;
  href?: string;
};

function BlueBtn({ text, href = "#" }: BlueBtnProps) {
  return (
    <Link href={href}>
      <div className="ml-10 flex py-3 px-4 bg-[#070750] justify-center items-center rounded-[8px] cursor-pointer hover:bg-[#050540] transition">
        <div className="text-white text-[16px] mr-2">
          {text}
        </div>

        <Image
          src="/Images/arrow.svg"
          width={20}
          height={20}
          alt="right arrow"
        />
      </div>
    </Link>
  );
}

export default BlueBtn;
