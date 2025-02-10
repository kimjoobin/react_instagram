import instagramLogo from '../../assets/images/instagram-logo.jpg'

interface LogoProps {
  page: string;
}

const Logo: React.FC<LogoProps> = ({page}) => {
  const className = page === 'login' ? 'h-[51px] mt-2 mb-3' : 'h-12'

  return (
    <div className="flex justify-center mb-8">
      <img
        src={instagramLogo}
        alt="Instagram"
        className={className}
      />
    </div>
  );
}

export default Logo;