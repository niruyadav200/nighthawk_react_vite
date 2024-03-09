import { FC } from 'react';

const SocialMedia: FC = () => {
  return (
    <div className="col-12 mb-3">
      <ul className="social-icons list-unstyled list-inline text-center">
        <li className="list-inline-item">
          <a href="#">
            <img src="" alt="" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#">
            <img src="../assets/twiitter.png" alt="" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#">
            <img src="assets/instagram.png" alt="" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#">
            <img src="assets/linkedin.png" alt="" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#">
            <img src="assets/youtube.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;