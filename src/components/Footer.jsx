import styles from '../style';
import { socialMedia } from '../constants';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <div className="flex flex-row md:mt-0 mt-6">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white ml-6">
          Copyright
        </p>
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white ml-6">
          2023 PasionJP. All Rights Reserved.
        </p>
      </div>
      
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6': 'mr-0' }`}/>
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Footer