import { FC } from 'react';

const Footer: FC = () => {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12">
            <div className="copy-text">
              <p>© {year} Nighthawk. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;