import {
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="mt-8 bg-darkSecondary">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-4 py-4 text-white md:w-5/6 lg:grid-cols-3">
          <div className="col-span-1">
            <Image src="/images/logo-dark.png" height={50} width={50} />
            <div className="text-justify text-sm">
              <br />
              DqvBlock là một nền tảng cung cấp thông tin, kiến thức về các công
              nghệ mới. DqvBlock được thành lập bởi "Đặng Quang Vũ", Hiện đang
              là một Blockchain Developer. <br />
              Với nhiều năm kinh nghiệm trong việc nghiên cứu và phát triển sản
              phẩm về smart Contract & Blockchain. Hy vọng rằng những gì Vũ cung
              cấp sẽ mang lại cho mọi người một nền tảng kiến thức tốt.
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-2 md:grid-cols-3">
              <ul className="col-span1">
                <li className="text-lg font-bold text-secondary underline">
                  Projects
                </li>
                <li className="cursor-pointer hover:underline">DEX Swap</li>
                <li className="cursor-pointer hover:underline">LaunchPad</li>
                <li className="cursor-pointer hover:underline">
                  NFT Marketplace
                </li>
              </ul>

              <ul className="col-span1">
                <li className="text-lg font-bold text-secondary underline">
                  Courses
                </li>
                <li className="cursor-pointer hover:underline">Solidity</li>
                <li className="cursor-pointer hover:underline">Web3</li>
                <li className="cursor-pointer hover:underline">Rust Lang</li>
              </ul>
              <ul className="col-span1">
                <li className="text-lg font-bold text-secondary underline">
                  Others
                </li>
                <li className="cursor-pointer hover:underline">Liện hệ</li>
                <li className="cursor-pointer hover:underline"></li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <h1
              className="cursor-pointer pb-2 font-bold text-secondary underline"
              onClick={() => window.open("https://twitter.com/vugomars")}
            >
              @Contact Me
            </h1>
            <div className="border border-white py-2 pl-4">
              <p className="text-orange-400">Tuyên bố từ chối trách nhiệm:</p>
              Các thông tin được đăng trên DqvBlock chỉ mang ý kiến cá nhân của
              tác giả, không cấu thành bất kỳ lời khuyên đầu tư nào.
            </div>
            <div className="pt-4 text-secondary underline">Follow me on</div>
            <div className="flex space-x-2 pt-2 text-xl">
              <a
                className="aniBtn cursor-pointer"
                onClick={() =>
                  window.open("https://www.facebook.com/dangquangvu94/")
                }
              >
                <FaFacebook />
              </a>

              <a
                className="aniBtn cursor-pointer"
                onClick={() => window.open("https://twitter.com/vugomars")}
              >
                <FaTwitter />
              </a>

              <a
                className="aniBtn cursor-pointer"
                onClick={() => window.open("https://t.me/dangquangvu")}
              >
                <FaTelegram />
              </a>

              <a
                className="aniBtn cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/v%C5%A9-%C4%91%E1%BA%B7ng-quang-1696a5213/"
                  )
                }
              >
                <FaLinkedin />
              </a>

              <a
                className="aniBtn cursor-pointer"
                onClick={() => window.open("https://github.com/vugomars")}
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
